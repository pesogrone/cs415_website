import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  // products array
  const products = [
    { id: 1, name: "Tent", price: "$10" },
    { id: 2, name: "Sleeping Bag", price: "$5" },
    { id: 3, name: "Backpack", price: "$5" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Rental Store</h1>
      </header>
      <main>
        {products.map((product) => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button>Rent</button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default LandingPage;
