import { useForm, Controller } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
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
import { getToken } from '@utils/cookies';
import { IHealthCenter } from '@interfaces/healthCenterInterface';

type IProps = {
  healthCenters: IHealthCenter[];
  updateScreen: () => void;
  handleModalClose: () => void;
  isOpen: boolean;
  appointment: any;
};

const MedicalAppointmentUpdate = ({
  updateScreen,
  isOpen,
  handleModalClose,
  appointment,
  healthCenters,
}: IProps): JSX.Element => {
  const { control, handleSubmit } = useForm();

  const registerAppointment = async data => {
    try {
      const appointmentAPI = new AppointmentService();

      return await appointmentAPI.update(appointment.id, data, getToken());
    } catch (err) {
      console.error(err);
    }
  };

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
          <DialogTitle id="form-dialog-title">Atualizar consulta</DialogTitle>

          <DialogContent>
            <DialogContentText>
              Preencha os campos a seguir para criar uma nova consulta.
            </DialogContentText>

            <S.FormWrapper>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Controller
                  name="date"
                  control={control}
                  required
                  defaultValue={appointment.date}
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
                  defaultValue={appointment.time}
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
                  defaultValue={appointment.institution_id}
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
                  defaultValue={appointment.service_type}
                  margin="normal"
                  required
                >
                  <MenuItem value="">Escolha uma opção</MenuItem>

                  {healthCenters[0].services.map((service, index) => (
                    <MenuItem value={service} key={index}>
                      {service}
                    </MenuItem>
                  ))}
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
              Atualizar Agendamento
            </Button>
          </DialogActions>
        </S.Form>
      </Dialog>
    </S.Wrapper>
  );
};

export default MedicalAppointmentUpdate;
