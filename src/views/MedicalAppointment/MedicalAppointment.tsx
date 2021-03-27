import Container from '@material-ui/core/Container';

import * as S from './MedicalAppointment.styles';
import Layout from '@components/Layout';
import MedicalAppointmentAdd from './components/Add';
import MedicalAppointmentList from './components/List';

export const MedicalAppointmentPage = ({ appointments }): JSX.Element => (
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
