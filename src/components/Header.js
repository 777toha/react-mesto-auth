import logo from '../image/logo_header.svg';

function Header() {
    return (
    <header className="header">
        <img className="header__logo" src={logo} alt="место" name="avatar"/>
    </header>
    )
  }
  
  export default Header