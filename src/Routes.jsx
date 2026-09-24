import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';

import Home from './pages/HomePage/Home';
import Agritech from './pages/Industry/Agritech';
import Aviation from './pages/Industry/Aviation';
import BankingFintech from './pages/Industry/BankingFintech';
import CasinoGames from './pages/Industry/CasinoGames';
import ELearning from './pages/Industry/ELearning';
import EnergyUtilities from './pages/Industry/EnergyUtilities';
import Environmentalmanagement from './pages/Industry/Environmentalmanagement';
import Gaming from './pages/Industry/Gaming';
import UI from './pages/Solutions/UI';
import Firmware from './pages/Solutions/Firmware'
import Franhise from './pages/Solutions/Franhise'
import Fraud from './pages/Solutions/Fraud'
import Wearable from './pages/Solutions/Wearable'
import Telephony from './pages/Solutions/Telephony'
import Pospayment from './pages/Solutions/Pospayment'
import SAP from './pages/Solutions/SAP'
import KioSolution from './pages/Solutions/KioSolution'
import Location from './pages/Solutions/Location'
import Ticketing from './pages/Solutions/Ticketing'
import NetSuite from './pages/Solutions/NetSuite'
import Healthcare from './pages/Industry/Healthcare';

import ArtificialIntelligence from './pages/solution/ArtificialIntelligence';
import AnimationsSolutions from './pages/solution/AnimationsSolutions';
import ArVr from './pages/solution/ArVr';
import AssetTracking from './pages/solution/AssetTracking';
import AutodeskSolutions from './pages/solution/AutodeskSolutions';
import Hospitality from './pages/Industry/Hospitality';
import HCM from './pages/Industry/HCM';
import MediaEntertainment from './pages/Industry/MediaEntertainment';
import MeetingsEvents from './pages/Industry/MeetingsEvents';
import MortageLending from './pages/Industry/MortageLending';
import Nonprofit from './pages/Industry/Nonprofit';
import OilGas from './pages/Industry/OilGas';
import Retail from './pages/Industry/Retail';
import RealEstate from './pages/Industry/RealEstate';
import Sports from './pages/Industry/Sports';
import SupplyChain from './pages/Industry/SupplyChain';
import Telecommunications from './pages/Industry/Telecommunications';
import Transportation from './pages/Industry/Transportation';
import WebSaaSPlatformDevelopment from './pages/Services/WebSaaSPlatformDevelopment';
import AndroidiOSDevelopmnet from './pages/Services/AndroidiOSDevelopmnet';
import CustomSoftwareDevelopment from './pages/Services/CustomSoftwareDevelopment';
import DigitalTransformation from './pages/Services/DigitalTransformation';
import MRDevelopment from './pages/Services/VRARMRDevelopment';
import GameDevelopment from './pages/Services/GameDevelopment';
import Design from './pages/Services/UiUx';
import SoftwareQuality from './pages/Services/SoftwareQuality';
import Allservices from './pages/Services/Allservices';
import AboutPage from './pages/About/About';
import FirmwareSolutions from './pages/Solutions/Firmware';
import FraudProtection from './pages/Solutions/Fraud';
import UIDesignServices from './pages/Solutions/UI';
import WearableTechnology from './pages/Solutions/Wearable';
import KioskSolutions from './pages/Solutions/KioSolution';
import LocationBasedServices from './pages/Solutions/Location';
import POSPayment from './pages/Solutions/Pospayment';
import Gis from './pages/Solutions/Gis';
import Iot from './pages/Solutions/Iot';
import ITServices from './pages/Solutions/ITServices';
import UIPath from './pages/Solutions/UIPath';
import Salesforce from './pages/Solutions/Salesforce';
import SalesManagement from './pages/Solutions/SalesManagement'
import FieldService from './pages/Solutions/FieldService'
import Biometric from './pages/solution/Biometric';
import Blockchain from './pages/solution/Blockchain';
import BusinessIntelligence from './pages/solution/BusinessIntelligence';
import CloudComputing from './pages/solution/CloudComputing';
import CMS from './pages/solution/CMS';
import CRMSolutions from './pages/solution/CRMSolutions';
import Database from './pages/solution/Database';
import DigitalAssetManagement from './pages/solution/DigitalAssetManagement';
import DigitalMarketing from './pages/solution/DigitalMarketing';
import DigitalSignage from './pages/solution/DigitalSignage';
import DocumentManagement from './pages/solution/DocumentManagement';
import EmbeddedSoftware from './pages/solution/EmbeddedSoftware';
import ERP from './pages/solution/ERP';
import FacilitiesManagement from './pages/solution/FacilitiesManagement';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';
import Nft from './pages/Services/Nft';
import Development from './pages/Services/Development';
import ContactSection from './pages/ContactSection/ContactSection';

// New pages
import BlogListing from './pages/Blog/BlogListing';
import BlogArticle from './pages/Blog/BlogArticle';
import CaseStudiesListing from './pages/CaseStudies/CaseStudiesListing';
import CaseStudyDetail from './pages/CaseStudies/CaseStudyDetail';
import Portfolio from './pages/Portfolio/Portfolio';



