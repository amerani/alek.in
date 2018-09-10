import React from 'react';

const SvgImg = (props) => {
    const { svg } = props;
    const styles = {
        height: "28px",
    }
    return (
        <img 
            style={styles}
            src={`data:image/svg+xml;charset=UTF-8,${svg}`}
        />   
    )
}

export { SvgImg };