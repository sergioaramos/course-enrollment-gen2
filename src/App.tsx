import './App.css'
import { Authenticator } from '@aws-amplify/ui-react'

//coment: This is the main App component that uses AWS Amplify's Authenticator to handle user authentication. It displays a welcome message with the user's username if they are logged in, and provides a button to sign out.
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
