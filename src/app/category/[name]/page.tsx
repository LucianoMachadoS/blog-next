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

  const categoryRaw = decodeURIComponent(resolvedParams.name);

  const categoryName =
    categoryRaw.charAt(0).toUpperCase() + categoryRaw.slice(1);

  return {
    title: `Categoria: ${categoryName}`,
    description: `Veja todos os artigos sobre ${categoryName} no blog do Luciano Machado.`,

    openGraph: {
      title: `Posts sobre ${categoryName}`,
      description: `Artigos e tutoriais sobre ${categoryName}.`,
    },
  };
}

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
