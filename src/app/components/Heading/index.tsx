import styles from './heading.module.css';

export type HeadingProps = {
  children: React.ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
  return <h2 className={styles.heading}>{children}</h2>;
};
