import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function CartPage() {
  const items = useSelector((state) => state.cart.items);

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div style={styles.container}>
      <h2>Your Shopping Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <p>Total Items: {totalQuantity}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>

          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div style={styles.buttons}>
            <button onClick={() => alert("Checkout Coming Soon!")}>Checkout</button>
            <Link to="/products">
              <button>Continue Shopping</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
    gap: "15px",
  },
};

export default CartPage;
