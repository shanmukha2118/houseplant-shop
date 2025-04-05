import { products } from "../data/products";
import PlantCard from "../components/PlantCard";
import "./ProductPage.css"; // Import the CSS file for styling

function ProductPage() {
  // Group products by category
  const grouped = products.reduce((acc, plant) => {
    if (!acc[plant.category]) {
      acc[plant.category] = [];
    }
    acc[plant.category].push(plant);
    return acc;
  }, {});

  return (
    <div className="product-page">
      <h2>Shop Plants</h2>
      {Object.entries(grouped).map(([category, plants]) => (
        <div key={category}>
          <h3>{category}</h3>
          <div className="plant-grid">
            {plants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductPage;
