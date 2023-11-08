import React from 'react';
import {FormattedMessage} from "react-intl";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../theme';


function Home() {
    //const rowRef = useRef(null);
//Compenente para contenido
    return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="xl">
    <Paper elevation={3} sx={{ p: 10 }} borderRadius="48px">
      <Typography variant="h2" gutterBottom>
        <FormattedMessage id="welcome" />
      </Typography>
      <Box sx={{ my: 4 }}>
        <img src="/images/gd-colivri.png" alt="colivri digital twin" class="main-img"/>
      </Box>
      <Typography paragraph>
        <FormattedMessage id="experimentationSpace" />
        <FormattedMessage id="leveraging" />
      </Typography>
      <Typography variant="h3" gutterBottom>
        <FormattedMessage id="objectivesTitle" />
      </Typography>
      <Typography paragraph>
        <FormattedMessage id="objectivesDesc" />
    </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography>
              <FormattedMessage id="objectivesList.experiment"/>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography>
              <FormattedMessage id="objectivesList.groupWork" />
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography>
              <FormattedMessage id="objectivesList.timeline" />
            </Typography>
          </Grid>
        </Grid>
      <Typography variant="h3" gutterBottom>
        <FormattedMessage id="functionalityTitle" />
      </Typography>
        <Typography variant='h4'>
            <FormattedMessage id="quickControl"/>
        </Typography>
        <Typography paragraph>
            <FormattedMessage id="quickControlDesc"/>
        </Typography>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WSYTl9xkJMU?si=Ul1zcydxgVj9dPRl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Typography>
            <ul>
            <li><FormattedMessage id="listFeatures.totalIntuitiveControl"/></li>
            <li><FormattedMessage id="listFeatures.safetyVisualization"/></li>
            <li><FormattedMessage id="listFeatures.functionalitySimulation"/></li>
            </ul>
        </Typography>

        <Typography variant='h4'>
            <FormattedMessage id="showFuture"/>
        </Typography>
        <Typography paragraph>
            <FormattedMessage id="showFutureDesc"/>
        </Typography>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rL66HH_M_Tg?si=MPVqs--90dusA7vb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Typography>
            <ul>
            <li><FormattedMessage id="listFeatures.totalIntuitiveControl"/></li>
            <li><FormattedMessage id="listFeatures.viewVariousPlatforms"/></li>
            </ul>
        </Typography>

        <Typography variant='h4'>
            <FormattedMessage id="arInfo"/>
        </Typography>
        <Typography paragraph>
            <FormattedMessage id="arInfoDesc"/>
        </Typography>
        <img src="/images/AR-1.png" alt="colivri digital twin" class="main-img"/>
        <img src="/images/AR-2.png" alt="colivri digital twin" class="main-img"/>

        <Typography>
            <ul>
            <li><FormattedMessage id="listFeatures.totalIntuitiveControl"/></li>
            <li><FormattedMessage id="listFeatures.moreInfoPoints"/></li>
            <li><FormattedMessage id="listFeatures.historicalDynamicInfo"/></li>
            </ul>
        </Typography>

        <Typography variant='h4'>
            <FormattedMessage id="additionalInfo"/>
        </Typography>
        <img src="/images/others-1.png" alt="colivri digital twin" class="main-img"/>
        <img src="/images/others-2.png" alt="colivri digital twin" class="main-img"/>

        <Typography>
            <ul>
            <li><FormattedMessage id="listFeatures.userInfo"/></li>
            <li><FormattedMessage id="listFeatures.environmentalInfo"/></li>
            </ul>
        </Typography>
      </Paper>
    </Container>
    </ThemeProvider>
    );
   }

export default Home;