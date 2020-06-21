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
    qualtrics: {
        color: '#21dbaa',
        href: 'https://www.qualtrics.com/'
    },
    fe: {
        color: "#61dafb",
        href: "https://github.com/amerani/gsox"
    },
    insta: {
        color: "#8a3ab9",
        href: "https://www.instagram.com/e9c12/"
    },
    dev: {
        color: "#e10098",
        href: "https://github.com/amerani/better-commit"
    },
    niko: {
        color: "#e3c0a0",
        href: "https://www.instagram.com/nikotheaussiepoo/"
    }
}

const Bio = () => {
    const { ut, fe, dev, insta, qualtrics, niko } = links;
    return (
        <section style={styles.pb10}>
            <p>I was born and raised in Mumbai, India</p>
            <p>I studied Computer Science at the <Link color={ut.color} href={ut.href}>University of Texas at Austin</Link></p><br/>
            
            <p>I'm a lead engineer at <Link color={qualtrics.color} href={qualtrics.href}>Qualtrics</Link>, working on the reporting platform and sometimes I build open-source tools for <Link color={fe.color} href={dev.href}>web development</Link> and <Link color={dev.color} href={dev.href}>developer productivity</Link>
            </p><br/>

            <p>I also enjoy making <Link color={insta.color} href={insta.href}>audiovisual art</Link> and have a fur baby named <Link color={niko.color} href={niko.href}>Niko 🐶</Link></p>
        </section>
    )
}

export { Bio };