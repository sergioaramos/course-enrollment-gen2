import './App.css'
import { Authenticator } from '@aws-amplify/ui-react'

// Authenticator muestra registro e inicio de sesión; con sesión, entrega el usuario y signOut.
function App() { 
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Bienvenido{user?.username ? `, ${user.username}` : ''}</h1>
          <p>Has iniciado sesión correctamente.</p>
          <button type="button" onClick={signOut}>Cerrar sesión</button>
        </main>
      )}
    </Authenticator>
  )
}

export default App
