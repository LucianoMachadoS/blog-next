import { PostData } from '@/app/domain/posts/post';
import styles from './home.module.css';
import Header from '../../components/Header';
import { MainContainer } from '@/app/components/MainContainer';
import { PostCard } from '@/app/components/PostCard';
import Footer from '@/app/components/Footer';
import { Heading } from '@/app/components/Heading';
import Pagination from '@/app/components/Pagination';

export type PaginationData = {
  page: number;
  pageCount: number;
  basePath?: string;
};

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};

export default function HomePage({
  posts,
  category,
  pagination,
}: HomePageProps) {
  return (
    <>
      <Header />
      {category && (
        <Heading>
          <div className={styles.headingCategory}>
            Categoria: <span>{category}</span>
          </div>
        </Heading>
      )}
      <MainContainer>
        <div className={styles.container}>
          {posts.map((post: PostData) => (
            <PostCard
              key={post.slug}
              cover={post.cover?.formats?.small?.url || post.cover.url}
              slug={post.slug}
              title={post.title}
              width={post.cover?.formats?.small?.width || 500}
            />
          ))}
        </div>
        {pagination && (
          <Pagination
            page={pagination.page}
            pageCount={pagination.pageCount}
            basePath={pagination.basePath}
          />
        )}
      </MainContainer>
      <Footer />
    </>
  );
}
