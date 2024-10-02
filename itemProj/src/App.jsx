import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [product, setProduct] = useState([]);

   useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, []);

  return (
    <div className="p-10 bg-slate-400">
      <h1 className="text-3xl font-bold text-center mb-8">Product Item</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">  
        {product.map((product) => (
          <div className="card bg-base-100 shadow-xl" key={product.id}>
            <figure>
              <img src={product.image} className="w-full h-64 object-contain p-4" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p className="text-xl font-semibold">${product.price}</p>
              <div className="card-actions justify-end">
                <button className="btn bg-cyan-700 text-white">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
