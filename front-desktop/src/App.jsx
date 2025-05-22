import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import MainLayout from "./assets/mainLayout";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
