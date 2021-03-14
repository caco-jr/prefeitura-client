import Container from '@material-ui/core/Container';

import * as S from './MedicalAppointment.styles';
import Layout from '@components/Layout';
import MedicalAppointmentAdd from './components/Add';
import MedicalAppointmentList from './components/List';

const appointments = [
  {
    type: 'Pediatra',
    hospital: 'Santa Isabel',
    time: '08:00',
  },
  {
    type: 'Oftalmologista',
    hospital: 'Cruz Vermelha',
    time: '09:00',
  },
];

export const MedicalAppointmentPage = (): JSX.Element => (
  <Layout title="Consultas">
    <S.Wrapper>
      <Container fixed>
        <h1>Consultas</h1>

        <MedicalAppointmentAdd />

        <MedicalAppointmentList list={appointments} />
      </Container>
    </S.Wrapper>
  </Layout>
);

export default MedicalAppointmentPage;
