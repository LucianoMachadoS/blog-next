import Link from 'next/link';
import styles from './footer.module.css';
import { SITE_NAME } from '@/app/config/app-config';

export default function Footer() {
  return (
    <Link href={'/'} className={styles.footer}>
      Feito com carinho por {SITE_NAME}
    </Link>
  );
}
