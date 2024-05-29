import BurgerButton from '../burgerButton/BurgerButton'
import Button from '../button/Button'
import Menu from '../menu/Menu'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={`${styles.header}`}>
            <a href="/" className={styles.header__logo}>
                <img src="/assets/logo/logo.png" alt="Kropp Logo" className={styles['header__logo-image']} width={135} height={25} loading='lazy' />
            </a>
            <Menu />
            <div className={styles.header__actions}>
                <Button/>
                <BurgerButton/>
            </div>
        </header>
    )
}

export default Header


