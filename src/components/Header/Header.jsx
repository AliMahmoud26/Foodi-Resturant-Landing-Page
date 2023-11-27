import { useState } from 'react';
import FLogo from '../../assets/images/F.png';
import Logo from '../../assets/images/oodi.png';
import { FaBars, FaPhoneAlt, FaSearch, FaShoppingBag, FaTimes } from 'react-icons/fa';


const Header = () => {

  const [navbar, setNavbar] = useState('menu');

  // const shwoNavbar = () => {
  //   setNavbar('menu show'); // Toggle the navbar state (open/close)
  // };

  // const closeNavbar = () => {
  //   setNavbar('menu'); // Toggle the navbar state (open/close)
  // };

  const toggleNavbar = () => {
    setNavbar(navbar === 'menu' ? 'menu show' : 'menu'); // Toggle the navbar state (open/close)
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="#">
            <img src={FLogo} alt="FLogo" />
            <img src={Logo} alt="Logo" />
          </a>
        </div>


        <nav>
          <ul className={navbar}>
            <FaTimes className='timesIcon' size={24} onClick={toggleNavbar} />
            <li><a href="#home">Home</a></li>
            <li><a href="#home">Menu</a></li>
            <li><a href="#home">Services</a></li>
            <li><a href="#home">Offers</a></li>
          </ul>
        </nav>

        <div className="contact">
          <FaSearch className='icon' size={20}/>
          <FaShoppingBag className='icon' size={20} />
          <a href="#" className="btn" title='+123 456 789'><FaPhoneAlt /> Contact</a>
        </div>
          <FaBars className='barsIcon' size={24} onClick={toggleNavbar} />
      </div>
    </header>
  )
}

export default Header