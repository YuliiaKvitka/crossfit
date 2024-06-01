import styles from './Calculate.module.scss'

const Calculate = () => {
    return (
        <section className={styles.calculate}>
            <div className={`${styles.calculate__inner} container`}>
                <div className={styles.calculate__body}>
                    <h2 className={`${styles.calculate__title} title-medium backdrop-title`} data-title='BMI'>Input your BMI</h2>
                    <div className={styles.calculate__description}>
                        <p>Duo graece ponderum ne, ei mel aliquando. Pro te tamquam nonumes, nam no nemore epicurei</p>
                    </div>

                    <form action="" className={styles.calculate__form}>

                        <div className={styles['calculate__form-body']}>

                        <label className='visually-hidden' htmlFor="height">Height</label>
                        <input type="number" className={`${styles['calculate__form-input']} input`} id='height' placeholder='Height / cm' />
                        

                        <label className='visually-hidden' htmlFor="weight">Weight</label>
                        <input type="number" className={`${styles['calculate__form-input']} input`} id='weight' placeholder='Weight / kg' />
                            
                        <label className='visually-hidden' htmlFor="age">Age</label>
                            <input type="number" className={`${styles['calculate__form-input']} input`} id='age' placeholder='Age' />
                            
                            <label className='visually-hidden' htmlFor='gender'>Gender</label>
                            <select className={`${styles['calculate__form-input']} input`} id='gender' required>
                                <option value='' disabled selected>Gender</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                            </select>
                            
                            <label className='visually-hidden' htmlFor='activity-factor'>Select an activity factor:</label>
                            <select className={`${styles['calculate__form-input']} input ${styles.wide}`} id='activity-factor' required>
                                <option value='' disabled selected>Select an activity factor:</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                        </select>

                        </div>

                        <button className={`${styles['calculate__form-button']} button transparent`} type='submit'>Calculate</button>

                    </form>

                </div>
                <div className={styles['calculate__table-wrapper']}>
                    <table className={styles.calculate__table}>
                        <thead>
                            <tr>
                                <th>BMI</th>
                                <th>Weight status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Below 18.5</td>
                                <td>Underweight</td> 
                            </tr>

                            <tr>
                                <td>18.5 - 24.9</td>
                                <td>Healthy</td> 
                            </tr>

                            <tr>
                                <td>25.0 - 29.9</td>
                                <td>Overweight</td> 
                            </tr>

                            <tr>
                                <td>30.0 - and Above</td>
                                <td>Obese</td> 
                            </tr>

                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={2}><b>BMR</b>  Metabolic Rate / <b>BMI </b> Body Mass Index</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
        
        </section>
    )
}

export default Calculate
