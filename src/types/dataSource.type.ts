export type DataSourceError = {
  message: string;
};

export type DataSourceResponse<T> = {
  error: DataSourceError | null;
  result: T | null;
};
