import React from 'react'

import { useFirebaseApp, AuthProvider, FirestoreProvider } from 'reactfire'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import Header from './components/Header'
import Footer from './components/Footer'
import Routers from './router/Router'

const App = () => {
  const app = useFirebaseApp()
  const firestoreDatabase = getFirestore(app)
  const auth = getAuth(app)

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestoreDatabase}>
        <div className={'mx-0 my-0'}>
          <Header />
          <div>
            <Routers />
          </div>
          <Footer top={true} />
        </div>
      </FirestoreProvider>
    </AuthProvider>
  )
}

export default App
