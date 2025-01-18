import  {getNewsList} from "@/app/libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/constants";
import NewsList from "@/app/components/NewsList";
import SearchField from "@/app/components/SearchField";
 
type Props = {
    searchParams: {
        q?: string;
    };
};

export  default async function Page({searchParams}: Props) {
    const { contents: news }  = await getNewsList ({
        limit: NEWS_LIST_LIMIT,
        q: searchParams.q,
    });

    return (
        <>
        <SearchField/>
        <NewsList news={news}/>
        </>
    );
}