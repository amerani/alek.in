import React from 'react';
import { Link } from './Link';

const styles = {
    pb10: {
        paddingBottom: "10px"
    },
    uShipLink: {
        textDecoration: "none",
        color: "#02aaf3",
        fontWeight: 300
    },
    gqlLink: {
        textDecoration: "none",
        color: "#E10098",
        fontWeight: 300
    }
};

const links = {
    ut: {
        color: "#bf5700",
        href: "https://utexas.edu"
    },
    uship: {
        color: "#02aaf3",
        href: "https://uship.com"
    },
    gql: {
        color: "#e10098",
        href: "https://github.com/amerani/gsox"
    },
    insta: {
        color: "#8a3ab9",
        href: "https://www.instagram.com/p/BdRU4HsDrXS/?taken-by=alekmarg"
    }
}

const Bio = () => {
    const { ut, uship, gql, insta } = links;
    return (
        <React.Fragment>
        <p style={styles.pb10}>I was born and raised in Mumbai, India</p>
        <p>I studied Computer Science at the <Link color={ut.color} href={ut.href}>University of Texas at Austin</Link> 🤘</p><br/>
        
        <p style={styles.pb10}>I build distributed web applications at <Link color={uship.color} href={uship.href}>uShip</Link>
        </p>
        <p style={styles.pb10}>I make open-source tools for <Link color={gql.color} href={gql.href}>GraphQL</Link>
        </p>
        <p>I enjoy looking at <Link color={insta.color} href={insta.href}>art</Link> and sometimes making it as well</p>
        </React.Fragment>
    )
}

export { Bio };