import React, { useState } from 'react';
import './index.css'


const AccordionItem = ({ accordion, isOpen, onHeaderClick }) => {
    return (
        <div className='accordion-item accordion-part'>
            <div
                className={`accordion-part-header ${isOpen ? 'accordion-part-header-opened' : ''}`}
                onClick={onHeaderClick}
            >
                {accordion.title}
            </div>
            {isOpen && (
                <div className="accordion-part-body">
                    <p className="accordion-part-text">{accordion.text}</p>
                </div>
            )}
        </div>
    );
};

const AccordionList = ({ accordions }) => {
    const [activeAccordion, setActiveAccordion] = useState(-1);

    const headerClick = (index) => {
        setActiveAccordion((prev) => (prev === index ? -1 : index));
    };

    return (
        <div className='accordion-list'>
            {accordions.map((item, index) => (
                <AccordionItem
                    key={item.title}
                    accordion={item}
                    isOpen={activeAccordion === index}
                    onHeaderClick={() => headerClick(index)}
                />
            ))}
        </div>
    );
};

const Accordion = () => {
    const accordions = [
        {
            title: 'What is Lorem Ipsum?',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        },
        {
            title: 'Where does it come from?',
            text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        },
        {
            title: 'Why do we use it?',
            text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
        },
        {
            title: 'Where can I get some?',
            text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
        },
    ];

    return (
        <div className='container'>
            <div className='accordion'>
                <h1 className="accordion-title">FAQ</h1>
                <AccordionList accordions={accordions} />
            </div>
        </div>
    );
};

export default Accordion;
