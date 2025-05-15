import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { useState } from "react";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative aspect-w-4 aspect-h-3">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
          {product.discountPercentage > 0 && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {Math.round(product.discountPercentage)}% OFF
            </div>
          )}
          <div
            className={`absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="p-6">
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
              {product.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="space-y-1">
              <div className="text-xl font-bold text-gray-900">
                {" "}
                ₹{(product.price * 83).toLocaleString("en-IN")}{" "}
              </div>{" "}
              {product.discountPercentage > 0 && (
                <div className="text-sm text-green-600">
                  {" "}
                  Save ₹
                  {(
                    ((product.price * product.discountPercentage) / 100) *
                    83
                  ).toLocaleString("en-IN")}{" "}
                </div>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-yellow-400 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {product.rating}
              </div>
              <div>Stock: {product.stock}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
