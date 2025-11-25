export type PaginationMeta = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type StrapiResponse<T> = {
  data: T[];
  meta: {
    pagination: PaginationMeta;
  };
};
