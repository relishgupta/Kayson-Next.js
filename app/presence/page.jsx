import { MdLocationOn, MdPhone } from 'react-icons/md'; // Import Material Icons
import Image from 'next/image';
import map from "../../public/assets/img/map.png";

export default function Branches() {
  return (
    <div className="flex flex-col items-center p-5">
      {/* Map Image */}
      <div className="mb-10 w-full">
        <Image src={map} alt="Map Image" layout="responsive" width={1200} height={500} className="w-full h-auto object-cover" />
      </div>

      {/* Branches Information */}
      <div className="text-center w-full">
        <h1 className="text-4xl font-bold mb-10">Branches Across India</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left px-4 md:px-20 lg:px-40">
          
          {/* Branch 1 */}
          <div className="p-6">
            <h2 className="text-orange-500 font-bold text-2xl md:text-3xl mb-2">JAMMU & KASHMIR</h2>
            <p className="flex items-start">
              <MdLocationOn className="text-blue-900 mr-2 h-6 w-6 md:h-8 md:w-8" />
              <span>Sector-14 (Nr.), Kanal Road, Jammu Tawi (J&K), PIN -180004</span>
            </p>
            <p className="flex items-center mt-2">
              <MdPhone className="text-blue-900 mr-2 h-6 w-6 md:h-6 md:w-6" />
              +91-8360076476
            </p>
          </div>

          {/* Branch 2 */}
          <div className="p-6">
            <h2 className="text-orange-500 font-bold text-2xl md:text-3xl mb-2">CHANDIGARH</h2>
            <p className="flex items-start">
              <MdLocationOn className="text-blue-900 mr-2 h-9 w-9 md:h-12 md:w-12" />
              <span>Booth No.120, Motor Market & Commercial Complex, Manimajra, Chandigarh, PIN -160101</span>
            </p>
            <p className="flex items-center mt-2">
              <MdPhone className="text-blue-900 mr-2 h-6 w-6 md:h-6 md:w-6" />
              +91-9876600476
            </p>
          </div>

          {/* Branch 3 */}
          <div className="p-6">
            <h2 className="text-orange-500 font-bold text-2xl md:text-3xl mb-2">HARYANA</h2>
            <p className="flex items-start">
              <MdLocationOn className="text-blue-900 mr-2 h-8 w-8 md:h-12 md:w-12" />
              <span>Opposite Sainik School, P.O. Kunjpura, Village Newal, Karnal, Haryana, PIN -132001</span>
            </p>
            <p className="flex items-center mt-2">
              <MdPhone className="text-blue-900 mr-2 h-6 w-6 md:h-6 md:w-6" />
              +91-9779200476
            </p>
          </div>

          {/* Branch 4 */}
          <div className="p-6">
            <h2 className="text-orange-500 font-bold text-2xl md:text-3xl mb-2">RAJASTHAN</h2>
            <p className="flex items-start">
              <MdLocationOn className="text-blue-900 mr-2 h-10 w-10 md:h-12 md:w-12" />
              <span>Plot No. 112, Taruchhaya Nagar First, Vill. Udaipuria, Teh. Amer, Sikar Road, Jaipur, Rajasthan, PIN -302028</span>
            </p>
            <p className="flex items-center mt-2">
              <MdPhone className="text-blue-900 mr-2 h-6 w-6 md:h-6 md:w-6" />
              +91-9501900476
            </p>
          </div>

          {/* Branch 5 */}
          <div className="p-6">
            <h2 className="text-orange-500 font-bold text-2xl md:text-3xl mb-2">UTTAR PRADESH</h2>
            <p className="flex items-start">
              <MdLocationOn className="text-blue-900 mr-2 h-12 w-12 md:h-12 md:w-12" />
              <span>Block F, 571/pn-571-572, Kanpur Road, Sigma Classes, Hindanagar Colony, Lucknow, Uttar Pradesh, PIN -226001</span>
            </p>
            <p className="flex items-center mt-2">
              <MdPhone className="text-blue-900 mr-2 h-6 w-6 md:h-6 md:w-6" />
              +91-9501600476
            </p>
          </div>

          {/* Branch 6 */}
          <div className="p-6">
            <h2 className="text-orange-500 font-bold text-2xl md:text-3xl mb-2">CHHATTISGARH & ODISHA</h2>
            <p className="flex items-start">
              <MdLocationOn className="text-blue-900 mr-2 h-10 w-10 md:h-12 md:w-12" />
              <span>Beside Over Bridge, Near Ravishankar University, AMANAKA, Raipur, Chhattisgarh, PIN -492001</span>
            </p>
            <p className="flex items-center mt-2">
              <MdPhone className="text-blue-900 mr-2 h-6 w-6 md:h-6 md:w-6" />
              +91-9876320476
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
