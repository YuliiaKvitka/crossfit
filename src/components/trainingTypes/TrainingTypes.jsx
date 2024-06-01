import styles from './TrainingTypes.module.scss'

const TrainingTypes = () => {
    return (
        <section className={`${styles.trainingTypes} container-wide`}>
            <h2 className="visually-hidden">Types of training</h2>
            <ul className={styles.trainingTypes__list}>
            
                <li className={styles.trainingTypes__item}>
                    <img src="/assets/trainingTypes/1.svg" alt="" className={styles.trainingTypes__image} width='150' height='140' loading='lazy' />
                    <h3 className={styles['trainingTypes__item-title']}>Maxpump</h3>
                </li>

                <li className={styles.trainingTypes__item}>
                    <img src="/assets/trainingTypes/2.svg" alt="" className={styles.trainingTypes__image} width='150' height='140' loading='lazy' />
                    <h3 className={styles['trainingTypes__item-title']}>aron gym</h3>
                </li>

                <li className={styles.trainingTypes__item}>
                    <img src="/assets/trainingTypes/3.svg" alt="" className={styles.trainingTypes__image} width='150' height='140' loading='lazy' />
                    <h3 className={styles['trainingTypes__item-title']}>fit & tone</h3>
                </li>

                <li className={styles.trainingTypes__item}>
                    <img src="/assets/trainingTypes/4.svg" alt="" className={styles.trainingTypes__image} width='150' height='140' loading='lazy' />
                    <h3 className={styles['trainingTypes__item-title']}>forza</h3>
                </li>

                <li className={styles.trainingTypes__item}>
                    <img src="/assets/trainingTypes/5.svg" alt="" className={styles.trainingTypes__image} width='150' height='140' loading='lazy' />
                    <h3 className={styles['trainingTypes__item-title']}>balance fitness</h3>
                </li>

                <li className={styles.trainingTypes__item}>
                    <img src="/assets/trainingTypes/6.svg" alt="" className={styles.trainingTypes__image} width='150' height='140' loading='lazy' />
                    <h3 className={styles['trainingTypes__item-title']}>body sculpt</h3>
                </li>

                </ul>
        </section>
    )
}

export default TrainingTypes
