import { MainContainer } from '@/app/components/MainContainer';
import HomePage from '@/app/containers/HomePage';
import { getPostsByCategory } from '@/app/data/posts/get-posts-by-category';
import { Metadata } from 'next';

type MetaDataProps = {
  params: Promise<{ name: string }>;
};

export async function generateMetadata({
  params,
}: MetaDataProps): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryName = decodeURIComponent(resolvedParams.name);

  return {
    title: `Posts sobre ${categoryName} | Luciano Machado`,
  };
}

// 2. A Página
export default async function CategoryPage(props: MetaDataProps) {
  const params = await props.params;
  const categoryName = decodeURIComponent(params.name);

  const posts = await getPostsByCategory(categoryName);

  if (posts.length === 0) {
    return (
      <MainContainer>
        <h2>Categoria: {categoryName}</h2>
        <p>Ainda não existem posts nesta categoria.</p>
      </MainContainer>
    );
  }

  return <HomePage posts={posts} category={categoryName} />;
}
