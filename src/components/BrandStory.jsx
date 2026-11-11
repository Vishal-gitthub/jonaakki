import React from "react";

const BrandStory = () => {
  return (
    <div className="w-full bg-green-600 py-10 px-6 grid grid-cols-3">
      <div className=" text-center py-20 px-16">
        <h2 className="text-2xl">Ethically Handcrafted</h2>
        <p className="text-sm">Curated with love and made by skilled Indian kaarigars.</p>
      </div>
      <div className="text-center  py-20 px-16">
        <h2 className="text-2xl">Heirloom Quality</h2>
        <p className="text-sm">
          Lifetime warranty and care to ensure your pieces last generations.
        </p>
      </div>
      <div className="text-center  py-20 px-16">
        <h2 className="text-2xl">Complimentary Shipping</h2>
        <p className="text-sm">Free domestic shipping on all orders above ₹2,500.</p>
      </div>
    </div>
  );
};

export default BrandStory;