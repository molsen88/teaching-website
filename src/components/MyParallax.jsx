import React from 'react';
import { Parallax } from 'react-parallax';




const MyParallax = () => (
    <div className='parallax-style'>


        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require( '../images/Mohamed-Salah-wallpaper-HD.jpg' )}
            bgImageAlt="sun valley"
            strength={200}
        >
            <div>
                <div className='home-title'>

                </div>
            </div>
            <div style={{ height: '680px' }} />
        </Parallax >

    </div >
);
export default MyParallax;