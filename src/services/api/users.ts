import BaseAPIService from './base';
import { setCookie } from 'nookies';

class UserService extends BaseAPIService {
  getAll(): Promise<any> {
    return this.get({ pathName: `/users` });
  }

  getByID(id): Promise<any> {
    return this.get({ pathName: `/users/${id}` });
  }

  register(appointment): Promise<any> {
    return this.post({ pathName: `/users`, body: appointment });
  }

  update(id: string, appointment): Promise<any> {
    return this.patch({ pathName: `/users/${id}`, body: appointment });
  }

  login(loginInfo: {
    username: string;
    password: string;
  }): Promise<{ access_token: string }> {
    return this.post({ pathName: `/auth/login`, body: loginInfo }).then(
      response => {
        setCookie(null, 'token', response.access_token);

        return response;
      }
    );
  }
}

export default UserService;
