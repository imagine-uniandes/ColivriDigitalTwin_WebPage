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

          {/* Meta Quest Platform */}
          <Section title="Microsoft HoloLens 2" variant="h5" boldTitle>
            <ol>
              <li>
                <FormattedMessage id="MetaQuestStep1" />
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/Download-apk-blue" alt="Download" />
                </a>
              </li>
              <li>
                <FormattedMessage id="MetaQuestStep2" />
              </li>
              <li>
                <FormattedMessage id="MetaQuestStep3" />
              </li>
              <li>
                <FormattedMessage id="MetaQuestStep4" />
              </li>
            </ol>
          </Section>

          {/* Hololens 2 Platform */}
          <Section title="Meta Quest 2" variant="h5" boldTitle>
            <ol>
              <li>
                <FormattedMessage id="Hololens2Step1" />
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/Download-apk-blue" alt="Download" />
                </a>
              </li>
              <li>
                <FormattedMessage id="Hololens2Step2" />
              </li>
              <li>
                <FormattedMessage id="Hololens2Step3" />
              </li>
              <li>
                <FormattedMessage id="Hololens2Step4" />
              </li>
            </ol>
          </Section>

          {/* Vive Pro Platform */}
          <Section title="Meta Quest Pro" variant="h5" boldTitle>
            <ol>
              <li>
                <FormattedMessage id="ViveProStep1" />
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/Download-apk-blue" alt="Download" />
                </a>
              </li>
              <li>
                <FormattedMessage id="ViveProStep2" />
              </li>
              <li>
                <FormattedMessage id="ViveProStep3" />
              </li>
              <li>
                <FormattedMessage id="ViveProStep4" />
              </li>
            </ol>
          </Section>
        </Paper>
      </Container>
      <Box sx={{ my: 3 }} />
    </ThemeProvider>
  );
}

export default Started;
