import styles from './Button.module.css';

const Button = ({children, onClick, type = 'button', className}) => {
    return (
        <button 
            className={styles[className]}
            type={type}
            onClick={onClick}>
                {children}
            </button>
    )
}

export default Button;
