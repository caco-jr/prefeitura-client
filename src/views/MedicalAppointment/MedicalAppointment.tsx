import { useState } from 'react';
import Container from '@material-ui/core/Container';

import * as S from './MedicalAppointment.styles';
import Layout from '@components/Layout';
import MedicalAppointmentAdd from './components/Add';
import MedicalAppointmentList from './components/List';
import AppointmentService from '@services/api/appointment';
import MedicalAppointmentUpdate from './components/Update';

export const MedicalAppointmentPage = ({ appointments }): JSX.Element => {
  const [appointmentsList, setAppointmentsList] = useState(appointments);
  const [open, setOpen] = useState(false);

  const getAppointments = async () => {
    const appointmentAPI = new AppointmentService();
    const updatedAppointments = await appointmentAPI.getAll();

    setAppointmentsList(updatedAppointments);
  };

  return (
    <Layout title="Consultas">
      <S.Wrapper>
        <Container fixed>
          <h1>Consultas</h1>

          <MedicalAppointmentAdd updateScreen={getAppointments} />

          <MedicalAppointmentUpdate
            updateScreen={getAppointments}
            isOpen={open}
            handleModalClose={() => setOpen(false)}
          />

          <MedicalAppointmentList list={appointmentsList} />
        </Container>
      </S.Wrapper>
    </Layout>
  );
};

export default MedicalAppointmentPage;
