import { FaDumbbell, FaPersonRunning } from "react-icons/fa6";
import { GiTennisCourt, GiCctvCamera } from "react-icons/gi";
import { TbPlayFootball } from "react-icons/tb";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { LuParkingSquare } from "react-icons/lu";
import { PiChalkboard } from "react-icons/pi";
import logo from "../Assets/Images/Lodha Magnus.png";
import BannerImage from "../Assets/Images/Banner.png";
import FloorPlan1 from "../Assets/Images/Floorplan 3BHK.png";
import FloorPlan2 from "../Assets/Images/Floorplan 4BHK.png";
import Gallery1 from "../Assets/Images/Gallery 1.png";
import Gallery2 from "../Assets/Images/Gallery 2.png";
import Gallery3 from "../Assets/Images/Gallery 3.png";
import Virtual from "../Assets/Images/lodha.gif";

import map from "../Assets/Images/Map.png";

const headerData = {
  propertylogo: logo,
  logoalt: "logo",
  pageUrl: "https://luxuryandme.in/lodha-magnus/",
};
const formField = {
  GtmId: "GTM-MCG9NVT2",
  gtmProjectName: "LodhaMagnus",
  EmailProjectName: "Lodha Magnus",
  allMails: [
    "markctkind@gmail.com",
    "dhinesh@markanthony.co.in",
    "santhoshrajan@markanthony.co.in",
    "rushikeshshinde@markanthony.co.in",
  ],

};
const bannerData = {
  bgimage: BannerImage,
  title: "New Launch",
  projectName: "Lodha Magnus ",
  location: "At Hinjewadi Phase 1",
  developer: "",
  detailsone: "Land Parcel",
  landParcel: "5.5 acres",
  detailstwo: "Floors ",
  totalUnits: "36 floors",
  detailsthree: "Total Plots ",
  typology: "4 Plots",
  highlights: [
    "World Class Amenities!",
    "5-Tier Security System",
    "Premium Italian Marble flooring",
  ],
  investmentOpportunity: "High value appreciation !!",
  apartmentStarts: "Premium 3 & 4 BHK's ",
  startPrice: "1.95 Cr* ",
  reasonsToConsider: [
    "3 Mins - From MNCs",
    "3 Mins - From Educational Institutes",
    "5 Mins - From Upcoming Metro station",
  ],
  whatsappLink: `https://api.whatsapp.com/send?phone=+918999154744&text=Hi, I am interested in ${formField.EmailProjectName}. Can you share me all details`,
  phoneNumber: "+918999154744",
  phoneLink: "tel:89991 54744",
};

const propertyData = {
  heading: "Lodha Magnus ",
  details: {
    building: {
      title: "Building",
      description: "Premium Apartments",
    },
    location: {
      title: "Location",
      description: "At Hinjewadi Phase 1",
    },
    bedrooms: {
      title: "Bedrooms",
      description: "3 & 4 BHK's",
    },
    possession: {
      title: "Possession",
      description: "June 2027",
    },
    dimension: {
      title: "Dimension",
      description: "1388 Sqft. to 3800 Sqft.",
    },
    price: {
      title: "Price",
      description: "₹1.95 Cr*",
    },
  },
};

const floorPlans = [
  // {
  //   type: "Studio",
  //   area: "420 - 430 Sqft",
  //   price: "Starting ₹ 37.4 Lacs*",
  //   image: FloorPlan0,
  // },
  {
    type: "3BHK Apartment",
    area: "1388 Sqft",
    price: "Starting ₹1.95 Cr*",
    image: FloorPlan1,
  },
  {
    type: "4BHK Apartment",
    area: "1942 Sqft",
    price: "Starting ₹ 2.80 Cr*",
    image: FloorPlan2,
  },

  // {

  //   type: "3BHK Grand",
  //   area: "1730-1815 Sqft",
  //   price: "Starting ₹ 1.7 Cr*",
  //   image: FloorPlan4,
  // },
];

