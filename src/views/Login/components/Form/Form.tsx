import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { showToast } from '@components/Toast';
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
  const router = useRouter();
  const { handleSubmit, register } = useForm();

  const classes = useStyles();

  const onSubmit = async data => {
    const userService = new UserService();

    try {
      const { push, query } = router;
      const redirectParam = Array.isArray(query.redirectTo)
        ? query.redirectTo[0]
        : query.redirectTo;

      await userService.login(data);

      push(redirectParam);
    } catch (err) {
      console.error(err);

      showToast({
        type: 'error',
        content: 'Usuário ou senha incorreto, tente novamente',
        options: {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        },
      });
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
