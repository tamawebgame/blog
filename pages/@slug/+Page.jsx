import Markdown from 'react-markdown';
import { useData } from 'vike-react/useData';
import { assetUrl } from '../../src/lib/assetUrl.js';
import { remarkGroupImages } from '../../src/lib/remarkGroupImages.js';

export default function Page() {
  const { post } = useData();
  const hasCoverImage = post.coverImage && post.coverImage !== 'undefined';

  return (
    <article className="max-w-[740px] mx-auto my-8">
      {post.tags?.length > 0 && (
        <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-md border border-accent/40 bg-accent/10 text-accent"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
      <h1 className="text-5xl font-bold mt-4">{post.title}</h1>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6 mt-5 text-sm flex-col">
        <div className="flex items-center gap-3 border border-brand-border/50 bg-canvas/60 p-2 px-4 rounded-md">
          <img
            src={assetUrl(`authors/${post.author.image}`)}
            alt=""
            className="w-9 h-9 rounded-lg object-cover"
            style={{ imageRendering: 'pixelated' }}
          />
          <div className="flex flex-col gap-0 text-base">
            <div>
              <span className="font-semibold">{post.author.name}</span>
              <span className="opacity-70"> · {post.author.role}</span>
            </div>
            <time className="opacity-70 text-sm">{post.sub}</time>
          </div>
        </div>
      </div>
      {hasCoverImage && (
        <img
          src={assetUrl(`post-images/${post.coverImage}`)}
          alt={post.title}
          className="w-full h-auto object-cover rounded-md max-h-96"
        />
      )}

      <div className="prose prose-brand max-w-none mt-8 article">
        <Markdown remarkPlugins={[remarkGroupImages]}>
          {post.content}
        </Markdown>
      </div>
    </article>
  );
}
