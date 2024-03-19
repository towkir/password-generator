import copyIcon from 'src/assets/icons/icon-copy.svg'
import './index.css'

function PasswordCopier({ password }) {
  return (
    <div className="password-copier">
      <input type="text" value={password} placeholder="P4$5W0rD!" readOnly="readonly" disabled/>
      <button type='button'>
        <img src={copyIcon} />
      </button>
    </div>
  )
}

export default PasswordCopier
