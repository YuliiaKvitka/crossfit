import styles from './BurgerButton.module.scss'

const BurgerButton = () => {
  return (
    <button className={styles['burger-button']} type='button' title='Open menu'>
      <span className={`visually-hidden`}>Open menu</span>
      <span className={styles['burger-button-line']}></span>
      <span className={styles['burger-button-line']}></span>
      <span className={styles['burger-button-line']}></span>
     
    </button>
  )
}

export default BurgerButton
