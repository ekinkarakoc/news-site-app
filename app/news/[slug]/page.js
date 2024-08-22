import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import React from "react";

const NewsDetailPage = ({ params }) => {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => {
    return newsItem.slug == newsSlug;
  });

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header className="header">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <div className="header-content">
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
          <p>{newsItem.content}</p>
        </div>
      </header>
    </article>
  );
};

export default NewsDetailPage;
