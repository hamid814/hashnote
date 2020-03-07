import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { GlobalProvider } from './context/GlobalState';
import { AlertProvider } from './context/alert/AlertState'; 
import { ModalProvider } from './context/modal/ModalState';
import * as serviceWorker from './serviceWorker';

const StateContainer = () => {
  return (
    <GlobalProvider>
      <ModalProvider>
        <AlertProvider>
          <App />
        </AlertProvider>
      </ModalProvider>
    </GlobalProvider>
  )
}

ReactDOM.render(<StateContainer />, document.getElementById('root'));

serviceWorker.register();
