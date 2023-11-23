import React from 'react';
import { FormattedMessage } from 'react-intl';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import Section from './Section';
import Box from '@mui/material/Box';

function Development() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Paper elevation={3} sx={{ p: 10 }} borderRadius="48px">
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            <FormattedMessage id="Desarrollo" />
          </Typography>

          {/* Sección: HOLOLENS 2 */}
          <Section title="Microsoft HoloLens 2" variant="h5" boldTitle>
            <ul>
              <li>
                <strong>
                  <FormattedMessage id="Branch Link" />
                </strong>{' '}
                <a href="https://github.com/imagine-uniandes/ColivriDigitalTwin/tree/develop" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <strong>
                  <FormattedMessage id="Description" />
                </strong>{' '}
                Brief description of the repository.
              </li>
            </ul>
          </Section>

          {/* Sección: VIVE PRO */}
          <Section title="HTC VIVE Pro" variant="h5" boldTitle>
            <ul>
              <li>
                <strong>
                  <FormattedMessage id="Branch Link" />
                </strong>{' '}
                <a href="https://github.com/imagine-uniandes/ColivriDigitalTwin/tree/VivePro" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <strong>
                  <FormattedMessage id="Description" />
                </strong>{' '}
                Brief description of the repository.
              </li>
            </ul>
          </Section>

          {/* Sección: META QUEST 2 */}
          <Section title="Meta Quest 2" variant="h5" boldTitle>
            <ul>
              <li>
                <strong>
                  <FormattedMessage id="Branch Link" />
                </strong>{' '}
                <a href="https://github.com/imagine-uniandes/ColivriDigitalTwin/tree/metaQuest2Develop" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <strong>
                  <FormattedMessage id="Description" />
                </strong>{' '}
                Brief description of the repository.
              </li>
            </ul>
          </Section>

          {/* Sección: META QUEST PRO */}
          <Section title="Meta Quest Pro" variant="h5" boldTitle>
            <ul>
              <li>
                <strong>
                  <FormattedMessage id="Branch Link" />
                </strong>{' '}
                <a href="https://github.com/imagine-uniandes/ColivriDigitalTwin/tree/develop" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <strong>
                  <FormattedMessage id="Description" />
                </strong>{' '}
                Brief description of the repository.
              </li>
            </ul>
          </Section>

          {/* Sección: WINDOWS PLATFORM */}
          <Section title="Windows platform" variant="h5" boldTitle>
            <ul>
              <li>
                <strong>
                  <FormattedMessage id="Branch Link" />
                </strong>{' '}
                <a href="https://github.com/imagine-uniandes/ColivriDigitalTwin/tree/develop" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <strong>
                  <FormattedMessage id="Description" />
                </strong>{' '}
                Brief description of the repository.
              </li>
            </ul>
          </Section>

        </Paper>
      </Container>
      <Box sx={{ my: 3 }} />
    </ThemeProvider>
  );
}

export default Development;
