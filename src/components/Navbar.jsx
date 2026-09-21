import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X, ChevronUp } from "lucide-react";

const DropdownMenu = ({ label, items }) => {
  const isScrollable = items.length > 23;

  return (
    <div className="relative group">
      <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium text-base transition duration-200">
        {label}
        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
      </button>

      {/* Dropdown Container */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-white shadow-xl rounded-xl z-50 
  opacity-0 group-hover:opacity-100 group-hover:translate-y-0 
  translate-y-3 scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out 
  invisible group-hover:visible w-[60vw] max-w-3xl
  max-h-[100vh] overflow-y-auto"  // <-- ADD THIS LINE
      >

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-5 py-6">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex items-center gap-2 px-1 py-2 bg-gray-50 hover:bg-gradient-to-r from-blue-100 to-blue-50 hover:shadow-md rounded-lg text-sm text-gray-800 hover:text-blue-700 transition-all duration-200"
            >
              <ChevronRight className="h-4 w-4 text-blue-500" />
              <span className="font-sm">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const toggleMobileDropdown = (label) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
  };

  const serviceItems = [
    { label: "NFT Blockchain & Developement", link: "/nft" },
    { label: "WebSaas Platform", link: "/websass" },
    { label: "Android & IOS", link: "/android-ios" },
    { label: "Custom Software", link: "/custom-software" },
    { label: "Digital Transformation", link: "/digitaltransform" },
    // { label: "Developmennt Team Augmentation", link: "/appdevelopment" },
    { label: "VR/MR/AR Development", link: "/vrdeployement" },
    { label: "Game Development", link: "/gamedeployement" },
    { label: "UI/UX Design", link: "/ui-uxDesign" },
    { label: "Software Quality Assurance", link: "/software-quality" },
    { label: "Recuriting And Academy Training", link: "/Recruit-Training" },
  ];


  const aboutItems = [
    { label: "About", link: "/about-us" },

  ];

  const industryItems = [
    { label: "Agritech", link: "/agritech" },
    { label: "Aviation", link: "/aviation" },
    { label: "Banking Fintech", link: "/bankingfinance" },
    { label: "CasinoGame", link: "/casinogames" },
    { label: "E-Learning", link: "/elearning" },
    { label: "Energy Utilities", link: "/energyutilities" },
    { label: "Environmental Management", link: "/environmentalmanagement" },
    { label: "Gaming", link: "gaming" },
    { label: "HealthCare", link: "/healthcare" },
    { label: "Hospitality & Travel", link: "/hospitality-travel" },
    { label: "Human Capital Management", link: "/hcm" },
    { label: "Media and Entertainment", link: "/media-entertainment" },
    { label: "Metting & Events", link: "/meeting-events" },
    { label: "Mortgage & Lending", link: "/mortgage-lending" },
    { label: "Non-Profit", link: "/non-profit" },
    { label: "Oil & Gas", link: "/oil-gas" },
    // { label: "Political Campaigns", link: "/banking-fintech" },
    { label: "Retail", link: "/retail" },
    { label: "RealEstate", link: "/real-estate" },
    { label: "Sports", link: "/sports" },
    { label: "Supply Chain", link: "/supply-chain" },
    { label: "Telecommunication", link: "/telecommunication" },
    { label: "Transportation", link: "/transportation" },


  ];

  const solutionItems = [
    { label: "Artificial Intelligence", link: "/artifical-intelligence" },
    { label: "Animation Solution", link: "/animationSolution" },
    { label: "Ar/VR", link: "/ar-vr" },
    { label: "Assests Tracking", link: "/assest-tracking" },
    { label: "AutoDesk Solution", link: "/auto-desk" },
    { label: "Cloud Computing", link: "/cloud-computing" },
    { label: "Biometric", link: "/biometric" },
    { label: "Blockchain", link: "/blockchain" },
    { label: "UI/UX", link: "/uisolution" },
    { label: "Firmware Solutions", link: "/firmware" },
    { label: "Franchise Management", link: "/franchise" },
    { label: "Fraud Protection", link: "/fraud" },
    { label: "Wearable Technology", link: "/wearable" },
    { label: "Telephony", link: "/telephony" },
    { label: "POS Payment", link: "/pospayment" },
    { label: "SAP", link: "/sap" },
    { label: "Kiosolution", link: "/kiosk" },
    { label: "Location", link: "/location" },
    { label: "Ticketing ", link: "/ticketing" },
    { label: "SalesManagement ", link: "/sales-management" },
    { label: "Netsuite", link: "/net-suite" },
    { label: "GIS", link: "/gis" },
    { label: "IoT & M2M", link: "/iot" },
    { label: "IT Service", link: "/itservice" },
    { label: "UiPath", link: "/uipath" },
    { label: "Salesforce", link: "/salesforce" },
    { label: "FieldService", link: "/fieldservice" },
    { label: "Bussiness Intelligence", link: "/business-intelligence" },
    { label: "CMS", link: "/cms" },
    { label: "CRM Solutions", link: "/cms-solution" },
    { label: "Database", link: "/database" },
    { label: "Digital Assest Management", link: "/digital-assests" },
    { label: "Digital Marketting", link: "/digital-marketting" },
    { label: "Digital Signup", link: "/digital-signage" },
    { label: "Document Management", link: "/document-management" },
    { label: "Embedded Software", link: "/embedded-software" },
    { label: "ERP", link: "/erp" },
    { label: "Facilities Management", link: "/facliliate-management" },

  ];

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 80) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const mainLinks = [
    { label: "Portfolio", link: "/portfolio" },
    { label: "Case Studies", link: "/case-studies" },
    { label: "Blog", link: "/blog" },
  ];

  const mobileMenus = [
    { label: "Services", items: serviceItems },
    { label: "About", items: aboutItems },
    { label: "Industry", items: industryItems },
    { label: "Solutions", items: solutionItems },
  ];

  return (
    <nav
      className={`bg-white shadow-md fixed top-0 left-0 right-1 z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/">
              <img
                src="/ptek-logo.png"
                alt="MyLogo"
                className="h-12 w-auto max-w-[160px]"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 cursor-pointer items-center">
            <DropdownMenu label="Services" items={serviceItems} />
            <Link
              to="/about-us"
              className="text-gray-700 hover:text-blue-600 font-medium text-base transition duration-200"
            >
              About
            </Link>

            <DropdownMenu label="Industry" items={industryItems} />
            <DropdownMenu label="Solutions" items={solutionItems} />
            <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium text-base transition duration-200">
              Portfolio
            </Link>
            <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 font-medium text-base transition duration-200">
              Case Studies
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium text-base transition duration-200">
              Blog
            </Link>

            <select className="bg-white border border-gray-300 text-gray-700 rounded-md px-2 py-1 text-sm">
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="de">DE</option>
              <option value="hi">HI</option>
            </select>

         <Link to="/contactsection">
  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
    Get Started
  </button>
</Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 space-y-2 max-h-[85vh] overflow-y-auto">
          {mainLinks.map((item, i) => (
            <Link
              key={`main-${i}`}
              to={item.link}
              className="block text-gray-700 font-semibold text-left py-2 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {mobileMenus.map((menu, i) => (
            <div key={i}>
              <button
                className="w-full flex justify-between items-center text-gray-700 font-semibold text-left py-2"
                onClick={() => toggleMobileDropdown(menu.label)}
              >
                {menu.label}
                {openMobileDropdown === menu.label ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {openMobileDropdown === menu.label && (
                <div className="ml-4 mt-1 space-y-1">
                  {menu.items.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.link}
                      className="block text-gray-600 text-sm hover:text-blue-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <select className="w-full border mt-2 border-gray-300 text-gray-700 rounded-md px-2 py-1 text-sm">
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="de">DE</option>
            <option value="hi">HI</option>
          </select>

          <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
