import { useState } from 'react';
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
import { GrScheduleNew } from 'react-icons/gr';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

import * as S from './Add.styles';
import ReactHookFormSelect from '@components/ReactHookFormSelect';
import AppointmentService from '@services/api/appointment';
import { getToken } from '@utils/cookies';
import { IHealthCenter } from '@interfaces/healthCenterInterface';

type IProps = {
  healthCenters: IHealthCenter[];
  updateScreen: () => void;
};

const MedicalAppointmentAdd = ({
  updateScreen,
  healthCenters,
}: IProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const { control, handleSubmit } = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const registerAppointment = async data => {
    const appointmentAPI = new AppointmentService();

    return await appointmentAPI.register(data, getToken());
  };

  const onSubmit = async data => {
    await registerAppointment(data);

    updateScreen();
    handleClose();
  };

  return (
    <S.Wrapper>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        endIcon={<GrScheduleNew />}
      >
        Agendar nova consulta
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
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
                  name="institution_id"
                  label="Instituição de Saúde"
                  control={control}
                  defaultValue={''}
                  margin="normal"
                  required
                >
                  <MenuItem value="">Escolha uma opção</MenuItem>

                  {healthCenters.map(({ name, id, type_institution }) => (
                    <MenuItem value={id} key={id}>
                      {name} - {type_institution}
                    </MenuItem>
                  ))}
                </ReactHookFormSelect>

                <FormHelperText>Required</FormHelperText>
              </FormControl>

              <FormControl required>
                <ReactHookFormSelect
                  id="appointment-type"
                  name="service_type"
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
            <Button type="button" onClick={handleClose} color="primary">
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

export default MedicalAppointmentAdd;
