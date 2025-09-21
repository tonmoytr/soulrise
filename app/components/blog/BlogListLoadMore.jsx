// components/blog/BlogListLoadMore.jsx
"use client";
import { useState } from "react";
import BlogList from "./BlogList";

export default function BlogListLoadMore({ allPosts, pageSize = 4 }) {
  const [count, setCount] = useState(pageSize);
  const shown = allPosts.slice(0, count);
  const more = count < allPosts.length;

  return (
    <>
      <BlogList posts={shown} />
      {more && (
        <div
          className="container w-container"
          style={{ textAlign: "center", marginTop: 32 }}
        >
          <button
            className="transparent-button large w-button"
            onClick={() => setCount((c) => c + pageSize)}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}
