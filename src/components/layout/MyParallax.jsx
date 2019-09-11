import React from 'react';
import { Parallax } from 'react-parallax';




const MyParallax = () => (
    <div className='parallax-style'>


        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require( '../../images/Sunset Beach.jpg' )}
            bgImageAlt="sun valley"
            strength={200}
        >
            <div>
                <div className='home-title'>
                    <h1 className='parallax-title'>“Be more concerned with your character than your reputation,
                    because your character is what you really are, while your reputation is merely what others
                    think you are.”
                    ― John Wooden</h1>

                </div>
            </div>
            <div style={{ height: '780px' }} />
        </Parallax >

    </div >
);
export default MyParallax;