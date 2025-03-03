import React, { useState, useMemo, useCallback } from 'react';

const Debounce = () => {
    const [text, setText] = useState('');
    
    // Step 1: useMemo creates debounce function once
    const debounce = useMemo(() => {
        let timerId;
        return (func, delay) => {
            return (...args) => {
                clearTimeout(timerId);
                timerId = setTimeout(() => {
                    func(...args);
                }, delay);
            };
        };
    }, []);  // Runs only once when component mounts

    // Step 2: useCallback keeps inputField function reference stable
    const inputField = useCallback((e) => {
        console.log(e.target.value);
        setText(e.target.value);
    }, []); // Runs only once when component mounts

    // Step 3: useMemo creates the debounced function only once
    const debounceInput = useMemo(() => debounce(inputField, 1000), [debounce, inputField]);

    return (
        <div>
            {/* Step 4: When user types, debounceInput is called */}
            <input type="text" value={text} onChange={debounceInput} />
            <p>{text}</p>
        </div>
    );
};

export default Debounce;
