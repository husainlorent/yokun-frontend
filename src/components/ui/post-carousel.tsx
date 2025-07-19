import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PostsCarouselProps {
  children: React.ReactNode;
  options?: object;
  className?: string;
}


const PostsCarousel: React.FC<PostsCarouselProps> = ({
  children,
  options = {
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    },
  },
  className = "",
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollButtons();
    emblaApi.on('select', updateScrollButtons);
    emblaApi.on('reInit', updateScrollButtons);
  }, [emblaApi, updateScrollButtons]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={`relative ${className}`}>

      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className={`bg-black/80 hover:bg-black shadow-lg rounded-full p-2 transition-all duration-200 
            ${!canScrollPrev ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:scale-110'}
          `}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
      </div>


      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className={`bg-black/80 hover:bg-black shadow-lg rounded-full p-2 transition-all duration-200 
            ${!canScrollNext ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:scale-110'}
          `}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PostsCarousel;
