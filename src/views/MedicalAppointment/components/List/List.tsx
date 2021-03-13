import * as S from './List.styles';

type IProps = {
  list: any;
};

const MedicalAppointmentList = ({ list }: IProps): JSX.Element => (
  <S.Wrapper>
    {list.map(({ type, hospital, time }, index) => (
      <section key={index}>
        <span>Tipo: {type}</span>
        <span>Hospital: {hospital}</span>
        <span>Horário: {time}</span>
      </section>
    ))}
  </S.Wrapper>
);

export default MedicalAppointmentList;
