import { useState } from 'react'
import './index.css'

function PasswordGenerator() {
  const [characterLength, setCharacterLength] = useState(10)
  return (
    <div className="password-generator">
      <div className="character-length">
        <span className="label">Character Length</span>
        <span className="value">{characterLength}</span>
      </div>
      <div className="character-length-input">
        <input type="range" min="0" max="20" step="1"
          value={characterLength} onInput={(e) => setCharacterLength(e.target.value)} />
      </div>
    </div>
  )
}

export default PasswordGenerator
