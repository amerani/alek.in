import React from 'react';

const Link = (props) => {
    const { color, href, children } = props;
    const styles = {
        textDecoration: "none",
        fontWeight: 300,
        color: color || "#999999"
    };
    return (
        <a 
            target="_blank"
            style={{...styles, ...props.style}}
            href={href}
        >
            {children}
        </a>
    )
}

export { Link };