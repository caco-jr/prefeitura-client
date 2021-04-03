import { useForm, Controller } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

import * as S from './RegisterForm.styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const RegisterForm = (): JSX.Element => {
  const { handleSubmit, register, control } = useForm();

  const classes = useStyles();

  const onSubmit = data => console.log(data);

  return (
    <S.Wrapper className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <TextField label="Nome" inputRef={register} name="name" required />
      <TextField
        label="Sobrenome"
        inputRef={register}
        name="lastName"
        required
      />

      <TextField
        label="Nome completo da mãe"
        inputRef={register}
        name="motherName"
        required
      />

      <TextField label="CPF" inputRef={register} name="cpf" required />
      <TextField label="RG" inputRef={register} name="rg" required />
      <TextField label="E-mail" inputRef={register} name="email" required />

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Controller
          name="birthDate"
          control={control}
          required
          defaultValue={new Date()}
          render={({ onChange, value }) => (
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              label="Data de nascimento"
              value={value}
              onChange={onChange}
              maxDate={new Date()}
              KeyboardButtonProps={{
                'aria-label': 'Altere a data',
              }}
            />
          )}
        />
      </MuiPickersUtilsProvider>

      <TextField
        label="Senha"
        inputRef={register}
        name="password"
        type="password"
        required
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </S.Wrapper>
  );
};

export default RegisterForm;
