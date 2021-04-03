import BaseAPIService from './base';
import { IHealthCenter } from '@interfaces/healthCenterInterface';

class HealthCenterService extends BaseAPIService {
  getAll(): Promise<IHealthCenter[]> {
    return this.get({ pathName: `/health-institutions`, isExternal: true });
  }

  getByID(id: string): Promise<IHealthCenter> {
    return this.get({
      pathName: `/health-institutions/${id}`,
      isExternal: true,
    });
  }
}

export default HealthCenterService;
