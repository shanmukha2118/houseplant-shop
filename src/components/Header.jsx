import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>🪴 VERDANT ROOTS</h1>
      <nav style={styles.nav}>
        {location.pathname !== "/" && (
          <>
            <Link to="/products" style={styles.link}>
              Products
            </Link>
            <Link to="/cart" style={styles.link}>
              <FaShoppingCart /> Cart ({totalItems})
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
    background: "green",
    borderBottom: "2px solid #ccc",
    color: "white",
  },
  logo: {
    fontSize: "1.8rem",
    margin: 0,
  },
  nav: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
  },
};

export default Header;
