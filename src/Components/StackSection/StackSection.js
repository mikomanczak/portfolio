import React from 'react';
import './stackSection.css';

const StackSection = () => {
    return(
        <section id="stack-section">
            <h2 className="stack-section-headline">My current stack as a mind map</h2>
            <iframe  src='https://embed.coggle.it/diagram/W8DmdsCvbTPoyJUc/6ec25f1fc72bdfc668f4642c48efb7ca9e6916dbc5569dc84d9460681e012758' frameborder='0' allowfullscreen></iframe>
        </section>
    );
}

export default StackSection;