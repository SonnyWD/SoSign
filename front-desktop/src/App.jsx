import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import MainLayout from "./assets/mainLayout";
import AuthPage from "./pages/Auth";
import Signature from "./components/signature";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />

        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="accueil" element={<Accueil />} />
                <Route path="/signature" element={<Signature />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
