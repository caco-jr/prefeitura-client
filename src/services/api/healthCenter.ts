import BaseAPIService from './base';
import { IHealthCenter } from '@interfaces/healthCenterInterface';

class HealthCenterService extends BaseAPIService {
  getAll(jwtToken: string): Promise<IHealthCenter[]> {
    return this.get({
      pathName: `/health-institutions`,
      isExternal: true,
      jwtToken,
    });
  }

  getByID(id: string, jwtToken: string): Promise<IHealthCenter> {
    return this.get({
      pathName: `/health-institutions/${id}`,
      isExternal: true,
      jwtToken,
    });
  }
}

export default HealthCenterService;
