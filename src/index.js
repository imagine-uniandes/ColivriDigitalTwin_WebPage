import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import "bootstrap/dist/css/bootstrap.min.css";
import {flatten} from 'flat'


const messages = {
  'es': localeEsMessages,
  'en': localeEnMessages
};

// get browser language without the region code
const language = navigator.language.split(/[-_]/)[0];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale={navigator.language} messages={flatten(messages[language])}>
    <App />
  </IntlProvider>
);

serviceWorkerRegistration.register();