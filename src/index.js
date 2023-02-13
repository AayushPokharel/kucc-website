import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { FirebaseAppProvider } from 'reactfire'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'kucc-dev.firebaseapp.com',
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: 'kucc-dev.appspot.com',
  messagingSenderId: '415891298021',
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: 'G-08Y6WQMCTB',
}

root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </FirebaseAppProvider>
  </React.StrictMode>
)
