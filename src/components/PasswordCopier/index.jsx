import copyIcon from 'src/assets/icons/icon-copy.svg'
import './index.css'
import { useState } from 'react'

function PasswordCopier({ password }) {
  const [copied, setCopied] = useState(false)

  function copyPassword() {
    navigator.clipboard.writeText(password);
    setCopied(true)
      setTimeout(() => {
      setCopied(false)
    }, 300);
  }
  
  return (
    <div className="password-copier">
      <input type="text" value={password} placeholder="P4$5W0rD!" readOnly="readonly" disabled/>
      <button type="button" className={`copy-btn ${copied ? 'copied' : ''}`}
        disabled={password === ''} onClick={copyPassword}>
        <img src={copyIcon} />
      </button>
    </div>
  )
}

export default PasswordCopier
