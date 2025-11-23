/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { API_URL } from '@/app/config/app-config';
import styles from './comments.module.css';
import { useEffect } from 'react';
import { Heading } from '../Heading';

export type CommentsProps = {
  slug: string;
  title: string;
};

export const Comments = ({ slug, title }: CommentsProps) => {
  useEffect(() => {
    // 1. Função para carregar o script do Cusdis
    const loadCusdis = () => {
      // Se o objeto CUSDIS já existir (usuário navegou entre páginas), força o reinício
      if ((window as any).CUSDIS) {
        (window as any).CUSDIS.initial();
        return;
      }

      // Se não existir, cria a tag script e injeta no head
      const script = document.createElement('script');
      script.src = 'https://cusdis.com/js/cusdis.es.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    loadCusdis();

    // Cleanup opcional: geralmente não precisa remover o script,
    // pois ele pode ser reusado em outros posts
  }, [slug]); // Roda toda vez que o slug mudar (troca de post)

  return (
    <div className={styles.component}>
      <Heading>Comentários</Heading>
      <div
        id="cusdis_thread"
        data-host="https://cusdis.com"
        data-app-id="d5aaf2c6-7e3d-40c7-9515-7c6d89018a89"
        data-page-id={slug}
        data-page-url={`${API_URL}/post/${slug}`}
        data-page-title={title}
        data-theme="auto"
      ></div>
    </div>
  );
};
