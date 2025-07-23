import { Calendar, Eye } from "lucide-react";
import { FormattedDate } from "@/components/common/FormattedDate";
import type { INews } from "@/types/news.interface";

interface PostDetailHeaderProps {
    postData?: INews;
}

export const PostDetailHeader = ({ postData }: PostDetailHeaderProps) => {

    return (
        <header className="pb-4 border-b border-gray-100">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {postData?.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                    <time dateTime={postData?.createdAt} className="font-medium">
                        <FormattedDate date={postData?.createdAt ?? ""} />
                    </time>
                </div>

                <div className="flex items-center text-gray-600">
                    <Eye className="h-5 w-5 mr-2 text-green-500" />
                    <span className="font-medium">{postData?.views ?? 0}</span>
                </div>
            </div>
        </header>
    );
};
