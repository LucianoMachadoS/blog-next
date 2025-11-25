import Link from 'next/link';
import styles from './pagination.module.css';

export type PaginationProps = {
  page: number;
  pageCount: number;
  basePath?: string;
};

export default function Pagination({
  page,
  pageCount,
  basePath = '',
}: PaginationProps) {
  const hasNextPage = page < pageCount;
  const hasPrevPage = page > 1;

  const getPageLink = (pageNumber: number) => {
    if (pageNumber === 1) {
      return `${basePath}/`;
    }
    return `${basePath}/page/${pageNumber}`;
  };

  return (
    <div className={styles.pagination}>
      {hasPrevPage && (
        <Link href={getPageLink(page - 1)} className={styles.buttonPrev}>
          Anterior
        </Link>
      )}

      <span className={styles.info}>
        Página {page} de {pageCount}
      </span>

      {hasNextPage && (
        <Link href={getPageLink(page + 1)} className={styles.buttonNext}>
          Próxima
        </Link>
      )}
    </div>
  );
}
