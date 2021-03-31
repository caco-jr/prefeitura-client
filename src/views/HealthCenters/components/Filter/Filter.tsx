import { useState } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { IHealthCenter } from '@interfaces/healthCenterInterface';
import * as S from './Filter.styles';

type IProps = {
  list: IHealthCenter[];
  handleFilteredList?: () => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

const HealthCentersFilter = ({ list }: IProps): JSX.Element => {
  const classes = useStyles();
  const [typeInstitution, setTypeInstitution] = useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTypeInstitution(event.target.value as string);
  };

  return (
    <S.Wrapper>
      <FormControl className={classes.formControl}>
        <InputLabel id="type-institution">Tipo de instituição</InputLabel>
        <Select
          labelId="type-institution-label"
          id="type-institution"
          value={typeInstitution}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>

          {[
            ...new Set(list.map(({ type_institution }) => type_institution)),
          ].map((item, index) => (
            <MenuItem value={item} key={`${index}-filter`}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </S.Wrapper>
  );
};

export default HealthCentersFilter;
