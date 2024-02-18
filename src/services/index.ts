import type {Category, ResultsProps} from "../types/types";

// `https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326&category=${categorie}`
const API_URL = "https://api.mercadolibre.com";
const SELLER_ID = "179571326";

export async function getResults(category?: string) {
  const url = new URL(`${API_URL}/sites/MLA/search`);

  if (!SELLER_ID) throw new Error("No seller id provided");
  url.searchParams.append("seller_id", SELLER_ID);
  if (category) url.searchParams.append("category", category);

  return fetch(url)
    .then((resp) => resp.json() as Promise<{results: ResultsProps[]}>)
    .then((data) => {
      return data;
    });
}

export async function getCategories(results: ResultsProps[]) {
  const categoriesId = Array.from(new Set(results.map((item) => item.category_id)));

  const allProductCategories = await Promise.all(
    categoriesId.map((id) =>
      fetch(`${API_URL}/categories/${id}`)
        .then((resp) => resp.json() as Promise<{path_from_root: {id: string; name: string}[]}>)
        .then((resp) => resp.path_from_root),
    ),
  );

  const draft: Record<string, Category> = {};

  allProductCategories.forEach((productCategories) => {
    productCategories.forEach((singleCategory, index) => {
      const {id} = singleCategory;

      const parent = productCategories[index - 1] as Category | null;
      const parentId = parent?.id ?? null;

      draft[id] = {...singleCategory, parentId};
    });
  });

  return Object.values(draft);
}
