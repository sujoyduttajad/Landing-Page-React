import React, {useState, useEffect} from 'react'
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    HamburgerIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink,
    Logo
 } from './Navbar.elements'
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles';
import logoSrc from "../../images/logo.svg";


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [homeClick, setHomeClick] = useState(false);

    const handleHomeClick = () => {
        setHomeClick(true);
    }

    const handleClick = () =>  setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        // so if the screensize is <= 960px then set button state to false
        if(window.innerwidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <Nav>
            <NavbarContainer>
              <NavLogo to="/">
                <Logo src={logoSrc} />
              </NavLogo>
              <HamburgerIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </HamburgerIcon>
              <NavMenu onClick={handleClick} click={click}>
                <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                  <NavLinks to="/" onClick={closeMobileMenu}>
                    Home
                  </NavLinks>
                </NavItem>

                <NavItemBtn>
                  {button ? (
                    <NavBtnLink
                      to={{
                        pathname:
                          "https://chrome.google.com/webstore/detail/discountly/gnocblmhdddbhhdijfdnloldcbnhhign",
                      }}
                      target="_blank"
                    >
                      <Button primary>SIGN UP</Button>
                    </NavBtnLink>
                  ) : (
                    <NavBtnLink
                      to={{
                        pathname:
                          "https://chrome.google.com/webstore/detail/discountly/gnocblmhdddbhhdijfdnloldcbnhhign",
                      }}
                      target="_blank"
                    ></NavBtnLink>
                  )}
                </NavItemBtn>
              </NavMenu>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </>
    );
}

export default Navbar
