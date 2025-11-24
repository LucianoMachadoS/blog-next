import { Post } from '@/app/containers/Post';
import { getPostBySlug } from '@/app/data/posts/get-post';
import { removeHtml } from '@/app/utils/remove-html';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

type MetaDataProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: MetaDataProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return { title: 'Post não encontrado' };
  }

  const cleanDescription = removeHtml(post.content).slice(0, 150) + '...';

  return {
    title: post.title,
    description: cleanDescription,
    openGraph: {
      title: post.title,
      description: cleanDescription,
      images: [
        {
          url: post.cover?.url || '',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function PostPage(props: Props) {
  const params = await props.params;
  const slug = params.slug;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }
  return <Post post={post} />;
}
