import BaseAPIService from './base';
import { IHealthCenter } from '@interfaces/healthCenterInterface';

class HealthCenterService extends BaseAPIService {
  getAll(): Promise<IHealthCenter[]> {
    return this.get({ pathName: `/health-centers` });
  }

  getByID(id: string): Promise<IHealthCenter> {
    return this.get({ pathName: `/health-centers/${id}` });
  }
}

export default HealthCenterService;
