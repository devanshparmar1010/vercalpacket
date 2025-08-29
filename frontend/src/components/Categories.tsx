import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Define the shape of a category
interface Category {
  name: string;
  subtitle: string;
  description: string;
  bgColor: string;
  textColor: string;
  query: string; // Query for Unsplash API
}

const Categories = () => {
  const [categoryImages, setCategoryImages] = useState<Record<string, string>>(
    {}
  );

  const initialCategories: Category[] = [
    {
      name: "MEN",
      subtitle: "Sharp & Stylish",
      description: "Explore the latest trends in men's shoes",
      bgColor: "bg-blue-600",
      textColor: "text-white",
      query: "men fashion",
    },
    {
      name: "WOMEN",
      subtitle: "Elegant & Modern",
      description: "Discover chic and sophisticated styles for women's shoes",
      bgColor: "bg-pink-500",
      textColor: "text-white",
      query: "women fashion",
    },
    {
      name: "KIDS",
      subtitle: "Fun & Playful",
      description: "Dress your little ones in comfortable and stylish shoes",
      bgColor: "bg-yellow-400",
      textColor: "text-black",
      query: "kids fashion",
    },
    {
      name: "SPORTS",
      subtitle: "Performance First",
      description: "Gear up with our high-performance sports shoes",
      bgColor: "bg-gray-800",
      textColor: "text-white",
      query: "sports",
    },
  ];

  useEffect(() => {
    const fetchImages = async () => {
      const images: Record<string, string> = {};
      const unsplashAccessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

      if (!unsplashAccessKey) {
        console.error(
          "Unsplash Access Key is not defined. Please set VITE_UNSPLASH_ACCESS_KEY in your .env file."
        );
        return;
      }

      for (const category of initialCategories) {
        try {
          const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${category.query}&per_page=1&client_id=${unsplashAccessKey}`
          );
          const data = await response.json();
          if (data.results && data.results.length > 0) {
            images[category.name] = data.results[0].urls.regular;
          }
        } catch (error) {
          console.error(`Failed to fetch image for ${category.name}`, error);
        }
      }
      setCategoryImages(images);
    };

    fetchImages();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            SHOP BY CATEGORY
          </h2>
          <p className="text-lg text-gray-600">
            Find your perfect fit across our performance categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initialCategories.map((category) => (
            <Link
              to={`/category/${category.name.toLowerCase()}`}
              key={category.name}
              className="block"
            >
              <div
                className={`${category.bgColor} ${category.textColor} p-8 rounded-lg relative overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl h-80 flex flex-col justify-between`}
                style={{
                  backgroundImage: `url(${categoryImages[category.name]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative z-10 space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm opacity-80 uppercase tracking-wide">
                      {category.subtitle}
                    </p>
                    <h3 className="text-3xl font-bold">{category.name}</h3>
                    <p className="opacity-90">{category.description}</p>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-2 font-semibold group-hover:translate-x-2 transition-transform duration-300 mt-4">
                    <span>EXPLORE</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
