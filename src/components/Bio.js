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
    qualtrics: {
        color: '#464E7E',
        href: 'https://www.qualtrics.com/'
    },
    gql: {
        color: "#e10098",
        href: "https://github.com/amerani/gsox"
    },
    insta: {
        color: "#8a3ab9",
        href: "https://www.instagram.com/p/BdRU4HsDrXS"
    }
}

const Bio = () => {
    const { ut, uship, gql, insta, qualtrics } = links;
    return (
        <React.Fragment>
        <p style={styles.pb10}>I was born and raised in Mumbai, India</p>
        <p>I studied Computer Science at the <Link color={ut.color} href={ut.href}>University of Texas at Austin</Link></p><br/>
        
        <p style={styles.pb10}>I'm a full stack software engineer at <Link color={qualtrics.color} href={qualtrics.href}>Qualtrics</Link>
        </p>
        <p style={styles.pb10}>I build open-source tools for <Link color={gql.color} href={gql.href}>GraphQL</Link>
        </p>
        <p>I enjoy looking at <Link color={insta.color} href={insta.href}>multimedia art</Link> and sometimes making it as well</p>
        </React.Fragment>
    )
}

export { Bio };