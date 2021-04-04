import { GetServerSideProps } from 'next';
import nookies from 'nookies';

import HealthCenterService from '@services/api/healthCenter';

export { default } from '@views/HealthCenters';

export const getServerSideProps: GetServerSideProps = async ctx => {
  try {
    // Parse
    const cookies = nookies.get(ctx);

    const healthCentersAPI = new HealthCenterService();

    const healthCenters = await healthCentersAPI.getAll(cookies.token);

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
