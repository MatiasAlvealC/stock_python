// Importamos useState de React para manejar el estado del menú
import { useState } from 'react';
// Importamos Link de react-router-dom para la navegación
import { Link } from 'react-router-dom';

import '../assets/styles/navbar.css';


function Navbar() {
  // Estado para controlar si el menú está abierto o cerrado (para móviles)
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-brand">
          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? '×' : '☰'}
          </button>
        </div>
        {/* Menú de Login (Arriba a la derecha) */}
        <ul className="navbar-login">
          <li><Link to="/login">Iniciar sesión</Link></li>
        </ul>
      </div>

      {/* Lista de enlaces de navegación (Abajo a la derecha) */}
      <ul className="navbar-menu">
        <li><Link to="/inventario">Inventario</Link></li>
        <li><Link to="/caja">Caja</Link></li>
        <li><Link to="/reporte">Reporte</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;