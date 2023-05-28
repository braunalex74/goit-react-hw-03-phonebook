import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { loadContacts } from 'components/storage';

const contacts = loadContacts();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App contacts={contacts} />
  </React.StrictMode>
);
