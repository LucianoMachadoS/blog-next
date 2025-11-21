import Link from 'next/link';
import styles from './header.module.css';
import { SITE_NAME } from '@/app/config/app-config';

export default function Header() {
  return (
    <Link href={'/'} className={styles.header}>
      {SITE_NAME}
    </Link>
  );
}
