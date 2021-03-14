import { useState } from 'react';
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
} from '@material-ui/pickers';
import { GrScheduleNew } from 'react-icons/gr';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

import * as S from './Add.styles';

const MedicalAppointmentAdd = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [type, setType] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string);
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
        <DialogTitle id="form-dialog-title">Fazer novo agendamento</DialogTitle>

        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>

          <FormControl required>
            <InputLabel id="demo-simple-select-required-label">Tipo</InputLabel>

            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={type}
              onChange={handleChange}
            >
              <MenuItem value="pediatra">Pediatra</MenuItem>
              <MenuItem value="oftalmologista">Oftalmologista</MenuItem>
            </Select>

            <FormHelperText>Required</FormHelperText>
          </FormControl>

          <FormControl required>
            <InputLabel id="demo-simple-select-required-label">
              Hospital
            </InputLabel>

            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={type}
              onChange={handleChange}
            >
              <MenuItem value="pediatra">Pediatra</MenuItem>
              <MenuItem value="oftalmologista">Oftalmologista</MenuItem>
            </Select>

            <FormHelperText>Required</FormHelperText>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>

          <Button onClick={handleClose} color="primary">
            Agendar
          </Button>
        </DialogActions>
      </Dialog>
    </S.Wrapper>
  );
};

export default MedicalAppointmentAdd;
