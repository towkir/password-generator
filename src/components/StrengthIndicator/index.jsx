import { useState, useEffect } from 'react'
import zxcvbn from 'zxcvbn'
import './index.css'

const StrengthIndicator = function ({ password }) {
  const strengthList = [
    {
      label: '',
      class: '',
      value: 0
    },
    {
      label: 'Too Weak!',
      class: 'meh',
      value: 1
    },
    {
      label: 'Weak',
      class: 'weak',
      value: 2
    },
    {
      label: 'Medium',
      class: 'medium',
      value: 3
    },
    {
      label: 'Strong',
      class: 'strong',
      value: 4
    },
  ]

  const [strength, setStrength] = useState({
    label: '',
    class: '',
    value: 0
  })

  useEffect(() => {
    if (password !== '') {
      let score = zxcvbn(password).score
      score = score === 0 ? 1 : score
      setStrength(strengthList[score])
    } else {
      setStrength(strengthList[0])
    }
  }, [password])

  return (
    <div className="strength-indicator">
      <span className="label">Strength</span>
      <div className="strength">
        <span className="value">{strength.label}</span>
        <span className={`indicator ${strength.class}`}>
          {strengthList.filter(item => item.value > 0).map((item) => 
            <span key={`strength-${item.value}`} className={item.value <= strength.value ? 'filled' : ''}></span>
          )}
        </span>
      </div>
    </div>
  )
}

export default StrengthIndicator
