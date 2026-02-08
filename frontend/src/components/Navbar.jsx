import api from "../api";

export default function Navbar({ setLoggedIn }) {
  const logout = async () => {
    await api.post("/users/logout");
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  const showCart = async () => {
    const res = await api.get("/carts");
    alert(JSON.stringify(res.data, null, 2));
  };

  const showOrders = async () => {
    const res = await api.get("/orders");
    alert(
      res.data.map((o) => o._id).join("\n") || "No orders"
    );
  };

  return (
    <div className="flex gap-4 p-4 border-b">
      <button onClick={showCart}>Cart</button>
      <button onClick={showOrders}>Order History</button>
      <button onClick={logout} className="ml-auto text-red-500">
        Logout
      </button>
    </div>
  );
}
