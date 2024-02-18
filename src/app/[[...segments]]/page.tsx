import Results from "@/components/Results";
import {getResults} from "@/services";

export default async function page({params: {segments}}: {params: {segments?: string}}) {
  const seg = segments?.[0];
  const {results} = await getResults(seg);

  return <Results results={results} />;
}
