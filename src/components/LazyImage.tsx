// src/components/LazyImage.tsx
import React, { useEffect, useRef, useState } from "react";
import { getImagePath } from "../helpers/getImagePath";

interface LazyImageProps {
  src: string;
  size: string;
}

const LazyImage = ({ src, size = "w500", ...props }: LazyImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    let observer: IntersectionObserver;

    if (img) {
      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              img.src = getImagePath(size, src);
              obs.disconnect();
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      observer.observe(img);
    }

    return () => observer && observer.disconnect();
  }, [src]);

  return (
    <div className={`wrapper-image ${isLoaded ? "loaded" : ""}`}>
      <img ref={imgRef} src={undefined} onLoad={() => setIsLoaded(true)} className="lazy-image" {...props} />
    </div>
  );
};

export default LazyImage;
