import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

const servicesItems = [
  { label: "NFT Blockchain & Development", link: "/nft" },
  { label: "Web SaaS Platform", link: "/websass" },
  { label: "Android & IOS", link: "/android-ios" },
  { label: "Custom Software", link: "/custom-software" },
  { label: "Digital Transformation", link: "/digitaltransform" },
  { label: "VR/MR/AR Development", link: "/vrdeployement" },
  { label: "Game Development", link: "/gamedeployement" },
  { label: "UI/UX Design", link: "/ui-uxDesign" },
  { label: "Software Quality Assurance", link: "/software-quality" },
  { label: "Recruiting And Academy Training", link: "/Recruit-Training" },
];

const industryItems = [
  { label: "Agritech", link: "/agritech" },
  { label: "Aviation", link: "/aviation" },
  { label: "Banking Fintech", link: "/bankingfinance" },
  { label: "CasinoGame", link: "/casinogames" },
  { label: "E-Learning", link: "/elearning" },
  { label: "Energy Utilities", link: "/energyutilities" },
  { label: "Environmental Management", link: "/environmentalmanagement" },
  { label: "Gaming", link: "/gaming" },
  { label: "HealthCare", link: "/healthcare" },
  { label: "Hospitality & Travel", link: "/hospitality-travel" },
  { label: "Human Capital Management", link: "/hcm" },
  { label: "Media and Entertainment", link: "/media-entertainment" },
  { label: "Meeting & Events", link: "/meeting-events" },
  { label: "Mortgage & Lending", link: "/mortgage-lending" },
  { label: "Non-Profit", link: "/non-profit" },
  { label: "Oil & Gas", link: "/oil-gas" },
  { label: "Retail", link: "/retail" },
  { label: "Real Estate", link: "/real-estate" },
  { label: "Sports", link: "/sports" },
  { label: "Supply Chain", link: "/supply-chain" },
  { label: "Telecommunication", link: "/telecommunication" },
  { label: "Transportation", link: "/transportation" },
];

const solutionsItems = [
  { label: "Artificial Intelligence", link: "/artifical-intelligence" },
  { label: "Animation Solution", link: "/animationSolution" },
  { label: "AR/VR", link: "/ar-vr" },
  { label: "Assets Tracking", link: "/assest-tracking" },
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
  { label: "Kiosk Solution", link: "/kiosk" },
  { label: "Location", link: "/location" },
  { label: "Ticketing", link: "/ticketing" },
  { label: "Sales Management", link: "/sales-management" },
  { label: "Netsuite", link: "/net-suite" },
  { label: "GIS", link: "/gis" },
  { label: "IoT & M2M", link: "/iot" },
  { label: "IT Service", link: "/itservice" },
  { label: "UiPath", link: "/uipath" },
  { label: "Salesforce", link: "/salesforce" },
  { label: "Field Service", link: "/fieldservice" },
  { label: "Business Intelligence", link: "/business-intelligence" },
  { label: "CMS", link: "/cms" },
  { label: "CRM Solutions", link: "/cms-solution" },
  { label: "Database", link: "/database" },
  { label: "Digital Asset Management", link: "/digital-assests" },
  { label: "Digital Marketing", link: "/digital-marketting" },
  { label: "Digital Signage", link: "/digital-signage" },
  { label: "Document Management", link: "/document-management" },
  { label: "Embedded Software", link: "/embedded-software" },
  { label: "ERP", link: "/erp" },
  { label: "Facilities Management", link: "/facliliate-management" },
];

const navConfig = [
  { key: "services", label: "Services", type: "dropdown", items: servicesItems },
  { key: "about", label: "About", type: "link", link: "/about-us" },
  { key: "industry", label: "Industry", type: "dropdown", items: industryItems },
  { key: "solutions", label: "Solutions", type: "dropdown", items: solutionsItems },
  { key: "portfolio", label: "Portfolio", type: "link", link: "/portfolio", extraClass: "ml-2" },
  { key: "case-studies", label: "Case Studies", type: "link", link: "/case-studies", extraClass: "ml-2" },
  { key: "blog", label: "Blog", type: "link", link: "/blog", extraClass: "ml-2" },
];

