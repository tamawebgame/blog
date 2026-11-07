import { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default function SharePageButton({ title, text, className = '' }) {
  const handleShare = useCallback(async () => {
    const url = window.location.href;
    const shareData = {
      title,
      text: text || title,
      url,
    };

    if (typeof navigator.share === 'function') {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if (err?.name === 'AbortError') return;
      }
    }

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
    }
  }, [title, text]);

  return (
    <button
      type="button"
      aria-label="Share"
      onClick={handleShare}
      className={className}
    >
      <FontAwesomeIcon icon={faLink} size="sm" />
    </button>
  );
}
