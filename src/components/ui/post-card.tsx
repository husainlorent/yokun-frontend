import React from 'react';
import { OptimizedImage } from './optimized-image';


interface PostsCardProps {
  data: {
    date: string;
    image: string;
    name: string;
    author?: string;
  };
  className?: string;
}

const PostsCard: React.FC<PostsCardProps> = ({ data, className = "" }) => {
  return (
    <div className={`flex-shrink-0 px-3  ${className}`}>
      <article className="group cursor-pointer rounded-lg border border-border-grey overflow-hidden">
        <div className="relative overflow-hidden rounded-t-lg">
          <OptimizedImage
            src={data.image}
            alt={data.name}
            className="lg:aspect-[16/12] aspect-[16/9] transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <div className="p-4 space-y-2 h-32 bg-white">
          <span className="text-xs text-gray-500">{data.date}</span>
          <h3 className="font-semibold text-black leading-tight line-clamp-3 group-hover:text-blue-600 transition-colors">
            {data.name}
          </h3>
        </div>
      </article>
    </div>
  );
};

export default PostsCard;