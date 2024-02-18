export interface Result {
  results: ResultsProps[];
}

export interface ResultsProps {
  id: string;
  title: string;
  condition: string;
  thumbnail: string;
  price: number;
  available_quantity: number;
  category_id: string;
  currency_id: string;
  permalink: string;
}

export interface Category {
  id: string;
  name: string;
  parentId: string | null;
}
