import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { Heading } from '@/app/components/Heading';
import { MainContainer } from '@/app/components/MainContainer';
import { PostCover } from '@/app/components/PostCover';
import { PostData } from '@/app/domain/posts/post';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />
      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostCover coverUrl={post.cover.url} alt={post.title} />
        <article dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContainer>
      <Footer />
    </>
  );
};
