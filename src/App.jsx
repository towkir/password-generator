import PasswordCopier from 'components/PasswordCopier'

import './App.css'

function App() {
  return (
    <div className='app'>
      <h1>Password Generator</h1>
      <PasswordCopier password={'hello'}/>
    </div>
  )
}

export default App
