import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            console.log(window.innerWidth);
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Heng &nbsp;
            <span className="sm:block hidden">| Javascript</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex sm:flex-row sm:gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              onClick={() => setActive(nav.id)}
              className={`${
                active === nav.id ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] cursor-pointer font-medium`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={!toggle ? menu : close}
            alt="menu"
            className="cursor-pointer object-contain w-[28px] h-[28px]"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="flex flex-col list-none justify-end gap-4 items-start">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  onClick={() => {
                    setActive(nav.id);
                    setToggle(!toggle);
                  }}
                  className={`${
                    active === nav.id ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
