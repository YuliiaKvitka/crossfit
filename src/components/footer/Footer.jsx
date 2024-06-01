import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__main}>
                <div className={`${styles['footer__main-inner']} container`}>
                    <header className={styles.footer__header}>
                        <a href="/" className={styles.footer__logo}>
                            <img src="/assets/logo/logo.png" alt="Kropp Logo" className={styles['footer__logo-image']} width={270} height={50} loading='lazy' />
                        </a>
                        <p className={`${styles.footer__description} section-description`}>please feel free to send us an e-mail at <a href='mailto:kropp@qodeinteractive.com'>kropp@qodeinteractive.com</a> For any additional inquiries</p>
                    </header>
                    <div className={styles.footer__body}>

                        <div className={styles.footer__column}>
                            <h2 className={styles['footer__column-title']}>About</h2>
                            <p className={styles.footer__about}>Shape up your site with Kropp, a theme especially made for fitness & gym websites.</p>
                        </div>

                        <div className={styles.footer__column}>
                            <h2 className={styles['footer__column-title']}>Working hours</h2>
                            <div className={styles.footer__schedule}>
                                Monday - Friday<br/>
                                <time dateTime='05:30/24:00'>05:30 - 24:00</time>
                            </div>
                            <div className={styles.footer__schedule}>
                                Weekdays<br/>
                                <time dateTime='00:00/24:00'>00:00 - 24:00</time>
                            </div>
                        </div>

                        <div className={styles.footer__column}>
                            <h2 className={styles['footer__column-title']}>Location</h2>
                            <address className={styles.footer__address}>
                                68 Jay Street, Brooklyn,<br/>
                                NY 11201, United States
                            </address>
                            <div className={styles.footer__contacts}>
                                <ul className={styles['footer__contacts-list']}>

                                    <li className={styles['footer__contacts-item']}>
                                        <a href="mailto:kropp@qodeinteractive.com" className={styles['footer__contacts-link']}>kropp@qodeinteractive.com</a>
                                    </li>

                                    <li className={styles['footer__contacts-item']}>
                                        <a href="tel:+11111111111" className={styles['footer__contacts-link']}>+ (1) 111 - 111 - 1111</a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className={styles.footer__column}>
                            <h2 className={`${styles['footer__column-title']} ${styles['has-arrow']}`}>start now</h2>
                            <form className={styles.footer__subscribe}>
                                <input type="email" className={`${styles['footer__subscribe-input']} input`} placeholder='Email' />
                                <button className={styles['footer__subscribe-button']} type='submit' title='Subscribe'>
                                    <span className="visually-hidden">Subscribe</span>
                                </button>
                            </form>
                            <div className={styles.footer__soc1als}>
                                <ul className={styles['footer__soc1als-list']}>

                                    <li className={styles['footer__soc1als-item']}>
                                        <a href="/" className={styles['footer__soc1als-link']} target='_blank'>
                                            <svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
                                            </svg>
                                        </a>
                                    </li>

                                    <li className={styles['footer__soc1als-item']}>
                                        <a href="/" className={styles['footer__soc1als-link']} target='_blank'>
                                            <svg viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#000000">
                                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                                        <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]">

                                        </path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        </a>
                                    </li>

                                    <li className={styles['footer__soc1als-item']}>
                                        <a href="/" className={styles['footer__soc1als-link']}  target='_blank'>
                                            <svg  viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)" fill="#000000">
                                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                                        <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]">

                                        </path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        </a>
                                    </li>

                                    <li className={styles['footer__soc1als-item']}>
                                        <a href="/" className={styles['footer__soc1als-link']} target='_blank'>
                                            <svg  viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >

                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#ffffff">
                                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                                        <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#176]">

                                        </path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        </a>
                                    </li>


                                    <li className={styles['footer__soc1als-item']}>
                                            <a href="/" className={styles['footer__soc1als-link']} target='_blank'>
                                                <svg fill="#ffffff"  viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1920 311.856c-70.701 33.769-146.598 56.47-226.221 66.86 81.317-52.517 143.774-135.529 173.252-234.691-76.236 48.678-160.716 84.028-250.391 103.002-71.718-82.56-174.268-134.06-287.435-134.06-217.75 0-394.165 189.966-394.165 424.206 0 33.318 3.614 65.619 10.165 96.678C617.9 616.119 327.304 447.385 133.045 190.67c-33.77 62.57-53.309 135.53-53.309 213.233 0 147.162 91.031 276.818 196.744 353.054-64.602-2.26-157.101-21.46-157.101-53.309v5.648c0 205.327 114.41 376.658 294.55 415.849-32.978 9.487-78.38 14.795-114.409 14.795-25.412 0-55.454-2.71-79.624-7.793 50.26 168.509 193.13 291.163 365.478 294.777-134.852 113.506-306.07 181.383-490.616 181.383-31.85 0-64.038-2.033-94.758-5.873 174.494 120.17 381.176 190.532 603.67 190.532 724.97 0 1121.055-646.136 1121.055-1206.55 0-18.41-.452-36.932-1.356-55.116 77.026-59.746 143.887-134.4 196.631-219.444" fill-rule="evenodd"/>
                                                </svg>
                                                    
                                            </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className={styles.footer__extra}>
                <div className={`${styles['footer__extra-inner']} container`}>
                    <div className={styles.footer__copyright}>&copy; <time dateTime='2024'>2024</time> Qode Interactive, All Rights Reserved | <a href='/'>Privacy Policy</a> | <a href='/'>Contact Us</a></div>
                </div>
            </div>
      
    </footer>
    )
}

export default Footer
