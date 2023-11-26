/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import Section from './Section';
import Box from '@mui/material/Box';

function Started() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Paper elevation={3} sx={{ p: 10 }} borderRadius="48px">
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            <FormattedMessage id="GettingStarted" />
          </Typography>

          {/* Hololens 2 Platform */}
          <Section title="Microsoft HoloLens 2" variant="h5" boldTitle>
            <ol>
                <img src="/images/Hololens_2_landing_page_asset.webp" alt="Hololens 2" style={{ width: '500px', height: 'auto' }}/>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/Download-apk-blue" alt="Download" />
                </a>
            </ol>
          </Section>

          {/* Meta Quest 2 Platform */}
          <Section title="Meta Quest 2" variant="h5" boldTitle>
            <ol style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '100px' }}>
                <img src="/images/MetaQuest2.png" alt="Meta Quest 2" style={{ width: '400px', height: 'auto' }}/>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/Download-apk-blue" alt="Download" />
              </a>
            </ol>
          
          </Section>
          {/* Meta Quest Pro Platform */}
          <Section title="Meta Quest Pro" variant="h5" boldTitle>
            <ol style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginTop: '70px', marginLeft: '40px', marginRight: '10px' }}> {/* Ajusta el valor de marginTop según sea necesario */}
                <img src="images/Meta_Quest_Pro.png" alt="Meta Quest Pro" style={{ width: '400px', height: 'auto' }} />
                </div>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '50px' }}>
                  <img src="https://img.shields.io/badge/Download-apk-blue" alt="Download" />
                </a>
            </ol>
          </Section>
        </Paper>
      </Container>
      <Box sx={{ my: 3 }} />
    </ThemeProvider>
  );
}

export default Started;
