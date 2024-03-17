import { useState } from 'react'
import './index.css'

function PasswordGenerator() {
  const [characterLength, setCharacterLength] = useState(10)
  const [config, setConfig] = useState({
    uppercase: {
      label: "Uppercase Letters",
      value: false,
    },
    lowercase: {
      label: "Lowercase Letters",
      value: false,
    },
    numbers: {
      label: "Numbers",
      value: false,
    },
    symbols: {
      label: "Symbols",
      value: false,
    }
  })

  const handleCheckbox = function (configItem, checked) {
    setConfig(() => {
      const newConfig = { ...config }
      newConfig[configItem].value = checked
      return newConfig
    })
  }

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
      <div className="character-inclusion-control-wrapper">
        {Object.keys(config).map(item => 
          <label className="checkbox" tabIndex="0" key={config[item].label}>
            <input type="checkbox" value={config[item].value} onChange={(e) => handleCheckbox(item, e.target.checked)}/>
            <span className="check-icon"></span>
            <span className="text-label">Include {config[item].label}</span>
          </label>
        )}
      </div>
    </div>
  )
}

export default PasswordGenerator
