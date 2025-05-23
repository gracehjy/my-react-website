import React, { useEffect, useState } from 'react';

export const Typewriter = ({ text, delay, onDone}) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if(currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        } else if (onDone) {
            onDone();
        }
    }, [currentIndex, text, delay, onDone]);
    return <span>{currentText}</span>;
};