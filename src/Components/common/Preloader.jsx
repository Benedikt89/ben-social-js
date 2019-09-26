import React from 'react';
import spinner from './../../asserts/images/Spinner.svg'

const Preloader = () => {
    return(
        <div>
            <img src={spinner}/>
        </div>
    )
};

export default Preloader;