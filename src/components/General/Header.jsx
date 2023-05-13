import Logo from "./Logo";
import {BalloonHeart,
     Cart4, 
     PersonCircle, 
     BuildingUp,
      BuildingDown, 
     } from "react-bootstrap-icons";
const Header = () => {
    return <header>
        <Logo />
    <div className="search-block"></div>
<nav className="header__menu">
    <a href=""><BalloonHeart/></a>
    <a href=""><Cart4/></a>
    <a href=""><PersonCircle/></a>
    <span>
        <BuildingUp/>
        <BuildingDown/>
    </span>

</nav>

    </header>
}
export default Header;