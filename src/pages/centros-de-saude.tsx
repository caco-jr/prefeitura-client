import { GetStaticProps } from 'next';
import HealthCenterService from '@services/api/healthCenter';

export { default } from '@views/HealthCenters';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const healthCentersAPI = new HealthCenterService();

    const healthCenters = await healthCentersAPI.getAll();

    return { props: { list: healthCenters } };
  } catch (err) {
    console.error(err);

    return { props: { errors: '' } };
  }
};
