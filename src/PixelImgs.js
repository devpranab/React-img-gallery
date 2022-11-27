import React from 'react';

const PixelImgs = props => {
    const {img} = props;
    console.log(img);
    return (
        <div className="col-md-3">
        <img src={img.src.large} alt="Not found!" className='img-fluid'/>
        </div>
    );
};

export default PixelImgs;