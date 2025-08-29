import React from "react";
import { Heart, Star } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
  image?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  category,
  price,
  originalPrice,
  rating,
  reviews,
  isNew = false,
  isSale = false,
  image,
}) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Product Image */}
      <div className="aspect-square bg-brand-gray relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-4xl font-bold text-gray-400">
            PUMA
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-4 left-4 space-y-2">
          {isNew && (
            <span className="bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded">
              NEW
            </span>
          )}
          {isSale && (
            <span className="bg-brand-red text-white px-2 py-1 text-xs font-semibold rounded">
              SALE
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50">
          <Heart
            size={16}
            className="text-gray-600 hover:text-brand-red transition-colors duration-200"
          />
        </button>

        {/* Quick View Button */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <button className="bg-white text-black px-6 py-2 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-100">
            QUICK VIEW
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <div className="text-sm text-gray-500 uppercase tracking-wide">
          {category}
        </div>
        <h3 className="font-semibold text-gray-900 group-hover:text-brand-red transition-colors duration-200">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={
                  i < Math.floor(rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-900">${price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
