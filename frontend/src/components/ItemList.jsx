import { useEffect, useState } from "react";
import api from "../api";

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get("/items").then((res) => setItems(res.data));
  }, []);

  const addToCart = async (itemId) => {
    await api.post("/carts", { itemId });
    alert("Item added to cart");
  };

  const checkout = async () => {
    try {
      await api.post("/orders");
      alert("Order successful");
    } catch {
      alert("Cart is empty");
    }
  };

  return (
    <div className="p-6">
      <button
        className="bg-green-500 text-white px-4 py-2 mb-4"
        onClick={checkout}
      >
        Checkout
      </button>

      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item._id}
            className="border p-4 cursor-pointer"
            onClick={() => addToCart(item._id)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
