import { LuShieldCheck } from "react-icons/lu"; // Example icon, change accordingly
import bg1 from "../../public/assets/img/productpage/1.webp"; // Import image path
import bg2 from "../../public/assets/img/productpage/2.jpg";
import bg3 from "../../public/assets/img/productpage/1.webp";
import bg4 from "../../public/assets/img/productpage/3.webp";
import bg5 from "../../public/assets/img/productpage/4.webp";

const products = [
  {
    id: 1,
    title: 'Industrial & Automotive Finishing',
    items: [
      'KTC GOLD FAST SET AUTO FINISH',
      'VASPANAMEL SYNTHETIC ENAMEL',
      'KTC GOLD NC PAINTS',
      'KTC GOLD SPECIALITY PRIMER',
      'OTHER PRIMERS',
      'KTC GOLD AD CUM STOVING PUTTY',
    ],
    backgroundImage: bg1.src, // Use the image source path
  },
  {
    id: 2,
    title: 'Wood Finishing',
    items: [
        "VASPANAMEL BLACK / GREEN BOARD PAINTS",
        "VASPANAMEL RUBBER SEAL COMPOUND",
        "VASPA PAINT REMOVER",
        "VASPA DEEMAKNASHAK (WOOD PRESERVATIVE)"
    ],
    backgroundImage: bg2.src, // Use the image source path
  },
  {
    id: 3,
    title: 'Thinners',
    items: [
        "NC THINNERS",
        "REATRADERS",
        "MELAMYNE THINNERS",
        "PU THINNERS",
        "EPOXY THINNERS",
        "STOVING THINNERS"
    ],
    backgroundImage: bg3.src, // Use the image source path
  },
  {
    id: 4,
    title: 'Wood Finishing',
    items: [
      "VASPANAMEL BLACK / GREEN BOARD PAINTS",
        "VASPANAMEL RUBBER SEAL COMPOUND",
        "VASPA PAINT REMOVER",
        "VASPA DEEMAKNASHAK (WOOD PRESERVATIVE)"
    ],
    backgroundImage: bg4.src, // Use the image source path
  },
  {
    id: 5,
    title: 'Upcoming Product',
    items: [
        "2 PACK POLYURETHINE FINISHES",
        "2 PACK EPOXY FINISHES",
        "POLYESTER PUTTY"
    ],
    backgroundImage: bg5.src, // Use the image source path
  },
  // Add more products here as needed
];

const ProductBox = ({ product }) => {
  return (
    <div
      className="relative bg-cover bg-center mb-8"
      style={{
        backgroundImage: `url(${product.backgroundImage})`,
        height: '450px', // Increased height of the image
      }}
    >
      {/* Overlay for content */}
      <div className="absolute inset-0 flex flex-col md:flex-row justify-between items-center bg-black bg-opacity-50">
        
        {/* Left Orange Box */}
        <div className="bg-orange-500 bg-opacity-40 p-6 md:w-1/4 w-full flex flex-col justify-center md:gap-6 items-center text-center h-full md:ml-44">
          <LuShieldCheck size={40} className="mb-4 text-white" />
          <h3 className="text-2xl font-bold text-white">{product.title}</h3>
          <button className="mt-4 bg-[#1b0b41] px-4 py-2 text-white font-semibold">
            View All
          </button>
        </div>

        {/* Right List */}
        <div className="w-full md:w-2/3 text-lg md:ml-48 px-5 py-2 text-white"> {/* Increased ml-12 for moving right */}
          <ul className="list-disc list-inside font-bold text-lg md:text-3xl"> {/* Increased size of list items */}
            {product.items.map((item, index) => (
              <li key={index} className="mb-4"> {/* Increased margin-bottom for spacing */}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center font-medium text-4xl mb-12">OUR PRODUCTS</h1>
      {products.map((product) => (
        <ProductBox key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
