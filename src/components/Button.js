import './button.css'


const Button = (props) => {
    const {disabled , text, onClick} = props
    return (
        <div className={`button ${disabled ? "disabled" : ''}`}>{text}</div>
    )
}

export default Button;