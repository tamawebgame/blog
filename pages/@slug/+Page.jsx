import Markdown from 'react-markdown';
import { useData } from 'vike-react/useData';
import { assetUrl } from '../../src/lib/assetUrl.js';

export default function Page() {
  const { post } = useData();
  const hasCoverImage = post.coverImage && post.coverImage !== 'undefined';

  return (
    <article className="max-w-[740px] mx-auto my-8">
      <h1 className="text-5xl font-bold mt-8">{post.title}</h1>
      {post.sub ? <p className="text-xl opacity-70 mb-9 mt-5">{post.sub}</p> : null}
      {hasCoverImage ? (
        <img
          src={assetUrl(`post-images/${post.coverImage}`)}
          alt={post.title}
          className="w-full h-auto object-cover rounded-md"
        />
      ) : null}

      <div className="prose max-w-none mt-8 article">
        <Markdown>{post.content}</Markdown>
      </div>
    </article>
  );
}
