import BaseAPIService from './base';

class AppointmentService extends BaseAPIService {
  getAll(jwtToken: string): Promise<any> {
    return this.get({ pathName: `/appointments`, jwtToken });
  }

  getByID(id, jwtToken: string): Promise<any> {
    return this.get({ pathName: `/appointments/${id}`, jwtToken });
  }

  register(appointment, jwtToken: string): Promise<any> {
    return this.post({
      pathName: `/appointments`,
      body: appointment,
      jwtToken,
    });
  }

  update(id: string, appointment, jwtToken: string): Promise<any> {
    return this.patch({
      pathName: `/appointments/${id}`,
      body: appointment,
      jwtToken,
    });
  }
}

export default AppointmentService;
