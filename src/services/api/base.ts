import axios from 'axios';

type IBaseParams = {
  pathName: string;
};

type IGetParams = IBaseParams;

type IPostParams = IBaseParams & {
  body: any;
};

type IPutParams = IPostParams;

export default class BaseAPIService {
  private buildURL(pathName: string): string {
    const treatedPath = pathName.startsWith('/')
      ? pathName.substring(1)
      : pathName;

    return `http://localhost:8080/${treatedPath}`;
  }

  get({ pathName }: IGetParams): Promise<any> {
    return axios.get(this.buildURL(pathName)).then(response => response.data);
  }

  post({ pathName, body }: IPostParams): Promise<any> {
    return axios
      .post(this.buildURL(pathName), body)
      .then(response => response.data);
  }

  put({ pathName, body }: IPutParams): Promise<any> {
    return axios
      .put(this.buildURL(pathName), body)
      .then(response => response.data);
  }
}
