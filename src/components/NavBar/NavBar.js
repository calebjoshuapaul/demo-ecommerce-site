import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { ProductContext } from "../../context/ProductContext";
import { ReactComponent as Logo } from "../../assets/083 crown.svg";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../CartIcon/CartIcon";
import "./NavBar.styles.scss";

function NavBar() {
  const { currentUser } = useContext(UserContext);
  const userName = currentUser?.displayName.split(" ");

  const handleSignOut = async () => {
    await signOutUser();
  };

  const { setProducts, categories } = useContext(ProductContext);

  const handleShopClick = () => {
    setProducts(categories);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar__container">
          <Link to="/">
            <Logo className="navbar__logo" />
          </Link>
          <div className="navbar__items">
            <Link to="/shop" onClick={handleShopClick}>
              SHOP
            </Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/sign-in">
              {currentUser ? `Hi, ${userName[0].toUpperCase()}` : "SIGN IN"}
            </Link>
            {currentUser ? (
              <Link to="/sign-in" onClick={handleSignOut}>
                SIGN OUT
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
        <CartIcon />
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
