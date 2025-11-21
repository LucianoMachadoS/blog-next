import { PostData } from '@/app/domain/posts/post';
import styles from './home.module.css';
import Header from '../../components/Header';
import { MainContainer } from '@/app/components/MainContainer';
import { PostCard } from '@/app/components/PostCard';
import Footer from '@/app/components/Footer';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  if (!posts || !Array.isArray(posts)) {
    return (
      <MainContainer>
        <div>Nenhum post encontrado.</div>
      </MainContainer>
    );
  }

  return (
    <>
      <Header />
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
      </MainContainer>
      <Footer />
    </>
  );
}
