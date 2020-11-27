import React from 'react';
import './footer.scss';

const Footer = () => {
    return(
        <footer className="footer">
            <span className="footer__copyright">&copy; Dmitry Alexandrov</span>
            <span className="footer__date">{`2020 - ${(new Date()).getFullYear()}`}</span>
        </footer>
    )
}

export default Footer;