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
                <strong>
                  <FormattedMessage id="Branch Link" />
                </strong>{' '}
                <a href="https://github.com/imagine-uniandes/ColivriDigitalTwin/tree/develop" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <Box sx={{ my: 1 }} />
                <strong>
                  <FormattedMessage id="Description" />
                </strong>{' '}
                <FormattedMessage id="hololensDesc.p1" />
                <Box sx={{ my: 1 }} />
                <strong>
                  <FormattedMessage id="hololensDesc.s1" />
                </strong>{' '}
                <ul>
                  <li>
                  <FormattedMessage id="hololensDesc.b1" />
                  </li>
                  <li>
                  <FormattedMessage id="hololensDesc.b2" />
                  </li>
                  <li>
                  <FormattedMessage id="hololensDesc.b3" />
                  </li>
                  <li>
                  <FormattedMessage id="hololensDesc.b4" />
                  </li>
                  <li>
                  <FormattedMessage id="hololensDesc.b5" />
                  </li>
                  <li>
                  <FormattedMessage id="hololensDesc.b6" />
                  </li>
                </ul>
          </Section>

          {/* Sección: VIVE PRO */}
          <Section title="HTC VIVE Pro" variant="h5" boldTitle>
                <strong>
                  <FormattedMessage id="Branch Link" />
                </strong>{' '}
                <a href="https://github.com/imagine-uniandes/ColivriDigitalTwin/tree/VivePro" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <Box sx={{ my: 1 }} />
                <strong>
                  <FormattedMessage id="Description" />
                </strong>{' '}
                <FormattedMessage id="viveDesc.p1" />
                <Box sx={{ my: 1 }} />
                <strong>
                  <FormattedMessage id="viveDesc.s1" />
                </strong>{' '}
                <ul>
                  <li>
                  <FormattedMessage id="viveDesc.b1" />
                  </li>
                  <li>
                  <FormattedMessage id="viveDesc.b2" />
                  </li>
                  <li>
                  <FormattedMessage id="viveDesc.b3" />
                  </li>
                  <li>
                  <FormattedMessage id="viveDesc.b4" />
              </li>
            </ul>
          </Section>

          {/* Sección: META QUEST 2 */}
          <Section title="Meta Quest 2" variant="h5" boldTitle>
                <strong>
                  <FormattedMessage id="Branch Link" />
                </strong>{' '}
                <a href="https://github.com/imagine-uniandes/ColivriDigitalTwin/tree/metaQuest2Develop" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <Box sx={{ my: 1 }} />
                <strong>
                  <FormattedMessage id="Description" />
                </strong>{' '}
                <FormattedMessage id="metaDesc.p1" />
                <Box sx={{ my: 1 }} />
                <strong>
                  <FormattedMessage id="metaDesc.s1" />
                </strong>{' '}
                <ul>
                  <li>
                  <FormattedMessage id="metaDesc.b1" />
                  </li>
                  <li>
                  <FormattedMessage id="metaDesc.b2" />
                  </li>
                  <li>
                  <FormattedMessage id="metaDesc.b3" />
                  </li>
                  <li>
                  <FormattedMessage id="metaDesc.b4" />
                  </li>
                </ul>
          </Section>

          {/* Sección: META QUEST PRO */}
          <Section title="Meta Quest Pro" variant="h5" boldTitle>
                <strong>
                  <FormattedMessage id="Branch Link" />
                </strong>{' '}
                <a href="https://github.com/imagine-uniandes/ColivriDigitalTwin/tree/develop" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <Box sx={{ my: 1 }} />
                <strong>
                  <FormattedMessage id="Description" />
                </strong>{' '}
                <FormattedMessage id="metaproDesc.p1" />
                <Box sx={{ my: 1 }} />
                <strong>
                  <FormattedMessage id="metaproDesc.s1" />
                </strong>{' '}
                <ul>
                  <li>
                  <FormattedMessage id="metaproDesc.b1" />
                  </li>
                  <li>
                  <FormattedMessage id="metaproDesc.b2" />
                  </li>
                  <li>
                  <FormattedMessage id="metaproDesc.b3" />
                  </li>
                </ul>

          </Section>

          {/* Sección: WINDOWS PLATFORM */}
          <Section title="Windows platform" variant="h5" boldTitle>
                <strong>
                  <FormattedMessage id="Branch Link" />
                </strong>{' '}
                <a href="https://github.com/imagine-uniandes/ColivriDigitalTwin/tree/develop" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <Box sx={{ my: 1 }} />
                <strong>
                  <FormattedMessage id="Description" />
                </strong>{' '}
                <FormattedMessage id="windowsDesc.p1" />
                <Box sx={{ my: 1 }} />
                <strong>
                  <FormattedMessage id="windowsDesc.s1" />
                </strong>{' '}
                <ul>
                  <li>
                  <FormattedMessage id="windowsDesc.b1" />
                  </li>
                  <li>
                  <FormattedMessage id="windowsDesc.b2" />
                  </li>
                  <li>
                  <FormattedMessage id="windowsDesc.b3" />
                  </li>
                  <li>
                  <FormattedMessage id="windowsDesc.b4" />
                  </li>
                  <li>
                  <FormattedMessage id="windowsDesc.b5" />
                  </li>
                  <li>
                  <FormattedMessage id="windowsDesc.b6" />
                  </li>
                  <li>
                  <FormattedMessage id="windowsDesc.b7" />
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
