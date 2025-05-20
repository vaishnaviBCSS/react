import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false);
  const aboutUsRef = useRef(null);

  const toggleAboutUsDropdown = () => {
    setIsAboutUsDropdownOpen(prev => !prev);
  };

  const closeDropdown = () => {
    setIsAboutUsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (aboutUsRef.current && !aboutUsRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="container">
      <div className="logo1">
        <img src="cvrlogo.png" alt="CVR College Logo" />
      </div>
      <div className="text">
        <h1>CVR COLLEGE OF ENGINEERING</h1>
        <h2>In Pursuit of Excellence</h2>
        <h3>(An Autonomous Institution, NAAC 'A' Grade)</h3>
      </div>
      <div className="logo2">
        <img src="20years.png" alt="20 Years Celebration" />
      </div>

      <ul className="menu">
        <li className="list"><Link to="/Home">Home</Link></li>

        {/* About Us Dropdown */}
        <li className="list dropdown" ref={aboutUsRef}>
          <button
            aria-haspopup="true"
            aria-expanded={isAboutUsDropdownOpen}
            onClick={toggleAboutUsDropdown}
            className="dropdown-toggle"
          >
            About Us ▼
          </button>

          {isAboutUsDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/aboutus/history" onClick={closeDropdown}>
                  Our History
                </Link>
              </li>
              <li>
                <Link to="/aboutus/mission" onClick={closeDropdown}>
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link to="/aboutus/principal" onClick={closeDropdown}>
                  Principal's Message
                </Link>
              </li>
              {/* Add more submenu links here */}
            </ul>
          )}
        </li>

        <li className="list"><Link to="/academics">Academics</Link></li>
        <li className="list"><Link to="/departments">Departments</Link></li>
        <li className="list"><Link to="/research">Research</Link></li>
        <li className="list"><Link to="/infrastructure">Infrastructure</Link></li>
        <li className="list"><Link to="/placements">Placements</Link></li>
        <li className="list"><Link to="/alumni">Alumni</Link></li>
        <li className="list"><Link to="/more">More</Link></li>
        <li className="list"><Link to="/contactus">Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
