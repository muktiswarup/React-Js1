import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { themeContext } from '../../Context/themeContext';

const Navbar = () => {
  // Destructure both theme and setTheme from the context
  const { theme, setTheme } = useContext(themeContext);

  // Function to toggle the theme
  const handleMode = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <div className="navbar" >
        <div className="left">
          <Link className="link" to="/">
            My Website
          </Link>
        </div>

        <div className="right">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/product">
            Product
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
          <button className="mode" onClick={handleMode}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;