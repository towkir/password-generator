import { useState } from 'react'
import StrengthIndicator from "components/StrengthIndicator"
import './index.css'

function PasswordGenerator({ handlePassword }) {
  const [characterLength, setCharacterLength] = useState(10)
  const [config, setConfig] = useState({
    uppercase: {
      label: "Uppercase Letters",
      value: true,
    },
    lowercase: {
      label: "Lowercase Letters",
      value: true,
    },
    numbers: {
      label: "Numbers",
      value: true,
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

  const generatePassword = function () {
    let thePassword = ""
    const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerLetters = upperLetters.toLowerCase()
    const numbers = "0123456789"
    const symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-="
    while (thePassword.length < characterLength) {
      if (config.uppercase.value) {
        const upperLetterIndex = Math.ceil(upperLetters.length * Math.random() * Math.random())
        thePassword += upperLetters.charAt(upperLetterIndex)
        if (thePassword.length === characterLength) {
          break
        }
      }
      if (config.lowercase.value) {
        const lowerLetterIndex = Math.ceil(lowerLetters.length * Math.random() * Math.random())
        thePassword += lowerLetters.charAt(lowerLetterIndex)
        if (thePassword.length === characterLength) {
          break
        }
      }
      if (config.numbers.value) {
        const numberIndex = Math.ceil(numbers.length * Math.random() * Math.random())
        thePassword += numbers.charAt(numberIndex)
        if (thePassword.length === characterLength) {
          break
        }
      }
      if (config.symbols.value) {
        const symbolIndex = Math.ceil(symbols.length * Math.random() * Math.random())
        thePassword += symbols.charAt(symbolIndex)
        if (thePassword.length === characterLength) {
          break
        }
      }
      if (thePassword.length === 0) {
        break
      }
    }
    thePassword = thePassword.split('').sort(function () {
      return 0.5 - Math.random()
    }).join('');
    handlePassword(thePassword)
  }

  return (
    <div className="password-generator">
      <div className="character-length">
        <span className="label">Character Length</span>
        <span className="value">{characterLength}</span>
      </div>
      <div className="character-length-input">
        <input type="range" min="0" max="20" step="1"
          value={characterLength} onInput={(e) => setCharacterLength(Number(e.target.value))} />
      </div>
      <div className="character-inclusion-control-wrapper">
        {Object.keys(config).map(item =>
          <label className="checkbox" tabIndex="0" key={config[item].label}>
            <input type="checkbox" checked={config[item].value} value={config[item].value}
              onChange={(e) => handleCheckbox(item, e.target.checked)} />
            <span className="check-icon"></span>
            <span className="text-label">Include {config[item].label}</span>
          </label>
        )}
      </div>
      <StrengthIndicator />
      <button type="button" className="big-button" onClick={generatePassword}>
        Generate <img src="src/assets/icons/icon-arrow-right.svg" className="icon" />
      </button>
    </div>
  )
}

export default PasswordGenerator