const AppRoutes = () => {
  return (
    <Router>
        <ScrollToTop/>
      <Routes>
        {/* Layout wrapper */}
      
        <Route element={<Layout />}>
          {/* Child route shown inside Outlet */}
          <Route index element={<Home />} />

          {/* Industry */}
          <Route path="/agritech" element={<Agritech />} />
          <Route path="/aviation" element={<Aviation />} />
          <Route path="/bankingfinance" element={<BankingFintech />} />
          <Route path="/casinogames" element={<CasinoGames />} />
          <Route path="/elearning" element={<ELearning />} />
          <Route path="/energyutilities" element={<EnergyUtilities />} />
          <Route path="/ui" element={<UI />} />
          <Route path="/firmware" element={<Firmware />} />
          <Route path="/franhise" element={<Franhise />} />
          <Route path="/fraud" element={<Fraud />} />
          <Route path="/wearable" element={<Wearable />} />
          <Route path="/telephony" element={<Telephony />} />
          <Route path="/payment" element={<Pospayment />} />
          <Route path="/sap" element={<SAP />} />
          <Route path="/kiosolution" element={<KioSolution />} />
          <Route path="/location" element={<Location />} />
          <Route path="/ticketing" element={<Ticketing />} />
          <Route path="/net-suite" element={<NetSuite />} />
          <Route path="/environmentalmanagement" element={<Environmentalmanagement />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/artifical-intelligence" element={<ArtificialIntelligence />} />
          <Route path="/animationSolution" element={<AnimationsSolutions />} />
          <Route path="/ar-vr" element={<ArVr />} />
          <Route path="/assest-tracking" element={<AssetTracking />} />
          <Route path="/auto-desk" element={<AutodeskSolutions />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/hospitality-travel" element={<Hospitality />} />
          <Route path="/hcm" element={<HCM />} />
          <Route path="/media-entertainment" element={<MediaEntertainment />} />
          <Route path="/meeting-events" element={<MeetingsEvents />} />
          <Route path="/mortgage-lending" element={<MortageLending />} />
          <Route path="/non-profit" element={<Nonprofit />} />
          <Route path="/oil-gas" element={<OilGas />} />
          {/* <Route path="/political-campaign" element={<OilGas />} /> */}
          <Route path="/retail" element={<Retail />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
          <Route path="/telecommunication" element={<Telecommunications />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/websass" element={<WebSaaSPlatformDevelopment />} />
          <Route path="/android-ios" element={<AndroidiOSDevelopmnet />} />
          <Route path="/custom-software" element={<CustomSoftwareDevelopment />} />
          <Route path="/digitaltransform" element={<DigitalTransformation />} />
          {/* <Route path="/developteamaug" element={<DigitalTransformation />} /> */}
          <Route path="/vrdeployement" element={<MRDevelopment />} />
          <Route path="/gamedeployement" element={<GameDevelopment />} />
          <Route path="/ui-uxDesign" element={<Design />} />
          <Route path="/software-quality" element={<SoftwareQuality />} />
          <Route path="/Recruit-Training" element={<Allservices />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/firmware" element={<FirmwareSolutions />} />
          <Route path="/franchise" element={<Franhise />} />
          
          <Route path="/fraud" element={<FraudProtection />} />
          <Route path="/uisolution" element={<UIDesignServices />} />
          <Route path="/wearable" element={<WearableTechnology />} />
          <Route path="/kiosk" element={<KioskSolutions />} />
          <Route path="/location" element={<LocationBasedServices />} />
          <Route path="/pospayment" element={<POSPayment />} />
          <Route path="/sales-management" element={<SalesManagement />} />
          <Route path="/gis" element={<Gis />} />
          <Route path="/iot" element={<Iot />} />
          <Route path="/itservice" element={<ITServices />} />
          <Route path="/uipath" element={<UIPath />} />
          <Route path="/salesforce" element={<Salesforce />} />
          <Route path="/fieldservice" element={<FieldService />} />
          <Route path="/sales-management" element={<SalesManagement/>} />
          {/* <Route path="/sap" element={<LocationBasedServices />} /> */}
          {/* <Route path="/telephony" element={<LocationBasedServices />} /> */}
          {/* <Route path="/ticket" element={<LocationBasedServices />} /> */}
          <Route path="/biometric" element={<Biometric />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/business-intelligence" element={<BusinessIntelligence />} />
          <Route path="/cloud-computing" element={<CloudComputing />} />
          <Route path="/cms" element={<CMS />} />
          <Route path="/cms-solution" element={<CRMSolutions />} />
          <Route path="/database" element={<Database />} />
          <Route path="/digital-assests" element={<DigitalAssetManagement />} />
          <Route path="/digital-marketting" element={<DigitalMarketing />} />
          <Route path="/digital-signage" element={<DigitalSignage />} />
          <Route path="/document-management" element={<DocumentManagement />} />
          <Route path="/embedded-software" element={<EmbeddedSoftware/>} />
          <Route path="/erp" element={<ERP />} />
          <Route path="/facliliate-management" element={<FacilitiesManagement/>} />
          <Route path="/nft" element={<Nft/>} />
          <Route path="/appdevelopment" element={<Development/>} />
          <Route path="/contactsection" element={<ContactSection/>} />

          {/* New Routes */}
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/case-studies" element={<CaseStudiesListing />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="*" element={<NotFound />} />

        

        </Route>

      </Routes>

    </Router>
  );
};

export default AppRoutes;