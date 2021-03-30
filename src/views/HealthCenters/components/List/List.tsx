import { IHealthCenter } from '@interfaces/healthCenterInterface';
import * as S from './List.styles';

type IProps = {
  list: IHealthCenter[];
};

const HealthCentersList = ({ list }: IProps): JSX.Element => (
  <S.Wrapper>
    {list.map(({ name, id }) => (
      <section key={id}>{name}</section>
    ))}
  </S.Wrapper>
);

export default HealthCentersList;
