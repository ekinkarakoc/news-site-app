import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";
import React from "react";

const LatestNewsPage = () => {
  const latestNews = getLatestNews();
  return (
    <div>
      <h1>Latest News</h1>
      <NewsList news={latestNews} />
    </div>
  );
};

export default LatestNewsPage;
