import './index.css'

const Button = ({text, onClick, className}) => (
  <button className={`cta-button ${className}`} onClick={onClick}>
    {text}
  </button>
)

export default Button
