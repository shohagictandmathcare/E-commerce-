import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Dummy data (later replace with Supabase)
    const demoProducts: Product[] = [
      {
        id: 1,
        name: "Wireless Headphone",
        price: 2500,
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        name: "Gaming Mouse",
        price: 1200,
        image: "https://via.placeholder.com/300",
      },
      {
        id: 3,
        name: "Smart Watch",
        price: 3500,
        image: "https://via.placeholder.com/300",
      },
    ];

    setProducts(demoProducts);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <h1 className="text-2xl font-bold text-white mb-4">
        Tech Store Products
      </h1>

      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg p-3"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover rounded-xl"
            />

            <h2 className="text-lg font-semibold mt-2">
              {product.name}
            </h2>

            <p className="text-blue-600 font-bold">
              ৳ {product.price}
            </p>

            <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;