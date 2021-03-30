import BaseAPIService from './base';

class HealthCenterService extends BaseAPIService {
  getAll(): Promise<any> {
    return this.get({ pathName: `/health-centers` });
  }

  getByID(id: string): Promise<any> {
    return this.get({ pathName: `/health-centers/${id}` });
  }
}

export default HealthCenterService;
