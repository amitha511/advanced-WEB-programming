import Cart from "../Cart";
import "./Menu.css";

function Menu(props) {
    

    const clickHomeHendler = () => { 

    }
    const clickProductsHendler = () => {}
    const clickCartHendler = () => {
        eventHendler()
    }
    const clickSingUpHendler = () => {}
    return (
        <div>
            <nav className="navbar">
            <div className="navbar_container">
            <a id="navbar_logo">The Bookmark</a>
            <div className="navbar_toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className="navbar_menu">
                <li className="navbar_item">
                    <a className="navbar_links"  onClick={clickHomeHendler}>Home</a>
                </li>
                <li className="navbar_item">
                   <a className="navbar_links"  onClick={clickProductsHendler} >Products</a>
                </li>
                <li className="navbar_item">
                     <a className="navbar_links" onClick={clickCartHendler} >cart</a>
                </li>
                <li className="navbar_btn">
                    <a className="button"  onClick={clickSingUpHendler} >Sing Up</a>
                </li>
            </ul>
                </div>
    </nav>
   </div>  
    );
}

export default Menu;