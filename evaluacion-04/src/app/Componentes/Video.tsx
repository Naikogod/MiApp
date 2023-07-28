import React from 'react';

export const Video = () => {
    return (
    <div style={{ margin: '20px' }}>
        <br></br>
        <label><h1>Explicacion Horoscopo</h1></label>
        <br></br>
        <br></br>
        <video width="800" height="400" controls>
        <source src="/vid/video.mp4" type="video/mp4" />
        </video>
    </div>
    );
};




