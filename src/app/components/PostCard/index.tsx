import Link from 'next/link';
import styles from './postCard.module.css';
import Image from 'next/image';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
  width: number;
};

export const PostCard = ({ slug, title, cover, width }: PostCardProps) => {
  return (
    <div className={styles.postCard}>
      <div className={styles.postCardCover}>
        <Link href={`/post/${slug}`}>
          <Image src={cover} alt={title} width={width} height={300} />
        </Link>
      </div>
      <div className={styles.postCardHeading}>
        <Link href={`/post/${slug}`}>{title}</Link>
      </div>
    </div>
  );
};
