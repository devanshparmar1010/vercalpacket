import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddAddressPage = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address || !city || !zip || !country) {
      setError("Please fill in all fields");
      return;
    }
    // Save address to localStorage (or context)
    localStorage.setItem(
      "user_address",
      JSON.stringify({ address, city, zip, country })
    );
    navigate("/checkout"); // Placeholder for the next step
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white shadow-lg rounded-xl">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
          Add Shipping Address
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && (
            <p className="text-center p-2 bg-red-100 text-red-700 rounded-md">
              {error}
            </p>
          )}
          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder="123 Main St"
            />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              placeholder="City"
            />
          </div>
          <div>
            <Label htmlFor="zip">ZIP/Postal Code</Label>
            <Input
              id="zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              required
              placeholder="ZIP/Postal Code"
            />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              placeholder="Country"
            />
          </div>
          <Button type="submit" className="w-full mt-4">
            Save Address
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddAddressPage;
