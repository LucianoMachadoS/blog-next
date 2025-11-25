import { PAGE_SIZE } from '@/app/config/app-config';
import HomePage from '@/app/containers/HomePage';
import { countAllPosts } from '@/app/data/posts/count-all-posts';
import { getAllPosts } from '@/app/data/posts/get-all-posts';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ pageNumber: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `Página ${resolvedParams.pageNumber} | Luciano Machado`,
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  const totalPosts = await countAllPosts();
  const pageSize = PAGE_SIZE;
  const totalPages = Math.ceil(totalPosts / pageSize);

  if (totalPages <= 1) return [];

  const paths = [];
  for (let i = 2; i <= totalPages; i++) {
    paths.push({ pageNumber: String(i) });
  }

  return paths;
}

export default async function PageNumber(props: PageProps) {
  const params = await props.params;
  const page = Number(params.pageNumber);

  const { data: posts, meta } = await getAllPosts(page);

  if (!posts || posts.length === 0) {
    notFound();
  }

  return (
    <HomePage
      posts={posts}
      pagination={{
        page: page,
        pageCount: meta.pagination.pageCount,
        basePath: '',
      }}
    />
  );
}
