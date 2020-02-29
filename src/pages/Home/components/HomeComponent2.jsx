import React from 'react';
import FadeInComponent from '../../../components/FadeInComponent';
import { isMobile } from 'react-device-detect';


const HomeComponent2 = () => {

    const styles = {
        containerStyle: {
            paddingTop: '20vh',
            backgroundColor: 'white',
            width: '100%',
            paddingLeft: isMobile ? '5vw' : '15vw',
            paddingRight: isMobile ? '5vw' : '20vw',
        },
        spacer: {
            height: 2000,
            backgroundColor: 'pink'
        },
        h1Style: {
            fontSize: '2rem'
        },
        h2style: {
            fontSize: '1.4rem'
        }
    }

    return (
        <div style={styles.containerStyle}>
            <div >
                <FadeInComponent
                    delay={300}
                    fromY={300}
                    toY={0}
                >
                    <div>
                        <h1 style={styles.h1Style}>What is a PWA Application?</h1>
                        <h3 style={styles.h2style}>
                            A Progressive Web App uses modern web capabilities to deliver an experience to users that mirror that of a native mobile application.
                            PWAs are served through the browser and are intended to work on any platform or device.
                        </h3>
                    </div>
                </FadeInComponent>
            </div>
        </div>
    )
}

export default HomeComponent2;
