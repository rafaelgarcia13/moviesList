import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { IHttpAdapter, IRequestOptions } from './IHttpAdapter';

abstract class AxiosClient implements IHttpAdapter {
  public http: AxiosInstance;

  constructor() {
    this.http = axios.create();
  }

  async get<T = object, R = AxiosResponse<T>>(
    url: string,
    requestOptions?: IRequestOptions,
  ): Promise<R> {
    const header = {
      ...requestOptions?.header,
    };

    return this.http.get(url, {
      params: requestOptions?.params,
      headers: header,
    });
  }
}

export { AxiosClient };
