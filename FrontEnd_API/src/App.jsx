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
    <div className="container">
      <h1 style={{ textAlign: 'center', margin: '20px 0', color: '#333' }}>API PRODUCTS</h1>
      <div className="products-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product) => (
          <div key={product.id} className="product-card" style={{
            width: '250px', margin: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)', textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '1.2em', margin: '10px 0', color: '#555' }}>{product.name}</h2>
            <p className="product-price" style={{ color: '#777' }}>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
