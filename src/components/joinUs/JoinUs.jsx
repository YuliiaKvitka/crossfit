import styles from './JoinUs.module.scss'

const JoinUs = () => {
    return (
        <section className={styles.joinUs}>
            <div className={styles['joinUs__video-wrapper']}>
                <video src="" className={styles['joinUs__video']} width={960} height={600} poster='/assets/joinUs/poster.jpg'></video>
                <button className={styles['joinUs__video-play-button']} type='button'>Play</button>
            </div>
            <div className={`${styles['joinUs__body']} container`}>
                <h2 className={styles['joinUs__title']}>Join Us</h2>
                {/* ---------------------------------------- */}
                <form action="" className={styles['joinUs__form']}>
                    <div className={styles['joinUs__form-header']}>
                        <h3 className={`${styles['joinUs__form-title']} backdrop-title title-big centered`} data-title='Go!'>Start here</h3>
                        <div className={`{styles['joinUs__form-subtitle']} section-description `} >fill the form below to start your journey</div>
                    </div>
                    <div className={styles['joinUs__form-body']}>

                        <label className='visually-hidden' htmlFor="username">Name</label>
                        <input type="text" className={`${styles['joinUs__form-input']} input`} id='username' placeholder='Name' />

                        <label className='visually-hidden' htmlFor="email">Email</label>
                        <input type="email" className={`${styles['joinUs__form-input']} input`} id='email' placeholder='Email' />

                        <button className={`${styles['joinUs__form-button']} button transparent`} type='submit'>Subscribe</button>
                    </div>
                </form>
            </div>
    
    </section>
    )
}

export default JoinUs
