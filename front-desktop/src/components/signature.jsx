import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { fetchPresences } from "../services/auth.api";


export default function Signature() {
  const qrValue = "http://localhost:3000/accueil";

  const [etudiants, setEtudiants] = useState([]);

  const loadPresences = async () => {
    try {
      const data = await fetchPresences();
      setEtudiants(data);
    } catch (error) {
      console.error("Erreur récupération présences", error);
    }
  };

  useEffect(() => {
    loadPresences();
    const interval = setInterval(loadPresences, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Signature de présence</h1>
      <QRCode value={qrValue} size={256} />

      <h2 className="mt-8 text-lg font-semibold">Étudiants ayant signé :</h2>
      <ul className="mt-2 space-y-1">
        {etudiants.map(({ firstname, lastname }, idx) => (
          <li key={idx} className="text-gray-700">
            {firstname} {lastname}
          </li>
        ))}
      </ul>
    </div>
  );
}
