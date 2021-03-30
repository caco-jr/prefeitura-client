import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { MdKeyboardArrowDown } from 'react-icons/md';

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
          ({
            id,
            name,
            type_institution,
            maintaining_entity,
            health_insurance,
            address,
            services,
          }) => (
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

                  <S.AccordionWrapper>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<MdKeyboardArrowDown />}
                        aria-controls="panel1a-content"
                      >
                        <Typography>Serviços disponíveis</Typography>
                      </AccordionSummary>

                      <AccordionDetails>
                        <S.ChipWrapper>
                          {services.map((service, index) => (
                            <Chip label={service} key={index} />
                          ))}
                        </S.ChipWrapper>
                      </AccordionDetails>
                    </Accordion>

                    {health_insurance && (
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<MdKeyboardArrowDown />}
                          aria-controls="panel1a-content"
                        >
                          <Typography>Convênios aceitos</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                          <S.ChipWrapper>
                            {health_insurance.map((healthInsurance, index) => (
                              <Chip label={healthInsurance} key={index} />
                            ))}
                          </S.ChipWrapper>
                        </AccordionDetails>
                      </Accordion>
                    )}
                  </S.AccordionWrapper>
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
