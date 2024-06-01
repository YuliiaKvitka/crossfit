import styles from './Location.module.scss'

const Location = () => {
    return (
        <section className={`${styles.location} container-wide`}>
            <img src="/assets/location/map.jpg" alt="Branches on the map" className={styles['location__map-image']} width={960} height={600} loading='lazy' />

            <div className={styles.location__body}>
                <h2 className={`${styles.location__title} title-medium backdrop-title centered`} data-title='look'>Find us near you</h2>
                <div className={styles.location__description}>
                    <p>Nec suas signiferumque id. An eum labore commodo principes. Usu diam noluisse cu, nam adipisci</p>
                </div>
                <a href="/" className={`${styles.location__button} button transparent`}>View more</a>
            </div>

    </section>
    )
}

export default Location
