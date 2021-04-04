import { GetServerSideProps } from 'next';
import HealthCenterService from '@services/api/healthCenter';

export { default } from '@views/HealthCenters';

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const healthCentersAPI = new HealthCenterService();

    const healthCenters = await healthCentersAPI.getAll();

    return { props: { list: healthCenters } };
  } catch (err) {
    console.error(err.data);

    return {
      redirect: {
        destination: '/login?redirectTo="/centros-de-saude"',
        permanent: false,
      },
    };
  }
};
