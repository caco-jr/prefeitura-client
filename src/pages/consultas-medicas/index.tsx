import { GetStaticProps } from 'next';

import AppointmentService from '@services/api/appointment';

export { default } from '@views/MedicalAppointment';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const appointmentAPI = new AppointmentService();

    const appointments = await appointmentAPI.getAll();

    return { props: { appointments } };
  } catch (err) {
    return { props: { errors: err } };
  }
};
