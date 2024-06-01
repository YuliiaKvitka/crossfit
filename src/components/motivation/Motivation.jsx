
import styles from './Motivation.module.scss';


const Motivation = () => {
    return (
        <section className={styles.motivation}>
            <h2 className={`visually-hidden`}>Motivation</h2>
            <ul className={styles.motivation__list}>

                <li className={styles.motivation__item}>
                    <div className={`${styles.motivation__card} container`}>
                        <div className={styles['motivation__card-body']}>
                            <h3 className={`${styles['motivation__card-title']} backdrop-title title-medium`} data-title='Strong'>
                                Be you, just stronger!<br/> Power is in you
                            </h3>
                            <div className={styles['motivation__card-description']}>
                                <p>Unum solum justo ex ius. Pro cu probo laboramus eius insolens euripidis te eos, ut agam tota.</p>
                            </div>

                            <a href="/" className={`${styles['motivation__card-button']} button transparent`}>View more</a>
                        </div>
                        <img src="/assets/motivation/1.jpg" alt="man pulling up on a bar" className={styles['motivation__card-image']} width={518} height={760} loading='lazy'/>
                    </div>
                </li>

                <li className={styles.motivation__item}>
                    <div className={`${styles.motivation__card} container`}>
                        <div className={styles['motivation__card-body']}>
                            <h3 className={`${styles['motivation__card-title']} backdrop-title title-medium`} data-title='Start'>
                                Today is the best<br/>day to start!
                            </h3>
                            <div className={styles['motivation__card-description']}>
                                <p>Sed abhorreant constituam consectetuer eu. At mei clita deserunt, his movet molestie nemore.</p>
                            </div>

                            <a href="/" className={`${styles['motivation__card-button']} button transparent`}>View more</a>
                        </div>
                        <img src="/assets/motivation/2.jpg" alt="dumbbell man"
                            className={styles['motivation__card-image']} width={518} height={760} loading='lazy' />
                    </div>
                </li>
            </ul>
    </section>
    )
}

export default Motivation
