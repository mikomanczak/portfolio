import React from 'react';
import './footer.css';

const Footer = () => {
    return(
        <footer id="footer">
            <p>Mikołaj Mańczak, 2018</p>
            <p className="contact-info">You can reach me at mikomanczak@gmail.com</p>
            <p>PS: Background images courtesy Frederik Danko and Ben Blennerhassett.</p>
            <p>Crediting isn’t required, but it helps photographers gain exposure <br/>(and I guess it's my way of saying "thank you")</p>
        </footer>
    );
}

export default Footer;