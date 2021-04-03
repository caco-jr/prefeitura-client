import axios from 'axios';

import { API_EXTERNAL_URL, API_URL } from '@utils/url';

type IBaseParams = {
  pathName: string;
  isExternal?: boolean;
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

  get({ pathName, isExternal }: IGetParams): Promise<any> {
    return axios
      .get(this.buildURL(pathName, isExternal))
      .then(response => response.data);
  }

  post({ pathName, body, isExternal }: IPostParams): Promise<any> {
    return axios
      .post(this.buildURL(pathName, isExternal), body)
      .then(response => response.data);
  }

  put({ pathName, body, isExternal }: IPutParams): Promise<any> {
    return axios
      .put(this.buildURL(pathName, isExternal), body)
      .then(response => response.data);
  }

  patch({ pathName, body, isExternal }: IPutParams): Promise<any> {
    return axios
      .patch(this.buildURL(pathName, isExternal), body)
      .then(response => response.data);
  }
}
