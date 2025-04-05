import { useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div style={styles.card}>
      <img src={item.image} alt={item.name} style={styles.image} />
      <div>
        <h3>{item.name}</h3>
        <p>Unit Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <div style={styles.controls}>
          <button onClick={() => dispatch(increment(item.id))}>+</button>
          <button
            onClick={() => dispatch(decrement(item.id))}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "20px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "10px",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  controls: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
};

export default CartItem;
