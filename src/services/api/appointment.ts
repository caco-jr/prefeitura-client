import BaseAPIService from './base';

class AppointmentService extends BaseAPIService {
  getAll(jwtToken: string): Promise<any> {
    return this.get({ pathName: `/appointments`, jwtToken });
  }

  getByID(id): Promise<any> {
    return this.get({ pathName: `/appointments/${id}` });
  }

  register(appointment): Promise<any> {
    return this.post({ pathName: `/appointments`, body: appointment });
  }

  update(id: string, appointment): Promise<any> {
    return this.patch({ pathName: `/appointments/${id}`, body: appointment });
  }
}

export default AppointmentService;
