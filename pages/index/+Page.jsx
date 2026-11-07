import { useData } from 'vike-react/useData';
import { assetUrl } from '../../src/lib/assetUrl.js';

export default function Page() {
  const { posts } = useData();

  return (
    <div className="max-w-4xl mx-auto w-full">
      <ul className="flex flex-col list-none p-0 m-0 border-y border-brand-border/50 divide-y divide-brand-border/50">
        {posts.map((post) => (
          <li key={post.slug}>
            <a
              href={assetUrl(post.slug)}
              className="flex gap-5 sm:gap-6 py-5 sm:py-6 no-underline text-inherit hover:bg-brand-muted/40 transition-colors"
            >
              <img
                src={assetUrl(
                  `post-images/${post.coverImage === 'undefined' || !post.coverImage ? 'lg.png' : post.coverImage}`,
                )}
                alt=""
                className="w-36 sm:w-44 shrink-0 aspect-video rounded-md object-cover"
                style={{ imageRendering: 'pixelated' }}
              />

              <div className="flex flex-col justify-center min-w-0 flex-1 gap-1.5">
                <h2 className="text-lg sm:text-xl font-bold leading-snug">
                  {post.title}
                </h2>

                {post.preview ? (
                  <p className="text-sm opacity-70 line-clamp-2 leading-relaxed">
                    {post.preview}
                  </p>
                ) : null}

                <p className="text-sm opacity-60">
                  {post.author ? (
                    <>
                      By <span className="font-medium">{post.author.name}</span>
                    </>
                  ) : null}
                  {post.author && post.sub ? <span> — </span> : null}
                  {post.sub ? <time>{post.sub}</time> : null}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
