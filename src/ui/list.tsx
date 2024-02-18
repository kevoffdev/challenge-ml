"use client";

import type {Categorie} from "./listcategories";

import {useState} from "react";

export default function List({
  categorieName,
  categories,
}: {
  categorieName: string;
  categories: Categorie[];
}) {
  const [infoCategorie, setinfoCategorie] = useState<string[]>([]);
  const handleClick = () => {
    const data = categories.map(
      (categorie) =>
        categorie.path_from_root[0].name === categorieName &&
        categorie.path_from_root.splice(1, 2).map((item) => item),
    );
    const x = data.flat().filter((item) => item !== false);
    // const fer = new Set(x.map((item) => item));

    setinfoCategorie
    // setinfoCategorie(x);
  };

  return (
    <div className="flex gap-2">
      <button type="button" onClick={handleClick}>
        +
      </button>
      <p>{categorieName} </p>

    </div>
  );
}
