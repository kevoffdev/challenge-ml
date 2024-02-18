"use client";

import type {Category} from "../types/types";

import Link from "next/link";
import {useState} from "react";

function CategoryItem({category, categories}: {category: Category; categories: Category[]}) {
  const [expanded, setExpanded] = useState(false);
  const handleCLick = () => setExpanded((value) => !value);
  const hasSubCategories = categories.filter(({parentId}) => parentId === category.id).length > 0;

  return (
    <li key={category.name} className="ml-2">
      {hasSubCategories ? (
        <button className="mr-2 text-white" type="button" onClick={handleCLick}>
          {expanded ? "-" : "+"}
        </button>
      ) : null}
      {hasSubCategories ? category.name : <Link href={`/${category.id}`}> {category.name}</Link>}
      {expanded ? <ListCategories categories={categories} parentCategory={category.id} /> : null}
    </li>
  );
}

export function ListCategories({
  categories,
  parentCategory = null,
}: {
  categories: Category[];
  parentCategory?: string | null;
}) {
  const rootCategories = categories.filter(({parentId}) => {
    return parentId === parentCategory;
  });

  return (
    <ul className="ml-2">
      {rootCategories.map((category) => (
        <CategoryItem key={category.id} categories={categories} category={category} />
      ))}
    </ul>
  );
}
