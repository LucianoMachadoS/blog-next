import { getAllPosts } from './data/posts/get-all-posts';
import HomePage from './containers/HomePage';

export default async function Home() {
  const posts = await getAllPosts();

  return <HomePage posts={posts} />;
}
