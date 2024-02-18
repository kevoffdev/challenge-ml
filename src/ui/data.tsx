export default async function Data({id}: {id: string}) {
  const data = await fetch(`https://api.mercadolibre.com/categories/${id}`).then((resp) =>
    resp.json(),
  );

  console.log(data);

  return;
}
