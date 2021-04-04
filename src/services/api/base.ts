import axios from 'axios';

import { API_EXTERNAL_URL, API_URL } from '@utils/url';

type IBaseParams = {
  pathName: string;
  isExternal?: boolean;
  jwtToken?: string;
};

type IGetParams = IBaseParams;

type IPostParams = IBaseParams & {
  body: any;
};

type IPutParams = IPostParams;

export default class BaseAPIService {
  private handleURLChoice(isExternal: boolean): string {
    return isExternal ? API_EXTERNAL_URL : API_URL;
  }

  private buildURL(pathName: string, isExternal: boolean): string {
    const treatedPath = pathName.startsWith('/')
      ? pathName.substring(1)
      : pathName;

    return `${this.handleURLChoice(isExternal)}/${treatedPath}`;
  }

  private requestConfig(jwtToken: string) {
    return {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };
  }

  get({ pathName, isExternal, jwtToken }: IGetParams): Promise<any> {
    return axios
      .get(this.buildURL(pathName, isExternal), this.requestConfig(jwtToken))
      .then(response => response.data);
  }

  post({ pathName, body, isExternal, jwtToken }: IPostParams): Promise<any> {
    return axios
      .post(
        this.buildURL(pathName, isExternal),
        body,
        this.requestConfig(jwtToken)
      )
      .then(response => response.data);
  }

  put({ pathName, body, isExternal, jwtToken }: IPutParams): Promise<any> {
    return axios
      .put(
        this.buildURL(pathName, isExternal),
        body,
        this.requestConfig(jwtToken)
      )
      .then(response => response.data);
  }

  patch({ pathName, body, isExternal, jwtToken }: IPutParams): Promise<any> {
    return axios
      .patch(
        this.buildURL(pathName, isExternal),
        body,
        this.requestConfig(jwtToken)
      )
      .then(response => response.data);
  }
}
