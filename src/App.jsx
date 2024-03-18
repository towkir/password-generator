import { useState } from 'react'
import PasswordCopier from 'components/PasswordCopier'
import PasswordGenerator from 'components/PasswordGenerator'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  return (
    <div className="app">
      <h1>Password Generator</h1>
      <PasswordCopier password={password} />
      <PasswordGenerator handlePassword={setPassword} />
    </div>
  )
}

export default App
