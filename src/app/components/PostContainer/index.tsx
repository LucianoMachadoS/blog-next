import styles from './postContainer.module.css';

export type PostContainer = {
  content: string;
};

export const PostContainer = ({ content }: PostContainer) => {
  return (
    <article
      className={styles.postContainer}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
