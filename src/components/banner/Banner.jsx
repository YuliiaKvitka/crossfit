import styles from './Banner.module.scss'

const Banner = () => {
    return (
        <section className={`${styles.banner}`}>
            <h2 className='visually-hidden'>Upcoming Events</h2>
            <div className={styles.banner__body}>
                <div className={styles.banner__info}>
                    New event<br/>
                    coming up / <time dateTime='06-07'>june 7</time>&nbsp;-&nbsp;<time dateTime='06-13'>13</time>
                </div>
                <h3 className={styles.banner__title}>crossfit</h3>
            </div>
            <div className={styles.banner__pagination}>
                <ul className={styles['banner__pagination-list']}>

                    <li className={styles['banner__pagination-item']}>
                        <button className={styles['banner__pagination-button']} type='button'></button>
                    </li>

                    <li className={styles['banner__pagination-item']}>
                        <button className={styles['banner__pagination-button']} type='button'></button>
                    </li>

                    <li className={styles['banner__pagination-item']}>
                        <button className={`${styles['banner__pagination-button']} ${styles['is-current']}`} type='button'></button>
                    </li>
                </ul>
            </div>
    </section>
    )
}

export default Banner
