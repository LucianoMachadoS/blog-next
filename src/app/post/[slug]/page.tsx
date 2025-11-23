import { Post } from '@/app/containers/Post';
import { getPostBySlug } from '@/app/data/posts/get-post';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage(props: Props) {
  const params = await props.params;
  const slug = params.slug;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }
  return <Post post={post} />;
}
