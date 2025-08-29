import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                FOREVER
                <span className="block text-brand-red">FASTER</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Unleash your potential with PUMA's cutting-edge performance
                gear.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                SHOP NOW
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  size={20}
                />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 font-semibold transition-all duration-300">
                EXPLORE COLLECTION
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden shadow-2xl w-60 h-60 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] mx-auto">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
                alt="Featured Shoe"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-red rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-60"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
