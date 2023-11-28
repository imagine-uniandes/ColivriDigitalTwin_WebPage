import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FormattedMessage } from 'react-intl';

const Glasses = () => {

  const {unityProvider} = useUnityContext({
    loaderUrl: "/WebGL3/Build/WebGL3.loader.js",
    dataUrl: "/WebGL3/Build/WebGL3.data",
    frameworkUrl: "/WebGL3/Build/WebGL3.framework.js",
    codeUrl: "/WebGL3/Build/WebGL3.wasm",
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
          <Paper elevation={3} sx={{ p: 10 }} borderRadius="48px">
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              <FormattedMessage id="RealTime" />
            </Typography>
            <div style={{ marginTop: '100px', marginLeft: '130px', marginBottom: '100px' }}> {/* Ajusta el marginTop según sea necesario */}
            <Box sx={{ my: 10 }} />
            <Unity style={{ width: '1000px', height: '600px' }} unityProvider={unityProvider} />
            </div>
          </Paper>
        </Container>
      <Box sx={{ my: 3 }} />
    </ThemeProvider>
  );
};

export default Glasses;

