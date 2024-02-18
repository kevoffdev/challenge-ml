import type {ResultsProps} from "@/types/types";

export default function Results({results}: {results: ResultsProps[]}) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5">
      {results.map((item) => {
        return (
          <li key={item.id}>
            <a href={item.permalink}>
              <img alt={item.thumbnail} src={item.thumbnail} />
              <p>{item.title}</p>
              <strong>
                {item.price.toLocaleString("es-AR", {
                  currency: item.currency_id,
                  style: "currency",
                })}
              </strong>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
