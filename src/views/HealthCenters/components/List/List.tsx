import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { IHealthCenter } from '@interfaces/healthCenterInterface';
import * as S from './List.styles';

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

type IProps = {
  list: IHealthCenter[];
};

const HealthCentersList = ({ list }: IProps): JSX.Element => {
  const classes = useStyles();

  return (
    <S.Wrapper>
      <Grid container spacing={3}>
        {list.map(
          ({ id, name, type_institution, maintaining_entity, address }) => (
            <Grid container item xs={12} md={4} key={id}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {type_institution}
                  </Typography>

                  <Typography variant="h5" component="h2">
                    {name}
                  </Typography>

                  <Typography className={classes.pos} color="textSecondary">
                    {maintaining_entity}
                  </Typography>

                  <Typography variant="body2" component="p">
                    {address.street} - {address.number}, {address.district},{' '}
                    {address.cep}, {address.city} - {address.state}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </S.Wrapper>
  );
};

export default HealthCentersList;
