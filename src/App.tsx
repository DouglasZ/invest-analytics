import { BrowserRouter } from 'react-router-dom';

import PrimeReact from 'primereact/api';

import { DefaultLayout } from '@layouts/DefaultLayout';

import { Router } from './Router';
import { GlobalStyles } from './styles/global';

// import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css'; //theme
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css';

function App() {
  PrimeReact.ripple = true;
  return (
    <>
      <BrowserRouter>
        <DefaultLayout>
          <Router />
          <GlobalStyles />
        </DefaultLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
