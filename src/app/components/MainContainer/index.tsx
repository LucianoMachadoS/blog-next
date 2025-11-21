import styles from './maincontainer.module.css';

export type MainContainerProps = {
  children: React.ReactNode;
};

export const MainContainer = ({ children }: MainContainerProps) => {
  return <main className={styles.main}>{children}</main>;
};
