import PasswordCopier from 'components/PasswordCopier'
import PasswordGenerator from 'components/PasswordGenerator'

import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Password Generator</h1>
      <PasswordCopier password={'hello'} />
      <PasswordGenerator />
    </div>
  )
}

export default App
