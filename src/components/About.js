import React from 'react';
import { FormattedMessage } from 'react-intl';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import Section from './Section';
import Box from '@mui/material/Box';

function About() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Paper elevation={3} sx={{ p: 10 }} borderRadius="48px">
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            <FormattedMessage id="Acerca de" />
          </Typography>

          {/* Sección: What is a Digital Twin? */}
          <Section title={<FormattedMessage id="DigitalTwin" />} subtitle={<FormattedMessage id="DigitalTwinDef.p1" />}>
            <Box sx={{ my: 2 }} />
            <FormattedMessage id="DigitalTwinDef.p2" />
            <ul>
            <Box sx={{ my: 2 }} />
            <li><strong><FormattedMessage id="DigitalTwinDef.b1_title" /></strong> <FormattedMessage id="DigitalTwinDef.b1" /></li>
            <li><strong><FormattedMessage id="DigitalTwinDef.b2_title" /></strong> <FormattedMessage id="DigitalTwinDef.b2" /></li>
            <li><strong><FormattedMessage id="DigitalTwinDef.b3_title" /></strong> <FormattedMessage id="DigitalTwinDef.b3" /></li>
            <li><strong><FormattedMessage id="DigitalTwinDef.b4_title" /></strong> <FormattedMessage id="DigitalTwinDef.b4" /></li>
            <li><strong><FormattedMessage id="DigitalTwinDef.b5_title" /></strong> <FormattedMessage id="DigitalTwinDef.b5" /></li>
            <li><strong><FormattedMessage id="DigitalTwinDef.b6_title" /></strong> <FormattedMessage id="DigitalTwinDef.b6" /></li>
            <Box sx={{ my: 4 }} />
            </ul> 
          </Section>
          {/* Sección: What is Colivri? */}
          <Section title={<FormattedMessage id="Colivri" />} subtitle={<FormattedMessage id="ColivriDef" />} borderTop={true} />

          {/* Sección: What is Colivri Digital Twin? */}
          <Section title={<FormattedMessage id="ColivriDigitalTwin" />} borderTop={true}>
            <Typography paragraph>
              <FormattedMessage id="ColivriDigitalTwinDef.p1" />
            </Typography>
            <Box sx={{ my: 2 }} />
            <Typography paragraph>
              <FormattedMessage id="ColivriDigitalTwinDef.p2" />
            </Typography>
            <Box sx={{ my: 2 }} />
            <Typography paragraph>
              <FormattedMessage id="ColivriDigitalTwinDef.p3" />
            </Typography>
          </Section>

          {/* Enlace a más información */}
          <Typography variant="body1" align="center" sx={{ marginTop: 4 }}>
            Para más información haga clic {' '}
            <a
                href="https://imagine.uniandes.edu.co/projects/Pablo_gemeloDigital.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                color: '#007BFF',
                textDecoration: 'underline',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                }}
            >
                aquí
            </a>
            </Typography>

        </Paper>
      </Container>
      <Box sx={{ my: 3 }} />
    </ThemeProvider>
  );
}

export default About;
