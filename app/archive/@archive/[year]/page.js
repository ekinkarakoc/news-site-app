import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";
import React from "react";

const FilteredNewsPage = ({ params }) => {
  const news = getNewsForYear(params.year);
  return <NewsList news={news} />;
};

export default FilteredNewsPage;