const navLinkClass = ({ isActive }) =>
  `px-2.5 py-2 rounded-lg text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
    isActive
      ? "text-blue-600 bg-blue-50"
      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
  }`;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);
  const [panelLeft, setPanelLeft] = useState({});
  const lastScrollY = useRef(0);
  const triggerRefs = useRef({});
  const panelRefs = useRef({});
  const location = useLocation();

  const positionPanel = (key) => {
    const trigger = triggerRefs.current[key];
    const panel = panelRefs.current[key];
    if (!trigger || !panel) return;
    const wrapper = trigger.parentElement;
    if (!wrapper) return;
    const gutter = 16;
    const triggerRect = trigger.getBoundingClientRect();
    const wrapRect = wrapper.getBoundingClientRect();
    const panelWidth = panel.offsetWidth;
    let left = triggerRect.left;
    const maxLeft = window.innerWidth - panelWidth - gutter;
    if (left > maxLeft) left = maxLeft;
    if (left < gutter) left = gutter;
    const relLeft = left - wrapRect.left;
    setPanelLeft((prev) =>
      prev[key] === relLeft ? prev : { ...prev, [key]: relLeft }
    );
  };

  const openDropdown = (key) => {
    positionPanel(key);
    setOpenDesktopDropdown(key);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDesktopDropdown(null);
    setOpenMobileDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    if (!openDesktopDropdown) return;
    positionPanel(openDesktopDropdown);
  }, [openDesktopDropdown]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const current = window.scrollY;
        const nextShow = !(current > lastScrollY.current && current > 80);
        const nextScrolled = current > 20;
        setShowNavbar((prev) => (prev === nextShow ? prev : nextShow));
        setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
        lastScrollY.current = current;
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpenDesktopDropdown(null);
        setMobileMenuOpen(false);
        setOpenMobileDropdown(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setOpenMobileDropdown(null);
      }
      if (openDesktopDropdown) {
        positionPanel(openDesktopDropdown);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [openDesktopDropdown]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (key) => {
    setOpenMobileDropdown((prev) => (prev === key ? null : key));
  };

  const isDropdownActive = (items) =>
    items.some(
      (i) => location.pathname === i.link || location.pathname.startsWith(`${i.link}/`)
    );

  const handleDropdownBlur = (e, key) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpenDesktopDropdown((prev) => (prev === key ? null : prev));
    }
  };

  const handleDropdownMouseLeave = (e, key) => {
    if (!e.currentTarget.contains(document.activeElement)) {
      setOpenDesktopDropdown((prev) => (prev === key ? null : prev));
    }
  };

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showNavbar || mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link
            to="/"
            className="flex-shrink-0 flex items-center w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            <img
              src="/ptek-logo.png"
              alt="PTEK"
              className="h-7 lg:h-8 w-auto max-w-[120px] object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-stretch gap-0.5">
            {navConfig.map((item) =>
              item.type === "dropdown" ? (
                <div
                  key={item.key}
                  className="relative flex items-stretch"
                  onMouseEnter={() => openDropdown(item.key)}
                  onMouseLeave={(e) => handleDropdownMouseLeave(e, item.key)}
                  onFocus={() => openDropdown(item.key)}
                  onBlur={(e) => handleDropdownBlur(e, item.key)}
                >
                  <button
                    type="button"
                    ref={(el) => {
                      triggerRefs.current[item.key] = el;
                    }}
                    aria-expanded={openDesktopDropdown === item.key}
                    aria-haspopup="true"
                    onClick={() =>
                      setOpenDesktopDropdown((prev) =>
                        prev === item.key ? null : item.key
                      )
                    }
                    className={`flex items-center gap-1 px-2.5 py-2 my-auto rounded-lg text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      openDesktopDropdown === item.key || isDropdownActive(item.items)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        openDesktopDropdown === item.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    ref={(el) => {
                      panelRefs.current[item.key] = el;
                    }}
                    role="menu"
                    aria-hidden={openDesktopDropdown !== item.key}
                    style={
                      panelLeft[item.key] !== undefined
                        ? { left: `${panelLeft[item.key]}px` }
                        : undefined
                    }
                    className={`absolute left-0 top-full mt-2 w-[600px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 z-[100] overflow-hidden transition-all duration-200 ${
                      openDesktopDropdown === item.key
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="max-h-[70vh] overflow-y-auto overscroll-contain dropdown-scroll p-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.link}
                            to={sub.link}
                            role="menuitem"
                            className="flex items-start gap-2 min-h-[48px] px-3 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:bg-blue-50 focus-visible:ring-2 focus-visible:ring-blue-500"
                          >
                            <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span className="leading-5 break-words">{sub.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.key}
                  to={item.link}
                  className={(state) =>
                    `${navLinkClass(state)} my-auto ${item.extraClass || ""}`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contactsection"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Get Started
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain">
            {navConfig.map((item) =>
              item.type === "dropdown" ? (
                <div key={item.key}>
                  <button
                    type="button"
                    aria-expanded={openMobileDropdown === item.key}
                    onClick={() => toggleMobileDropdown(item.key)}
                    className="w-full flex justify-between items-center text-gray-700 font-medium text-sm py-3 px-3 rounded-lg hover:bg-gray-50 transition min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openMobileDropdown === item.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMobileDropdown === item.key && (
                    <div className="pl-3 border-l-2 border-blue-100 space-y-1 pb-2">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.link}
                          to={sub.link}
                          onClick={closeMobileMenu}
                          className="flex items-start gap-2 text-gray-600 text-sm py-2.5 px-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition min-h-[40px]"
                        >
                          <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span className="leading-5 break-words">{sub.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.key}
                  to={item.link}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `block text-sm font-medium py-3 px-3 rounded-lg transition min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
            <div className="pt-3 border-t border-gray-100">
              <Link
                to="/contactsection"
                onClick={closeMobileMenu}
                className="block w-full text-center bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
