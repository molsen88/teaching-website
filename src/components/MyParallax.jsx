import React from 'react';
import { Parallax } from 'react-parallax';



const MyParallax = () => (
    <div>


        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require( '../images/Mohamed-Salah-wallpaper-HD.jpg' )}
            bgImageAlt="sun valley"
            strength={200}
        >
            <div>
                <div className='home-title'><h1 >Welcome to <br />Mr. Olsen's Class</h1>

                </div>
            </div>
            <div style={{ height: '680px' }} />
        </Parallax >

    </div >
);
export default MyParallax;