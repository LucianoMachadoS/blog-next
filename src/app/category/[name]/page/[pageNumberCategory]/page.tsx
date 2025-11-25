import { getPostsByCategory } from '@/app/data/posts/get-posts-by-category';
import HomePage from '@/app/containers/HomePage';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllCategories } from '@/app/data/categories/get-all-categories';

type Props = {
  params: Promise<{ name: string; pageNumberCategory: string }>;
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryName = decodeURIComponent(resolvedParams.name);
  const page = resolvedParams.pageNumberCategory;

  return {
    title: `${capitalize(categoryName)} - Página ${page}`,
    description: `Página ${page} dos artigos sobre ${categoryName}.`,
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  const paths = [];
  const categories = await getAllCategories();

  for (const category of categories) {
    const { meta } = await getPostsByCategory(category.name, 1);

    const totalPages = meta.pagination.pageCount;

    if (totalPages > 1) {
      for (let i = 2; i <= totalPages; i++) {
        paths.push({
          name: category.name,
          pageNumber: String(i),
        });
      }
    }
  }

  return paths;
}

export default async function CategoryPaginationPage(props: Props) {
  const params = await props.params;
  const categoryName = decodeURIComponent(params.name);
  const page = Number(params.pageNumberCategory);

  const { data: posts, meta } = await getPostsByCategory(categoryName, page);

  if (!posts || posts.length === 0) {
    notFound();
  }

  return (
    <HomePage
      posts={posts}
      category={categoryName}
      pagination={{
        page: page,
        pageCount: meta.pagination.pageCount,
        basePath: `/category/${params.name}`,
      }}
    />
  );
}
