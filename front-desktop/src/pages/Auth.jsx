import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { login, register } from '../services/auth.api';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '', prenom: '', nom: '', role: 'STUDENT' });
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const data = await login(form.email, form.password);

        navigate('/accueil');
      } else {
        const registerData = {
          email: form.email,
          password: form.password,
          prenom: form.prenom,
          nom: form.nom,
          role: form.role,
        };
        await register(registerData);
        setMessage('Inscription réussie, connectez-vous !');
        setIsLogin(true);
        setForm({ email: '', password: '', prenom: '', nom: '', role: 'STUDENT' });
      }
    } catch (err) {
      setMessage(err.response?.data?.message || 'Erreur réseau');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-5 bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold mb-6">{isLogin ? 'Connexion' : "Inscription"}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                value={form.prenom}
                onChange={handleChange}
                required
                className="w-full mb-3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                value={form.nom}
                onChange={handleChange}
                required
                className="w-full mb-3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                required
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="STUDENT">Élève</option>
                <option value="TEACHER">Intervenant</option>
              </select>
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mb-3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full mb-5 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors"
          >
            {isLogin ? 'Se connecter' : "S'inscrire"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-red-600">{message}</p>
        )}

        <p className="mt-6 text-center">
          {isLogin ? 'Pas encore de compte ? ' : 'Déjà inscrit ? '}
          <button
            onClick={() => {
              setMessage(null);
              setIsLogin(!isLogin);
              setForm({ email: '', password: '', prenom: '', nom: '', role: 'STUDENT' });
            }}
            className="text-blue-600 font-semibold hover:underline focus:outline-none"
          >
            {isLogin ? "S'inscrire" : 'Se connecter'}
          </button>
        </p>
      </div>
    </div>
  );
}
