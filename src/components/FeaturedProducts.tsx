import React from "react";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "RS-X Reinvention",
      category: "Running",
      price: 110,
      originalPrice: 140,
      rating: 4.5,
      reviews: 128,
      isNew: true,
      isSale: true,
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/369579/28/sv01/fnd/PNA/fmt/png/RS-X-Reinvention-Sneakers",
    },
    {
      id: 2,
      name: "Future Z 1.2 FG/AG",
      category: "Football",
      price: 220,
      rating: 4.8,
      reviews: 89,
      isNew: true,
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/106476/01/sv01/fnd/PNA/fmt/png/Future-Z-1.2-FG/AG-Soccer-Cleats-Men",
    },
    {
      id: 3,
      name: "Suede Classic XXI",
      category: "Lifestyle",
      price: 75,
      rating: 4.6,
      reviews: 256,
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/374915/01/sv01/fnd/PNA/fmt/png/Suede-Classic-XXI-Sneakers",
    },
    {
      id: 4,
      name: "BMW M Motorsport",
      category: "Motorsport",
      price: 95,
      originalPrice: 120,
      rating: 4.4,
      reviews: 67,
      isSale: true,
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/307597/02/sv01/fnd/PNA/fmt/png/BMW-M-Motorsport-Drift-Cat-Decima-Motorsport-Shoes",
    },
    {
      id: 5,
      name: "Cali Sport Mix",
      category: "Women",
      price: 85,
      rating: 4.7,
      reviews: 194,
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/373908/01/sv01/fnd/PNA/fmt/png/Cali-Sport-Mix-Sneakers-Women",
    },
    {
      id: 6,
      name: "Velocity Nitro 2",
      category: "Running",
      price: 130,
      rating: 4.9,
      reviews: 312,
      isNew: true,
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/376261/01/sv01/fnd/PNA/fmt/png/Velocity-Nitro-2-Running-Shoes-Men",
    },
    {
      id: 7,
      name: "King Pro FG",
      category: "Football",
      price: 180,
      rating: 4.6,
      reviews: 145,
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/107255/01/sv01/fnd/PNA/fmt/png/KING-PRO-FG-Soccer-Cleats-Women",
    },
    {
      id: 8,
      name: "Thunder Spectra",
      category: "Lifestyle",
      price: 100,
      originalPrice: 130,
      rating: 4.3,
      reviews: 78,
      isSale: true,
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/367516/01/sv01/fnd/PNA/fmt/png/Thunder-Spectra-Sneakers",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            FEATURED PRODUCTS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our latest collection of performance and lifestyle footwear
            designed for champions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black text-white hover:bg-gray-800 px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
