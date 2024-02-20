import React from 'react';
import './App.css'; 

// Composant pour le menu déroulant
const DropdownMenu = () => {
  return (
    <div className="dropdown-menu absolute hidden h-auto flex flex-col bg-white shadow-md">
      <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-100">Link 1</a>
      <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-100">Link 2</a>
      <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-100">Link 3</a>
    </div>
  );
};

// Composant pour la barre supérieure
const TopBar = () => {
  return (
    <div className="w-full p-4 bg-white flex justify-between items-center shadow-md">
      <button className="text-3xl text-gray-700 focus:outline-none">
        <i className="fas fa-bars"></i>
      </button>
      <span className="text-xl font-semibold">Ressource Relationnel</span>
      <img src="https://placehold.co/50x50" alt="Profil de l'utilisateur" className="rounded-full" />
      <DropdownMenu />
    </div>
  );
};

// Composant pour le formulaire de connexion
const LoginForm = () => {
  return (
    <div className="bg-white p-10 rounded-lg shadow-md mt-10">
      <h1 className="text-xl font-semibold mb-4">Connexion</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Nom" className="w-full px-4 py-2 border rounded-md" />
        <input type="text" placeholder="Prenom" className="w-full px-4 py-2 border rounded-md" />
        <input type="text" placeholder="Age" className="w-full px-4 py-2 border rounded-md" />
        <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Connexion</button>
        <button type="button" className="w-full px-4 py-2 bg-blue-300 text-white rounded-md hover:bg-blue-400">Inscription</button>
      </form>
    </div>
  );
};

// Composant pour les icônes de réseaux sociaux
const SocialIcons = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 flex justify-center space-x-4 bg-green-200">
      <a href="#" className="text-blue-800"><i className="fab fa-instagram fa-2x"></i></a>
      <a href="#" className="text-blue-800"><i className="fab fa-facebook fa-2x"></i></a>
      <a href="#" className="text-blue-800"><i className="fab fa-linkedin fa-2x"></i></a>
    </div>
  );
};

// Composant principal App
const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-100">
      <TopBar />
      <LoginForm />
      <SocialIcons />
    </div>
  );
};

export default App;