const highlightsData = [
  [
    "Entrance Lobby",
    "2 Private Decks ",
    "Visitor Parking",
    "Landscaping & Tree Planting",
    "5 Tier Security System",
    "Sky Terrace & Bar",
  ],
  [
    "Fire Fighting System",
    "24X7 Water Supply",
    "Closed Car Parking",
    "Jogging Track",
    "Gated Community",
    "Garden View From Bedrooms",
  ],
  [
    "Indoor Games",
    "Rain Water Harvesting",
    "Sewage Treatment Plant",
    "Power Backup",
    "Luxury Club House",
    "Maximum Natural Light",
    "2 Private Gardens",
  ],
];

const amenitiesData = [
  { icon: <FaDumbbell className="text-5xl" />, name: "Gym" },
  { icon: <FaPersonRunning className="text-5xl" />, name: "Jogging Track" },
  { icon: <GiTennisCourt className="text-5xl" />, name: "Multipurpose Court" },
  { icon: <TbPlayFootball className="text-5xl" />, name: "Kidsplay Area" },
  { icon: <PiChalkboard className="text-5xl" />, name: "Multipurpose Hall" },
  { icon: <LuParkingSquare className="text-5xl" />, name: "Parking" },
  { icon: <GiCctvCamera className="text-5xl" />, name: "CCTV Security" },
  {
    icon: <LiaSwimmingPoolSolid className="text-5xl" />,
    name: "Swimming Pool",
  },
];

const galleryData = [
  { src: Gallery1, alt: "gallery-photo" },
  { src: Gallery2, alt: "gallery-photo" },
  { src: Gallery3, alt: "gallery-photo" },
];

const locationData = {
  virtualTour: {
    heading: "Request For Virtual Tour",
    imageSrc: Virtual,
  },
  locationMap: {
    heading: "Location Map",
    imageSrc: map,
  },
  nearbyLocations: [
    "3 Mins - From Educational Institutes",
    "5 Mins - From Upcoming Metro station",
    "20 Mins - From Mumbai-Pune expressway",
    "10 Mins - From Mumbai-Bangalore Highway",
  ],
};

const aboutData = {
  title: "About",
  content: [
    {
      heading: "Lodha Magnus - Hinjewadi Phase 1",
      paragraph:
        "Lodha Magnus, an upcoming project by Lodha Group at Hinjewadi Phase 1, provides seamless connectivity to key landmarks and major business centers. This luxury project is consists of 3 & 4 BHK with fully air-conditioned apartments ranges from 1388 to 3800 Sq-ft. This whole project is spread over 5.5 acres and each home is crafted to maximize space, light, and comfort Enjoy peace of mind with a top-notch 5-tier security system and also elevate your living experience with premium Italian marble flooring.",
    },
  ],
};

const footerData = {
  agentrera: " Agent RERA No: PRM/KA/RERA/1251/446/AG/181214/001192",
  projectrera: "Project RERA – Comming Soon",
  disclaimer:
    "The information provided on this website is intended only for informational purposes and should not be construed as an offer of services. This website is managed by a RERA authorised real estate agent namely Mark Anthony Fegradoe (M & A Ventures). The pricing information presented on this website is subject to alteration without advance notification, and property availability cannot be guaranteed. The images showcased on this website are for representational purposes only and may not exactly reflect the actual properties. We may share your data with Real Estate Regulatory Authority (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us. All rights reserved. By accessing this website, the viewer confirms that the information including brochures and marketing collaterals on this website are solely for informational purposes only and the viewer has not relied on this information for making any booking/purchase in any project of the company. The information, content and design on this website are protected by copyright and other intellectual property rights. Reproduction of the content or Any unauthorised use may violate applicable laws. For up-to-date information regarding the services, availability, pricing, and any other details, it is recommended to contact us. Thank you for visiting our website.",
};

export {
  headerData,
  formField,
  bannerData,
  propertyData,
  floorPlans,
  highlightsData,
  amenitiesData,
  galleryData,
  locationData,
  aboutData,
  footerData,
};
