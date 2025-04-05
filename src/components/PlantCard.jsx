import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./PlantCard.css";

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = cartItems.some((item) => item.id === plant.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addToCart(plant));
    }
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} width="150px" height="170px" />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={handleAddToCart} disabled={isInCart}>
        {isInCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

export default PlantCard;
