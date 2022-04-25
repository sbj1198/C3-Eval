import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import {AuthContextProvider} from './contexts/AuthContext';
import {NewContextProvider} from './contexts/NewContext';
import {PromoteContextProvider} from './contexts/PromoteContext';
import {TerminateContextProvider} from './contexts/TerminateContext';
import {TotalContextProvider} from './contexts/TotalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
     <NewContextProvider>
      <PromoteContextProvider>
        <TerminateContextProvider>
          <TotalContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </TotalContextProvider>
        </TerminateContextProvider>
       </PromoteContextProvider>
      </NewContextProvider>
    </AuthContextProvider>
    
  </React.StrictMode>
)
