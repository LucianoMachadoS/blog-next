export type PostID = number;

export type PostImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

// 2. A Imagem completa (Capa)
export type PostCover = {
  id: PostID;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large: PostImageFormat;
    medium: PostImageFormat;
    small: PostImageFormat;
    thumbnail: PostImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

// 3. Categoria
export type PostCategory = {
  id: PostID;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type PostAuthor = {
  id: PostID;
  documentId: string;
  name: string;
};

// 5. O Post Principal
export type PostData = {
  id: PostID;
  documentId: string;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: PostCover;
  author: PostAuthor;
  category: PostCategory;
};
