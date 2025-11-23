declare module 'cusdis' {
  import React from 'react';

  interface CusdisAttrs {
    host: string;
    appId: string;
    pageId: string;
    pageTitle?: string;
    pageUrl?: string;
    theme?: 'light' | 'dark' | 'auto';
  }

  interface ReactCusdisProps {
    attrs: CusdisAttrs;
    lang?: string;
    style?: React.CSSProperties;
  }

  const ReactCusdis: React.FC<ReactCusdisProps>;
  export default ReactCusdis;
}
