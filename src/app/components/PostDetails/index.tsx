import styles from './postDetails.module.css';
import Date from '../Date';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export default function PostDetails({
  date,
  author,
  category,
}: PostDetailsProps) {
  return (
    <div className={styles.postDetails}>
      Publicado em <Date date={date} /> por {author} | {category}
    </div>
  );
}
