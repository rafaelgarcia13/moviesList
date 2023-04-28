import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { IHttpAdapter, IRequestOptions } from './IHttpAdapter';

abstract class AxiosClient implements IHttpAdapter {
  public http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      headers: {
        Authorization:
          'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmJmZWVmMDhkOTBhNjE3MGE5NmVkMzIxYjkxZGI0MSIsInN1YiI6IjY0NDgzZGZmNDk3NTYwMDJmY2RlZGI0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5J495TK0UumBqY0SrhGWjSBuTxFjiYrl5ew7CSVFbI8',
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
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
