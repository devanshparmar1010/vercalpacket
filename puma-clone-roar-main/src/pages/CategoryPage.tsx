import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Button } from "@/components/ui/button";
import { useAuth } from "../context/AuthContext";

interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
}

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Helper to generate a stable price based on image ID
  const generatePrice = (id: string) => {
    // A simple hash function to get a pseudo-random but consistent number
    const hash = id
      .split("")
      .reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
    return (Math.abs(hash) % 100) + 50; // Price between $50 and $150
  };

  useEffect(() => {
    const fetchCategoryImages = async () => {
      if (!categoryName) return;
      setLoading(true);
      const unsplashAccessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
      if (!unsplashAccessKey) {
        console.error("Unsplash Access Key is not defined.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${categoryName.toLowerCase()} shoes&per_page=20&client_id=${unsplashAccessKey}`
        );
        const data = await response.json();
        if (data.results) {
          setImages(data.results);
        }
      } catch (error) {
        console.error(`Failed to fetch images for ${categoryName}`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryImages();
  }, [categoryName]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Home</span>
          </Link>
        </div>
      </header>
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 capitalize text-center">
            {categoryName} Collection
          </h1>

          {loading ? (
            <div className="text-center">
              <p className="text-lg text-gray-600">Loading images...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={image.urls.small}
                      alt={image.alt_description}
                      className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 truncate capitalize">
                      {image.alt_description || `${categoryName} Shoe`}
                    </h3>
                    <p className="text-xl font-bold text-gray-900 mt-2">
                      ${generatePrice(image.id).toFixed(2)}
                    </p>
                    <div className="mt-4 flex space-x-2">
                      <Button
                        onClick={() => {
                          if (!isAuthenticated) {
                            navigate("/login");
                            return;
                          }
                          addToCart({
                            id: image.id,
                            name:
                              image.alt_description || `${categoryName} Shoe`,
                            price: generatePrice(image.id),
                            image: image.urls.small,
                          });
                        }}
                      >
                        Add to Cart
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          if (!isAuthenticated) {
                            navigate("/login");
                            return;
                          }
                          addToCart({
                            id: image.id,
                            name:
                              image.alt_description || `${categoryName} Shoe`,
                            price: generatePrice(image.id),
                            image: image.urls.small,
                          });
                          navigate("/cart");
                        }}
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!loading && images.length === 0 && (
            <div className="text-center">
              <p className="text-lg text-gray-600">
                No images found for this category.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
