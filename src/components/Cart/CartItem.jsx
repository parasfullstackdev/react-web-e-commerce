import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../redux/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="flex-grow ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <label className="text-gray-600">Quantity:</label>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={handleQuantityChange}
              className="w-16 px-2 py-1 border rounded-md"
            />
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-gray-900">
              {" "}
              ₹{(item.price * item.quantity * 83).toLocaleString("en-IN")}{" "}
            </div>{" "}
            <div className="text-sm text-gray-500">
              {" "}
              ₹{(item.price * 83).toLocaleString("en-IN")} each{" "}
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleRemove}
        className="ml-4 p-2 text-red-600 hover:text-red-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
