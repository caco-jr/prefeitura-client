import { GetServerSideProps } from 'next';
import nookies from 'nookies';

import AppointmentService from '@services/api/appointment';

export { default } from '@views/MedicalAppointment';

export const getServerSideProps: GetServerSideProps = async ctx => {
  try {
    // Parse
    const cookies = nookies.get(ctx);

    const appointmentAPI = new AppointmentService();

    const appointments = await appointmentAPI.getAll(cookies.token);

    return { props: { appointments } };
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
