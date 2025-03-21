import ChildC from './ChildC'
import { useContext, useEffect } from 'react'
import { themeContext } from '../App'

const ChildB = () => {
    const { theme, setTheme } = useContext(themeContext);

    const changeColor = () => {
        setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
    };

    // Use useEffect to update the body styles whenever the theme changes
    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? 'white' : 'black';
        document.body.style.color = theme === 'light' ? 'black' : 'white';
    }, [theme]); // Dependency array ensures this runs whenever `theme` changes

    return (
        <div>
            <ChildC />
            <div className='container'>
                <div>
                    <button style={{ marginTop: '10rem' }} onClick={changeColor}>
                        Change The Color
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChildB;