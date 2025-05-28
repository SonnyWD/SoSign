import axios from 'axios';

const API_URL = 'http://localhost:3000/auth'; 

export async function login(email, password) {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
}

export async function register({ prenom, nom, email, password, role }) {
  const response = await axios.post(`${API_URL}/register`, { prenom, nom, email, password, role });
  return response.data;
}

export async function fetchPresences() {
  const response = await fetch(`${API_URL}/presences`);
  if (!response.ok) throw new Error("Erreur API fetchPresences");
  return await response.json();
}

export async function signPresence({ firstname, lastname }) {
  const response = await fetch(`${API_URL}/presence`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstname, lastname }),
  });
  if (!response.ok) throw new Error("Erreur API signPresence");
  return await response.json();
}