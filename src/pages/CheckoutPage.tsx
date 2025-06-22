import React from "react";
import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const address = localStorage.getItem("user_address");
  const navigate = useNavigate();
  const parsedAddress = address ? JSON.parse(address) : null;

  const handlePay = () => {
    // Here you would integrate with a payment gateway
    clearCart();
    localStorage.removeItem("user_address");
    alert("Payment successful! Thank you for your order.");
    navigate("/");
  };

  if (!parsedAddress) {
    navigate("/add-address");
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold mb-2">Shipping Address</h3>
        <p>{parsedAddress.address}</p>
        <p>
          {parsedAddress.city}, {parsedAddress.zip}
        </p>
        <p>{parsedAddress.country}</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
        <ul className="divide-y divide-gray-200 mb-4">
          {cartItems.map((item) => (
            <li key={item.id} className="py-2 flex justify-between">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>${getCartTotal().toFixed(2)}</span>
        </div>
      </div>
      <Button
        className="w-full text-lg"
        onClick={handlePay}
        disabled={cartItems.length === 0}
      >
        Pay Now
      </Button>
    </div>
  );
};

export default CheckoutPage;
