import { useState } from 'react';
import '../assets/styles/Inventario.css';

function Inventario() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  return (
    <div className="inventario-container">
      <div className="inventario-card">
        <h1>Inventario</h1>
        <button onClick={toggleFormulario} className="toggle-button">
          {mostrarFormulario ? 'Ocultar formulario' : 'Agregar'}
        </button>

        {mostrarFormulario && (
          <form className="inventario-form">
            <input type="text" placeholder="Nombre producto" className="small-input" />
            <input type="text" placeholder="Código" className="small-input" />
            <input type="number" placeholder="Cantidad" className="small-input" />
            <input type="number" placeholder="Margen ganancia" className="small-input" />
            <input type="number" placeholder="Precio" className="small-input" />
            <select className="small-input">
              <option value="">Seleccione categoría</option>
              <option value="categoria1">Categoría 1</option>
              <option value="categoria2">Categoría 2</option>
            </select>
            <input type="number" placeholder="Costo producto" className="small-input" />
            <button type="submit" className="submit-button small-button">Agregar producto</button>
          </form>
        )}

        <p className="inventario-lista">Aquí se mostrará la lista de inventario.</p>
      </div>
    </div>
  );
}

export default Inventario;

