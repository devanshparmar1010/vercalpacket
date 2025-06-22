import React, { useState } from "react";
import { Menu, X, Search, ShoppingBag, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemCount } = useCart();
  const { isAuthenticated, logout, user } = useAuth();
  const cartItemCount = getCartItemCount();

  const navItems = [
    { name: "Men", to: "/category/men" },
    { name: "Women", to: "/category/women" },
    { name: "Kids", to: "/category/kids" },
    { name: "Sports", to: "#" },
    { name: "Lifestyle", to: "#" },
    { name: "Sale", to: "#" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black tracking-tight">
              PUMA
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) =>
                item.to.startsWith("/category/") ? (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="text-gray-900 hover:text-brand-red px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <span
                    key={item.name}
                    className="text-gray-900 hover:text-brand-red px-3 py-2 text-sm font-medium transition-colors duration-200 relative group cursor-not-allowed opacity-60"
                  >
                    {item.name}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-black transition-colors duration-200">
              <Search size={20} />
            </button>
            {isAuthenticated ? (
              <>
                <span className="text-gray-900 font-medium">
                  Hello, {user?.name.split(" ")[0]}
                </span>
                <Button onClick={logout} variant="ghost">
                  Logout
                </Button>
              </>
            ) : (
              <Button asChild>
                <Link to="/login">
                  <User className="mr-2 h-4 w-4" /> Login
                </Link>
              </Button>
            )}
            <Link
              to="/cart"
              className="p-2 text-gray-600 hover:text-black transition-colors duration-200 relative"
            >
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-black transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) =>
                item.to.startsWith("/category/") ? (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="text-gray-900 hover:text-brand-red block px-3 py-2 text-base font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span
                    key={item.name}
                    className="text-gray-900 block px-3 py-2 text-base font-medium opacity-60 cursor-not-allowed"
                  >
                    {item.name}
                  </span>
                )
              )}
              <div className="flex items-center space-x-4 px-3 py-2 border-t">
                <button className="p-2 text-gray-600 hover:text-black transition-colors duration-200">
                  <Search size={20} />
                </button>
                {isAuthenticated ? (
                  <Button
                    onClick={logout}
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    Logout
                  </Button>
                ) : (
                  <Button asChild className="w-full justify-start">
                    <Link to="/login">
                      <User className="mr-2 h-4 w-4" /> Login
                    </Link>
                  </Button>
                )}
                <Link
                  to="/cart"
                  className="p-2 text-gray-600 hover:text-black transition-colors duration-200 relative"
                >
                  <ShoppingBag size={20} />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-brand-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
