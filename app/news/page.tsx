import { getNewsList } from '@/app/libs/microcms';
import NewsList from '@/app/components/NewsList';
import Pagination from '@/app/components/Pagination';
import SearchField from '@/app/components/SearchField';
import { NEWS_LIST_LIMIT } from '@/app/constants';

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}