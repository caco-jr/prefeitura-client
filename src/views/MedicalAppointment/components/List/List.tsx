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

const MedicalAppointmentList = ({ list }: IProps): JSX.Element => {
  const classes = useStyles();

  return (
    <S.Wrapper>
      <Grid container spacing={3}>
        {list.map(({ type, hospital, time }, index) => (
          <Grid container item xs={12} md={4} key={index}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {time}
                </Typography>

                <Typography variant="h5" component="h2">
                  {type}
                </Typography>

                <Typography className={classes.pos} color="textSecondary">
                  <RiHospitalLine /> {hospital}
                </Typography>

                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </S.Wrapper>
  );
};

export default MedicalAppointmentList;
