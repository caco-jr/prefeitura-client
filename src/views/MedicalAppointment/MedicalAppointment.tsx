import { useState } from 'react';
import Container from '@material-ui/core/Container';

import * as S from './MedicalAppointment.styles';
import Layout from '@components/Layout';
import MedicalAppointmentAdd from './components/Add';
import MedicalAppointmentList from './components/List';
import AppointmentService from '@services/api/appointment';
import MedicalAppointmentUpdate from './components/Update';
import { getToken } from '@utils/cookies';
import { IHealthCenter } from '@interfaces/healthCenterInterface';

type IProps = {
  appointments: any[];
  healthCenters: IHealthCenter[];
};

export const MedicalAppointmentPage = ({
  appointments,
  healthCenters,
}: IProps): JSX.Element => {
  const [appointmentsList, setAppointmentsList] = useState(appointments);
  const [open, setOpen] = useState(false);
  const [appointmentSelected, setAppointmentSelected] = useState({});

  const getAppointments = async () => {
    try {
      const appointmentAPI = new AppointmentService();
      const updatedAppointments = await appointmentAPI.getAll(getToken());
      setAppointmentsList(updatedAppointments);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAppointmentSelected = appointment => {
    setOpen(true);
    setAppointmentSelected(appointment);
  };

  return (
    <Layout title="Consultas">
      <S.Wrapper>
        <Container fixed>
          <h1>Consultas</h1>

          <MedicalAppointmentAdd
            updateScreen={getAppointments}
            healthCenters={healthCenters}
          />

          <MedicalAppointmentUpdate
            updateScreen={getAppointments}
            isOpen={open}
            handleModalClose={() => setOpen(false)}
            appointment={appointmentSelected}
            healthCenters={healthCenters}
          />

          <MedicalAppointmentList
            list={appointmentsList}
            healthCenters={healthCenters}
            handleSelected={handleAppointmentSelected}
          />
        </Container>
      </S.Wrapper>
    </Layout>
  );
};

export default MedicalAppointmentPage;
