import styles from './Button.module.scss'

const Button = () => {
    return (
        <button className={`${styles.button__book} ${styles.button}`} type='button'>
            Book now
        </button>
  )
}

export default Button
