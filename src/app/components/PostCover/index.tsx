import Image from 'next/image';
import styles from './post-cover.module.css';

export type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

export const PostCover = ({ coverUrl, alt }: PostCoverProps) => {
  return (
    <div className={styles.img}>
      <Image src={coverUrl} width={700} height={400} alt={alt} />
    </div>
  );
};
