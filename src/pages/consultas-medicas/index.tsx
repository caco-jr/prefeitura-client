import { GetServerSideProps } from 'next';
import nookies from 'nookies';

import AppointmentService from '@services/api/appointment';
import HealthCenterService from '@services/api/healthCenter';

export { default } from '@views/MedicalAppointment';

export const getServerSideProps: GetServerSideProps = async ctx => {
  try {
    // Parse
    const cookies = nookies.get(ctx);

    const appointmentAPI = new AppointmentService();

    const appointments = await appointmentAPI.getAll(cookies.token);

    const healthCenterAPI = new HealthCenterService();

    const healthCenters = await healthCenterAPI.getAll(cookies.token);

    return { props: { appointments, healthCenters } };
  } catch (err) {
    console.error(err.data);

    return {
      redirect: {
        destination: '/login?redirectTo=/consultas-medicas',
        permanent: false,
      },
    };
  }
};
