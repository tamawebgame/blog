import Markdown from 'react-markdown';
import { useData } from 'vike-react/useData';
import { assetUrl } from '../../src/lib/assetUrl.js';

export default function Page() {
  const { post } = useData();
  const hasCoverImage = post.coverImage && post.coverImage !== 'undefined';

  return (
    <article className="max-w-[740px] mx-auto my-8">
      <h1 className="text-5xl font-bold mt-8">{post.title}</h1>
      {post.tags?.length > 0 ? (
        <ul className="flex flex-wrap gap-2 list-none p-0 m-0 mt-4">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-md border border-orange-300/60 bg-orange-50/80"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-9 mt-5 text-sm">
        {post.sub ? (
          <time className="opacity-70">{post.sub}</time>
        ) : null}
        {post.author ? (
          <div className="flex items-center gap-2">
            <img
              src={assetUrl(`authors/${post.author.image}`)}
              alt=""
              className="w-9 h-9 rounded-lg object-cover"
              style={{ imageRendering: 'pixelated' }}
            />
            <div className="leading-tight">
              <span className="font-semibold">{post.author.name}</span>
              <span className="opacity-70"> · {post.author.role}</span>
            </div>
          </div>
        ) : null}
      </div>
      {hasCoverImage ? (
        <img
          src={assetUrl(`post-images/${post.coverImage}`)}
          alt={post.title}
          className="w-full h-auto object-cover rounded-md max-h-96"
        />
      ) : null}

      <div className="prose max-w-none mt-8 article">
        <Markdown>{post.content}</Markdown>
      </div>
    </article>
  );
}
