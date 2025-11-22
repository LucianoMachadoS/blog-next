import Link from 'next/link';

import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>O post que você está procurando não existe ou foi removido.</p>

      <Link href="/" className={styles.link}>
        Voltar para a Home
      </Link>
    </div>
  );
}
