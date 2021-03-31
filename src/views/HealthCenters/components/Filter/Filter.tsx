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
  const [typeInstitution, setTypeInstitution] = useState('');
  const [district, setDistrict] = useState('');

  const classes = useStyles();

  const handleChange = (
    event: React.ChangeEvent<{ value: unknown }>,
    type: 'institution' | 'district'
  ) => {
    if (type === 'institution') {
      setTypeInstitution(event.target.value as string);
      return;
    }

    setDistrict(event.target.value as string);
  };

  return (
    <S.Wrapper>
      <FormControl className={classes.formControl}>
        <InputLabel id="type-institution">Tipo de instituição</InputLabel>
        <Select
          labelId="type-institution-label"
          id="type-institution"
          value={typeInstitution}
          onChange={event => handleChange(event, 'institution')}
        >
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>

          {[
            ...new Set(list.map(({ type_institution }) => type_institution)),
          ].map((item, index) => (
            <MenuItem value={item} key={`${index}-type`}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="type-institution">Bairro</InputLabel>
        <Select
          labelId="type-institution-label"
          id="type-institution"
          value={district}
          onChange={event => handleChange(event, 'district')}
        >
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>

          {[...new Set(list.map(({ address }) => address.district))].map(
            (item, index) => (
              <MenuItem value={item} key={`${index}-district`}>
                {item}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
    </S.Wrapper>
  );
};

export default HealthCentersFilter;
