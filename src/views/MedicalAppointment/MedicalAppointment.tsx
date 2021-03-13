import Container from '@material-ui/core/Container';

import * as S from './MedicalAppointment.styles';
import Layout from '@components/Layout';

const appointments = [
  {
    type: 'Pediatra',
    hospital: 'Santa Isabel',
    time: '08:00',
  },
];

export const MedicalAppointmentPage = (): JSX.Element => (
  <Layout title="Consultas">
    <S.Wrapper>
      <Container fixed>
        <h1>Consultas</h1>

        {appointments.map(({ type, hospital, time }, index) => (
          <section key={index}>
            <span>Tipo: {type}</span>
            <span>Hospital: {hospital}</span>
            <span>Horário: {time}</span>
          </section>
        ))}
      </Container>
    </S.Wrapper>
  </Layout>
);

export default MedicalAppointmentPage;
