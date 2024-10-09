import "../css/Header.css"
import icon from "../assets/bookshelf-icon.jpg"
import search from "../assets/search-icon.png"

const Header = () => {
    return (
        <div className="header-container">
            <img src={icon} alt="bookshelf"/>
            <div id="logo">Bookshelf</div>
            <div id="search-box" inputMode={"text"}>
                <img src={search} alt="search icon"/>
            </div>
        </div>
    );
};

export default Header;