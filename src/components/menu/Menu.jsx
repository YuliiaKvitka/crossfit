import styles from './Menu.module.scss'

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__list}>

                <li className={styles.menu__item}>
                    <a href="/" className={`${styles.menu__link} ${styles['is-current']}`}>Home</a>
                </li>

                <li className={styles.menu__item}>
                    <a href="/" className={styles.menu__link}>Pages</a>
                </li>

                <li className={styles.menu__item}>
                    <a href="/" className={styles.menu__link}>Portfolio</a>
                </li>

                <li className={styles.menu__item}>
                    <a href="/" className={styles.menu__link}>Blog</a>
                </li>

                <li className={styles.menu__item}>
                    <a href="/" className={styles.menu__link}>Shop</a>
                </li>

            </ul>

    </nav>
    )
}

export default Menu
