import { Comments } from '@/app/components/Comments';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { Heading } from '@/app/components/Heading';
import { MainContainer } from '@/app/components/MainContainer';
import { PostContainer } from '@/app/components/PostContainer';
import { PostCover } from '@/app/components/PostCover';
import PostDetails from '@/app/components/PostDetails';
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
        <PostDetails
          author={post.author.name}
          category={post.category.name}
          date={post.createdAt}
        />
        <PostContainer content={post.content} />
        <Comments slug={post.slug} title={post.title} />
      </MainContainer>
      <Footer />
    </>
  );
};
