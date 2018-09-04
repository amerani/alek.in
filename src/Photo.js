import React from 'react';
import fs from 'fs';

const styles = {
    borderRadius: "50%",
    height: "25vh",
    paddingBottom: "20px"
};

const Photo = () => {
    const buffer = fs.readFileSync(`${__dirname}/../assets/me.jpg`);
    return (
        <img 
            style={styles}
            src={`data:image/png;base64,${buffer.toString('base64')}`}
        />
    )
}

export { Photo };