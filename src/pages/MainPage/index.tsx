// @ts-nocheck

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "../../utils/postsHelper";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 max-w-[900px] mx-auto">
      {posts.map((post) => (
        <Link
          key={post.slug}
          to={`/blog/${post.slug}`}
          className="flex flex-grow"
        >
          <article className="rounded-xl overflow-hidden border w-full">
            <img
              src={`post-images/${post.coverImage === "undefined" ? "lg.png" : post.coverImage}`}
              alt={post.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <h2 className="text-2xl font-bold">{post.title}</h2>

              <p className="opacity-70">{post.subtitle}</p>

              <p className="mt-2">{post.description}</p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
