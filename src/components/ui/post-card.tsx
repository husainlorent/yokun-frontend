import React from 'react';
import { OptimizedImage } from './optimized-image';
import type { IPost } from '@/types/post.interface';
import { FormattedDate } from '../common/FormattedDate';
import { AppLink } from '../common/AppLink';


interface PostsCardProps {
  data: IPost;
  className?: string;
}

const PostsCard: React.FC<PostsCardProps> = ({ data, className = "" }) => {
  return (
    <div className={`flex-shrink-0 px-3 ${className}`}>
      <AppLink to={`/post/${data.id}`}>
        <article className="group cursor-pointer rounded-lg border border-border-grey overflow-hidden">
          <div className="relative overflow-hidden rounded-t-lg">
            {
              data.image ?
                <OptimizedImage
                  src={data.image}
                  alt={data.title}
                  className="lg:aspect-[16/12] aspect-[16/9] transition-transform duration-300 group-hover:scale-105"
                /> : null
            }

          </div>

          <div className="p-4 space-y-2 h-32 bg-white">
            <FormattedDate date={data.createdAt} className="text-xs text-gray-500" />
            <h3 className="font-semibold text-black leading-tight line-clamp-3 group-hover:text-blue-600 transition-colors">
              {data.title}
            </h3>
          </div>
        </article>
      </AppLink>
    </div>
  );
};

export default PostsCard;
