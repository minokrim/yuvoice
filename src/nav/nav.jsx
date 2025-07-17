import React,{useState} from "react";
import "./nav.css"
import dropdown from "../assets/dropdown.png";
import logo from "../assets/newLogo.png";
import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.png"
import EditorialDropDown from "../component/editorialDropdown";
import GetinvolvedDropDown from "../component/getinvolveddropdown";
import AboutDropDown from "../component/aboutdropdown";
import useDropdown from "../hooks/useDropDown";

export default function Nav(){
    const[mobileNav,setMobileNav]=useState(false);
    const [dropdownState, setDropdownState] = useState({
        editorial: false,
        getInvolved: false,
        about: false,
      });
    const editorialDropdown = useDropdown();
    const getInvolvedDropdown = useDropdown();
    const aboutDropdown = useDropdown();

    function handleClick(){
        setMobileNav(!mobileNav)
    }

    const handleDropdownClick = (dropdownName) => {
        setDropdownState((prevState) => ({
          ...prevState,
          [dropdownName]: !prevState[dropdownName],
        }));
      };



    return <main className="nav-Body z-20 relative">

        <section className="nav-left">
          <Link to="/">
          <img src={logo} alt="logo" />
          </Link>
            <img src={hamburger} alt="hamburger icon" id="hamburger" onClick={handleClick}/>

        </section>

        <section className="nav-right">
            <Link to="/" className="text-black no-underline">Home</Link>

            <div className="nav-option" onMouseEnter={editorialDropdown.handleMouseEnter} onMouseLeave={editorialDropdown.handleMouseLeave}>
            <Link to="/editorial" className="text-black no-underline">Editorial</Link>
            <img src={dropdown} alt="dropDown"/>
            <section className="dropdown">
            {editorialDropdown.isVisible && <EditorialDropDown/>}
            </section>
            </div>
            
            <div className="nav-option" onMouseEnter={getInvolvedDropdown.handleMouseEnter} onMouseLeave={getInvolvedDropdown.handleMouseLeave}>
            <Link to="/volunteer" className="text-black no-underline">Get Involved</Link>
            <img src={dropdown} alt="dropDown"/>
            <section className="dropdown">
            {getInvolvedDropdown.isVisible && <GetinvolvedDropDown/>}
            </section>
            </div>

            <div className="nav-option" onMouseEnter={aboutDropdown.handleMouseEnter} onMouseLeave={aboutDropdown.handleMouseLeave}>
            <Link to="/about" className="text-black no-underline">About</Link>
            </div>
        </section>

        {mobileNav && (
        <section className="mobileNavOptions" id="mobileNav" onClick={handleClick}>
            <Link to="/" className="text-black no-underline">Home</Link>
          <div
            className="nav-option"
            onClick={(e) => {
              e.stopPropagation(); 
              handleDropdownClick("editorial");
            }}
          >
            <p>Editorial</p>
            <img src={dropdown} alt="dropDown"/>
            <section className="dropdown">
            {dropdownState.editorial && <EditorialDropDown/>}
            </section>
          </div>


          <div
            className="nav-option"
            onClick={(e) => {
              e.stopPropagation();
              handleDropdownClick("getInvolved");
            }}
          >
            <p>Get Involved</p>
            <img src={dropdown} alt="dropDown"/>
            <section className="dropdown dropdown2">
            {dropdownState.getInvolved && <GetinvolvedDropDown />}
            </section>
          </div>

          <div
            className="nav-option"
            onClick={(e) => {
              e.stopPropagation();
              handleDropdownClick("about");
            }}
          >
            <p>About</p>
            <img src={dropdown} alt="dropDown"/>
            <section className="dropdown dropdown2">
            </section>
          </div>
        </section>

        )}
    </main>
}