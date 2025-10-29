import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState([]);

  useEffect (() => {
    getProducts();
  }, []);

  const getProducts = async () => {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data.products); 
  };

  return (
    <>
      <h1>API PRODUCTS</h1>
      {products.map((product) => {
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      })}
    </>
  )
}

export default App
