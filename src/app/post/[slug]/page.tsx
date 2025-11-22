import { Post } from '@/app/containers/Post';
import { getPostBySlug } from '@/app/data/posts/get-post';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage(props: Props) {
  // 1. Busca o post pelo slug da URL
  const params = await props.params;
  const slug = params.slug;

  const post = await getPostBySlug(slug);
  // 2. Se não achou nada, manda para página 404
  if (!post) {
    notFound();
  }

  // 3. Renderiza o Post
  return <Post post={post} />;
}
