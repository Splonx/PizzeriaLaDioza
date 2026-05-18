import { useState } from "react";

export default function OptimizedImage({
  src,
  fallback,
  alt,
  className = "",
  loading = "lazy",
  sizes = "100vw"
}) {
  const [currentSrc, setCurrentSrc] = useState(src || fallback);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      sizes={sizes}
      onError={() => {
        if (fallback && currentSrc !== fallback) {
          setCurrentSrc(fallback);
        }
      }}
    />
  );
}
