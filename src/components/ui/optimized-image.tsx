import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export const OptimizedImage = ({ src, alt, width, height, className }: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false) 
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {hasError ? (
        <div className="flex items-center justify-center h-full bg-gray-100">
          <span className="text-gray-400">Image not found</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  )
}