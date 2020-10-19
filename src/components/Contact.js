import React from 'react';
import github from 'simple-icons/icons/github';
import npm from 'simple-icons/icons/npm';
import linkedin from 'simple-icons/icons/linkedin';
import gmail from 'simple-icons/icons/gmail';
import insta from 'simple-icons/icons/instagram';
import twitter from 'simple-icons/icons/twitter';
import spotify from 'simple-icons/icons/spotify';
import medium from 'simple-icons/icons/medium';
import { Link } from "./Link";
import { SvgImg } from "./SvgImg";

const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    item: {
        paddingRight: "10px"
    }
}
const Contact = () => {
    return (
        <div style={styles.container}>
            
            {/* GITHUB */}
            <Link style={styles.item} href="https://github.com/amerani">
                <SvgImg svg={github.svg} />
            </Link>

            {/* LINKEDIN */}
            <Link style={styles.item} href="https://www.linkedin.com/in/amerani/">
                <SvgImg svg={linkedin.svg} />
            </Link>

            {/* GMAIL */}
            <Link style={styles.item} href="mailto:alekmerani@gmail.com">
                <SvgImg svg={gmail.svg} />
            </Link>

            {/* MEDIUM */}
            <Link style={styles.item} href="https://medium.com/@alek.merani">
                <SvgImg svg={medium.svg} />
            </Link>

            {/* NPM */}
            <Link style={styles.item} href="https://www.npmjs.com/~amerani">
                <SvgImg svg={npm.svg} />
            </Link>  

            {/* TWITTER */}
            <Link style={styles.item} href="https://twitter.com/alek_merani">
                <SvgImg svg={twitter.svg} />
            </Link>

            {/* INSTAGRAM */}          
            <Link style={styles.item} href="https://www.instagram.com/alek_m_/">
                <SvgImg svg={insta.svg} />
            </Link>        

            {/* SPOTIFY */}          
            <Link style={styles.item} href="https://open.spotify.com/user/alek313">
                <SvgImg svg={spotify.svg} />
            </Link>                 

        </div>
    );
}

export { Contact };