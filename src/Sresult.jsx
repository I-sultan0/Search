import React from 'react';
import './index.css';

const Sresult = (props) => {
    const img = `https://source.unsplash.com/600x400/?${props.name}`
    return (
        <>
            <div className='img'>

                <img src={img} style={{ height: "auto ", maxWidth: "100%" }} alt='seaaaaaaa' />

            </div>

        </>
    )
}

export default Sresult
