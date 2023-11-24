import React from 'react';
import { FormattedMessage } from 'react-intl';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import Section from './Section';
import Box from '@mui/material/Box';

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Paper elevation={3} sx={{ p: 10 }} borderRadius="48px">
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            <FormattedMessage id="welcome" />
          </Typography>

          {/* Imagen larga debajo del título */}
          <Box sx={{ my: 10 }}>
            <img src="/images/FotoGemeloColivri.png" alt="colivri digital twin" className="main-img" />
          </Box>
          
          {/* Primera sección grande */}
          <Section title={<FormattedMessage id="objectivesTitle" />} subtitle={<FormattedMessage id="objectivesDesc" />}centered borderTop={true}>
          <Box sx={{ my: 2 }} />
            <ul>
              <li><FormattedMessage id="objectivesList.experiment" /></li>
              <li><FormattedMessage id="objectivesList.groupWork" /></li>
              <li><FormattedMessage id="objectivesList.timeline" /></li>
              <Box sx={{ my: 4 }} />
            </ul>
          </Section>
          
          {/* Segunda sección grande con 4 subsecciones */}
          <Section title={<FormattedMessage id="functionalityTitle" />} centered borderTop={true}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                {/* Subsección 1 */}
                <Section title={<FormattedMessage id="quickControl"/>} subtitle={<FormattedMessage id="quickControlDesc"/>} variant="h4">
                <Box sx={{ my: 2 }} />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/WSYTl9xkJMU?si=Ul1zcydxgVj9dPRl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <Box sx={{ my: 2 }} />
                </Section>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* Subsección 2 */}
                <Section title={<FormattedMessage id="showFuture"/>} subtitle={<FormattedMessage id="showFutureDesc"/>} variant="h4">
                <Box sx={{ my: 2 }} />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rL66HH_M_Tg?si=MPVqs--90dusA7vb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <Box sx={{ my: 2 }} />
                </Section>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* Subsección 3 */}
                <Section title={<FormattedMessage id="arInfo"/>} subtitle={<FormattedMessage id="arInfoDesc"/>} variant="h4">
                <Box sx={{ my: 2 }} />
                <img src="/images/AR-1.png" alt="colivri digital twin" class="features-img"/>
                <img src="/images/AR-2.png" alt="colivri digital twin" class="features-img"/>
                </Section>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* Subsección 4 */}
                <Section title={<FormattedMessage id="additionalInfo"/>} subtitle={<FormattedMessage id="additionalInfoDesc"/>}  variant="h4">
                <Box sx={{ my: 2 }} />
                <img src="/images/others-1.png" alt="colivri digital twin" class="features-img"/>
                <img src="/images/others-2.png" alt="colivri digital twin" class="features-img"/>

                </Section>
              </Grid>
            </Grid>
          </Section>
        </Paper>
      </Container>
      <Box sx={{ my: 3 }} />
    </ThemeProvider>
  );
}

export default Home;

