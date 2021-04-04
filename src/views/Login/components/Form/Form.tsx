import { useForm } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import * as S from './Form.styles';
import UserService from '@services/api/users';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const LoginForm = (): JSX.Element => {
  const { handleSubmit, register } = useForm();

  const classes = useStyles();

  const onSubmit = async data => {
    const userService = new UserService();

    try {
      await userService.login(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <S.Wrapper className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <TextField label="CPF" inputRef={register} name="username" required />

      <TextField
        label="Senha"
        inputRef={register}
        name="password"
        type="password"
        required
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="c-login-button"
      >
        Entrar
      </Button>
    </S.Wrapper>
  );
};

export default LoginForm;
