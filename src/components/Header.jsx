import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>🪴 Green Haven</h1>
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
    background: "#e4f5e6",
    borderBottom: "2px solid #ccc",
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
    color: "#333",
    fontWeight: "bold",
  },
};

export default Header;
