import { useData } from 'vike-react/useData';
import { assetUrl } from '../../src/lib/assetUrl.js';

export default function Page() {
  const { posts } = useData();

  return (
    <div className="flex flex-wrap gap-4 max-w-[900px] mx-auto">
      {posts.map((post) => (
        <a
          key={post.slug}
          href={assetUrl(post.slug)}
          className="flex flex-grow no-underline text-inherit"
        >
          <article className="rounded-xl overflow-hidden border border-brand-border/50 bg-canvas/80 w-full">
            <img
              src={assetUrl(
                `post-images/${post.coverImage === 'undefined' || !post.coverImage ? 'lg.png' : post.coverImage}`,
              )}
              alt={post.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <h2 className="text-2xl font-bold">{post.title}</h2>

              {post.sub ? <p className="opacity-70">{post.sub}</p> : null}

              {post.description ? (
                <p className="mt-2">{post.description}</p>
              ) : null}
            </div>
          </article>
        </a>
      ))}
    </div>
  );
}
