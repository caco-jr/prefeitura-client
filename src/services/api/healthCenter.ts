import BaseAPIService from './base';
import { IHealthCenter } from '@interfaces/healthCenterInterface';

class HealthCenterService extends BaseAPIService {
  getAll(): Promise<IHealthCenter[]> {
    return this.get({ pathName: `/health-institutions` });
  }

  getByID(id: string): Promise<IHealthCenter> {
    return this.get({ pathName: `/health-institutions/${id}` });
  }
}

export default HealthCenterService;
