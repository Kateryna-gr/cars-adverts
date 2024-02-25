import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyles';
import { store /*persistor*/ } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import App from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter basename="/cars-adverts">
          <App />
        </BrowserRouter>
      {/* </PersistGate> */}
      <GlobalStyle />
    </Provider>
  </React.StrictMode>
);
