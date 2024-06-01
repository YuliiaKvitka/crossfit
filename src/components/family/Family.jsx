import styles from './Family.module.scss'

const Family = () => {
    return (
        <section className={styles.family} >
            <div className={`${styles.family__header} container`}>
                <h2 className={`${styles.family__title} title-big backdrop-title centered`} data-title='Part'>be a part of our fit family</h2>
                <div className={`${styles.family__description} section-description`}>
                    <p>Training helps you think and feel better. join us!</p>
                </div>
            </div>
            <div className={`${styles.family__body} container-wide`}>

                <img src="/assets/family/1.jpg" alt="Training people" className={styles.family__image} width={414} height={479} loading='lazy' />

                <img src="/assets/family/2.jpg" alt="Training people" className={styles.family__image} width={744} height={479} loading='lazy' />
                
                <img src="/assets/family/3.jpg" alt="Training people" className={styles.family__image} width={396} height={479} loading='lazy' />
                
                <img src="/assets/family/4.jpg" alt="Training people" className={styles.family__image} width={396} height={479} loading='lazy' />
                
                <img src="/assets/family/1.jpg" alt="Training people" className={styles.family__image} width={414} height={479} loading='lazy' />
                
                
                
            </div>
    </section>
    )
}

export default Family
