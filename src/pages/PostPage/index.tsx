// @ts-nocheck

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostBySlug } from "../../utils/postsHelper";
import Markdown from "react-markdown";

export default function PostPage() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostBySlug(slug).then(setPost);
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  const hasCoverImage = post.coverImage !== "undefined";

  return (
    <article className="max-w-[740px] mx-auto my-8">
      <h1 className="text-5xl font-bold mt-8">{post.title}</h1>
      <p className="text-xl opacity-70 mb-9 mt-5">{post.sub}</p>
      {hasCoverImage && (
        <img
          src={`post-images/${post.coverImage}`}
          alt={post.title}
          className="w-full h-auto object-cover rounded-md"
        />
      )}

      <div className="prose max-w-none mt-8 article">
        <Markdown>{post.content}</Markdown>
      </div>
    </article>
  );
}
