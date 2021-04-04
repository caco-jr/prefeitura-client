import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { RiHospitalLine } from 'react-icons/ri';

import * as S from './List.styles';

type IProps = {
  list: any;
  handleSelected: (appointment: any) => void;
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '100%',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const MedicalAppointmentList = ({
  list,
  handleSelected,
}: IProps): JSX.Element => {
  const classes = useStyles();

  const getBeautyDate = (date, time) => {
    const dateFormat = new Intl.DateTimeFormat('pt', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    const timeFormat = new Intl.DateTimeFormat('pt', {
      hour: 'numeric',
      minute: 'numeric',
    });

    return `${dateFormat.format(new Date(date))} às ${timeFormat.format(
      new Date(time)
    )}`;
  };

  return (
    <S.Wrapper>
      <Grid container spacing={3}>
        {list.map((appointment, index) => {
          const { service_type, hospital, time, date } = appointment;

          return (
            <Grid container item xs={12} md={4} key={index}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {getBeautyDate(date, time)}
                  </Typography>

                  <Typography variant="h5" component="h2">
                    {service_type}
                  </Typography>

                  <Typography className={classes.pos} color="textSecondary">
                    <RiHospitalLine /> {hospital}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    color="secondary"
                    onClick={() => handleSelected(appointment)}
                  >
                    Atualizar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </S.Wrapper>
  );
};

export default MedicalAppointmentList;
