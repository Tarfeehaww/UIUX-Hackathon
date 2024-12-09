import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-screen bg-gray-100">
      <div className="relative flex flex-col items-center text-center bg-white py-12">
        <p className="text-xl text-black font-bold">Hello Nike App</p>
        <p className="text-sm text-black uppercase tracking-widest mb-2">
          Download the app to access everything Nike.
          <span className="font-medium underline ml-1">Get Your Great</span>
        </p>
      </div>

      {/* Fullscreen Sneaker Image */}
      <div className="flex justify-center items-center px-4 md:px-8">
        <Image
          src={"/images/shoes1.png"}
          alt={"shoes"}
          width={1344}
          height={700}
          className="object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col items-center text-center bg-white py-12">
        {/* Section Title */}
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">First Look</p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">NIKE AIR MAX PULSE</h1>

        {/* Description */}
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to push you past your limits and help you go to the max.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Notify Me
          </button>
          <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Shop Air Max
          </button>
        </div>
      </div>

      {/* Best of Air Max Section */}
      <div className="bg-white px-6 py-8 relative">
        {/* Title and Shop Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Best of Air Max</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 font-bold rounded-full">Shop</button>
            <div className="flex space-x-2">
              <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center font-bold">←</button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center">→</button>
            </div>
          </div>
        </div>

        {/* Product Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Product 1 */}
          <div className="border border-white rounded-md p-4">
            <Image
              src="/images/shoe2.jpg" // Replace with actual image from the public folder
              alt="Nike Air Max Pulse"
              width={300}
              height={300}
              className="mx-auto"
            />
            <div className="mt-4 text-center">
              <h3 className="font-medium text-lg">Nike Air Max Pulse</h3>
              <p className="text-gray-500 text-sm">Women's Shoes</p>
              <p className="font-bold mt-1">₹ 13,995</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="border border-white rounded-md p-4">
            <Image
              src="/images/shoe4.jpg" // Replace with actual image from the public folder
              alt="Nike Air Max Pulse"
              width={300}
              height={300}
              className="mx-auto"
            />
            <div className="mt-4 text-center">
              <h3 className="font-medium text-lg">Nike Air Max Pulse</h3>
              <p className="text-gray-500 text-sm">Men's Shoes</p>
              <p className="font-bold mt-1">₹ 13,995</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="border border-white rounded-md p-4">
            <Image
              src="/images/shoe6.jpg" // Replace with actual image from the public folder
              alt="Nike Air Max 97 SE"
              width={300}
              height={300}
              className="mx-auto"
            />
            <div className="mt-4 text-center">
              <h3 className="font-medium text-lg">Nike Air Max 97 SE</h3>
              <p className="text-gray-500 text-sm">Men's Shoes</p>
              <p className="font-bold mt-1">₹ 16,995</p>
            </div>
          </div>
        </div>
      </div>

      {/* New Section (from Uploaded Image) */}
      <div className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/images/featured.png" // Replace with your image path
            alt="Running Man"
            width={1200}
            height={600}
            className="rounded-lg mx-auto"
          />
          <h1 className="mt-8 text-4xl font-extrabold text-gray-900">STEP INTO WHAT FEELS GOOD</h1>
          <p className="mt-4 text-lg text-gray-700">
            Cause everyone should know the feeling of running in that perfect pair!
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Find Your Shoe
          </button>
        </div>
      </div>

      {/* Gear Up Section */}
      <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Gear Up</h2>

          {/* Shop Men's and Women's with Arrows */}
          <div className="flex justify-between mb-8 flex-wrap gap-6">
            {/* Shop Men's Section */}
            <div className="flex items-center">
              <h2 className="text-xl font-bold text-gray-900">Shop Men</h2>
              <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center ml-2">←</button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center ml-2">→</button>
            </div>

            {/* Shop Women's Section */}
            <div className="flex items-center">
              <h2 className="text-xl font-bold text-gray-900">Shop Women</h2>
              <button className="p-2 bg-gray-100 rounded-full flex items-center justify-center ml-2">←</button>
              <button className="p-2 bg-gray-300 rounded-full flex items-center justify-center ml-2">→</button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
            {/* Men's and Women's Products */}
            <div className="text-center flex flex-col items-center">
              <Image src="/images/G1.png" alt="Men's Top" width={300} height={300} className="rounded-lg" />
              <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT ADV TechKnit Ultra</p>
              <p className="text-gray-500 text-sm">₹ 3,895</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <Image src="/images/G2.png" alt="Men's Shorts" width={300} height={300} className="rounded-lg" />
              <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT Challenger</p>
              <p className="text-gray-500 text-sm">₹ 2,495</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <Image src="/images/G3.png" alt="Women's Top" width={300} height={300} className="rounded-lg" />
              <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT ADV Run Division</p>
              <p className="text-gray-500 text-sm">₹ 5,295</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <Image src="/images/G4.png" alt="Women's Leggings" width={300} height={300} className="rounded-lg" />
              <p className="text-gray-700 font-medium mt-4">Nike Fast</p>
              <p className="text-gray-500 text-sm">₹ 3,795</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white py-8 w-full">
        {/* Footer Links Section */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center pl-12 pr-12">
          {/* Footer Columns */}
          <div className="text-center">
            <h3 className="font-bold mb-4">Icons</h3>
            <ul className="space-y-2 text-sm">
              <li>Air Force 1</li>
              <li>Huarache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-4">Shoes</h3>
            <ul className="space-y-2 text-sm">
              <li>All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-4">Clothing</h3>
            <ul className="space-y-2 text-sm">
              <li>All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies & Pullovers</li>
              <li>Shirts & Tops</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-4">Kids'</h3>
            <ul className="space-y-2 text-sm">
              <li>Infant & Toddler Shoes</li>
              <li>Kids' Shoes</li>
              <li>Kids' Jordan Shoes</li>
              <li>Kids' Basketball Shoes</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
