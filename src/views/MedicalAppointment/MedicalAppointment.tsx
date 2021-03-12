import Container from '@material-ui/core/Container';

import * as S from './MedicalAppointment.styles';
import Layout from '@components/Layout';

export const MedicalAppointmentPage = (): JSX.Element => (
  <Layout title="Consultas">
    <S.Wrapper>
      <Container fixed>
        <h1>Consultas</h1>

        <section>
          <span>Tipo: Pediatra</span>
          <span>Hospital: Santa Isabel</span>
          <span>Horário: 08:00</span>
        </section>
      </Container>
    </S.Wrapper>
  </Layout>
);

export default MedicalAppointmentPage;
