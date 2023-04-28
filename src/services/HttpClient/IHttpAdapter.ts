interface IRequestOptions {
  header?: Record<string | number, string | number | boolean> | object;
  params?: Record<string | number, string | number | boolean> | object;
}

type IResponseType<T = object> = {
  [key: string]: unknown;
  status: number;
  data: T;
};

interface IHttpAdapter {
  get<T = object>(
    url: string,
    requestOptions?: IRequestOptions,
  ): Promise<IResponseType<T>>;
}

export type { IHttpAdapter, IRequestOptions, IResponseType };
