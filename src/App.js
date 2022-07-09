import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import AboutUs from './pages/AboutUs';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/termsandconditions" element={<TermsConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
