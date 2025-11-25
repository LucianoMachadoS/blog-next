import { getAllPosts } from './data/posts/get-all-posts';
import HomePage from './containers/HomePage';

export default async function Home() {
  const { data: posts, meta } = await getAllPosts(1);

  return (
    <HomePage
      posts={posts}
      pagination={{
        page: 1,
        pageCount: meta.pagination.pageCount,
        basePath: '',
      }}
    />
  );
}
