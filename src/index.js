import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

const supabase = createClient(
  "https://jnpinytmoforwaajnnti.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpucGlueXRtb2ZvcndhYWpubnRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2MzQzOTEsImV4cCI6MjAwNjIxMDM5MX0.J0XoI_89sOnmLRMBIIoosNEFUNTtFawXPy6GZOfGNgg"
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
    <App />
    </SessionContextProvider>
  </React.StrictMode>
);