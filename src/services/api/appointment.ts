import BaseAPIService from './base';

class AppointmentService extends BaseAPIService {
  getAll(): Promise<any> {
    return this.get({ pathName: `/appointments` });
  }

  getByID(id): Promise<any> {
    return this.get({ pathName: `/appointments/${id}` });
  }

  register(appointment): Promise<any> {
    return this.post({ pathName: `/appointments`, body: appointment });
  }

  update(id: string, appointment): Promise<any> {
    return this.put({ pathName: `/appointments/${id}`, body: appointment });
  }
}

export default AppointmentService;
