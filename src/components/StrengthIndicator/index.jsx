import './index.css'

const StrengthIndicator = function () {
  return (
    <div className="strength-indicator">
      <span className="label">Strength</span>
      <div className="strength">
        <span className="value">Medium</span>
        <span className="indicator">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
    </div>
  )
}

export default StrengthIndicator
