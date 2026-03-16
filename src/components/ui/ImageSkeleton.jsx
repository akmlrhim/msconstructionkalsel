import { useState } from "react";

export default function ImageSkeleton({ src, alt, className = "", onClick }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative w-full h-full ${className}`}
      onClick={onClick}
    >
      {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse w-full h-full rounded-2xl" />}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
          isLoaded ? "opacity-100 group-hover:scale-110" : "opacity-0"
        }`}
      />
    </div>
  );
}
