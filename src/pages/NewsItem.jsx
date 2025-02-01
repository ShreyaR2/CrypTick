import React from "react";

const NewsItem = ({ newsItem }) => {
  return (
    <li>
      <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
        {newsItem.title}
      </a>{" "}
      - <small>{new Date(newsItem.published_at).toLocaleDateString()}</small>
    </li>
  );
};

export default NewsItem;
