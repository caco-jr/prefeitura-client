/* eslint-disable @typescript-eslint/no-empty-function */

import { useForm, Controller } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

import * as S from './Update.styles';
import ReactHookFormSelect from '@components/ReactHookFormSelect';
import AppointmentService from '@services/api/appointment';

const MedicalAppointmentUpdate = ({
  updateScreen,
  isOpen,
  handleModalClose,
}): JSX.Element => {
  const { control, handleSubmit } = useForm();

  const registerAppointment = async data => {
    const appointmentAPI = new AppointmentService();

    return await appointmentAPI.update('oi', data);
  };

  // eslint-disable-next-line no-console
  const onSubmit = async data => {
    await registerAppointment(data);

    updateScreen();
    handleModalClose();
  };

  return (
    <S.Wrapper>
      <Dialog
        open={isOpen}
        onClose={handleModalClose}
        aria-labelledby="form-dialog-title"
      >
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle id="form-dialog-title">Nova consulta</DialogTitle>

          <DialogContent>
            <DialogContentText>
              Preencha os campos a seguir para criar uma nova consulta.
            </DialogContentText>

            <S.FormWrapper>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Controller
                  id="date-picker-inline"
                  name="date"
                  control={control}
                  required
                  defaultValue={new Date()}
                  render={({ onChange, value }) => (
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="dd/MM/yyyy"
                      margin="normal"
                      label="Dia"
                      value={value}
                      onChange={onChange}
                      minDate={new Date()}
                      KeyboardButtonProps={{
                        'aria-label': 'Altere a data',
                      }}
                    />
                  )}
                />
              </MuiPickersUtilsProvider>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Controller
                  id="date-picker-inline"
                  name="time"
                  control={control}
                  required
                  defaultValue={new Date()}
                  render={({ onChange, value }) => (
                    <KeyboardTimePicker
                      disableToolbar
                      variant="inline"
                      format="HH:mm"
                      margin="normal"
                      label="Horário"
                      value={value}
                      onChange={onChange}
                      KeyboardButtonProps={{
                        'aria-label': 'Altere o horário',
                      }}
                    />
                  )}
                />
              </MuiPickersUtilsProvider>

              <FormControl required>
                <ReactHookFormSelect
                  id="hospital"
                  name="hospital"
                  label="Hospital"
                  control={control}
                  defaultValue={''}
                  margin="normal"
                  required
                >
                  <MenuItem value="">Escolha uma opção</MenuItem>
                  <MenuItem value="Bom Clima">Bom Clima</MenuItem>

                  <MenuItem value="Nossa Senhora">
                    Nossa Senhora Fátima
                  </MenuItem>

                  <MenuItem value="São Luiz">São Luiz</MenuItem>
                </ReactHookFormSelect>

                <FormHelperText>Required</FormHelperText>
              </FormControl>

              <FormControl required>
                <ReactHookFormSelect
                  id="appointment-type"
                  name="type"
                  label="Tipo da consulta"
                  control={control}
                  defaultValue={''}
                  margin="normal"
                  required
                >
                  <MenuItem value="">Escolha uma opção</MenuItem>
                  <MenuItem value="pediatra">Pediatra</MenuItem>
                  <MenuItem value="oftalmologista">Oftalmologista</MenuItem>
                </ReactHookFormSelect>

                <FormHelperText>Required</FormHelperText>
              </FormControl>
            </S.FormWrapper>
          </DialogContent>

          <DialogActions>
            <Button type="button" onClick={handleModalClose} color="primary">
              Cancelar
            </Button>

            <Button type="submit" color="primary">
              Agendar
            </Button>
          </DialogActions>
        </S.Form>
      </Dialog>
    </S.Wrapper>
  );
};

export default MedicalAppointmentUpdate;
