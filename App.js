import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react'; // Importamos iconos modernos para la interfaz

// Componente principal de la aplicación: App
const App = () => {
  // 1. Estado para almacenar el valor del contador
  const [count, setCount] = useState(0);

  // 2. Función para incrementar el contador
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // 3. Función para decrementar el contador
  const decrement = () => {
    // Aseguramos que el contador no baje de 0
    setCount(prevCount => Math.max(0, prevCount - 1));
  };

  // El diseño utiliza Tailwind CSS para ser completamente responsivo
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center p-4">
      
      {/* Tarjeta principal que simula la pantalla de una app */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 transition duration-500 transform hover:scale-[1.02]">
        
        {/* Título de la Aplicación */}
        <h1 className="text-4xl font-black text-center text-indigo-600 mb-2 tracking-tight">
          App Contador Móvil
        </h1>
        <p className="text-md text-center text-gray-500 mb-8">
          Diseño optimizado para añadir a la pantalla de inicio (PWA)
        </p>
        
        {/* Visualizador del Contador */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-lg font-medium text-gray-400 uppercase">
            Valor Actual
          </p>
          <div className="text-8xl font-extrabold text-gray-900 bg-indigo-50 p-10 rounded-2xl shadow-inner min-w-[200px] text-center border-4 border-indigo-200">
            {count}
          </div>
        </div>

        {/* Controles: Botones de Acción */}
        <div className="mt-10 flex justify-between gap-6">
          
          {/* Botón Decrementar */}
          <button
            onClick={decrement}
            className="flex-1 flex items-center justify-center py-4 px-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-300/50 transform active:scale-90 transition duration-150 ease-in-out disabled:opacity-30 disabled:shadow-none"
            disabled={count <= 0}
            aria-label="Decrementar Contador"
          >
            <Minus size={24} className="mr-2" />
            Restar
          </button>
          
          {/* Botón Incrementar */}
          <button
            onClick={increment}
            className="flex-1 flex items-center justify-center py-4 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-400/50 transform active:scale-90 transition duration-150 ease-in-out"
            aria-label="Incrementar Contador"
          >
            <Plus size={24} className="mr-2" />
            Sumar
          </button>
        </div>

      </div>

      {/* Instrucción de PWA */}
      <p className="mt-12 text-sm text-gray-500 text-center max-w-sm px-4">
        💡 **Paso clave:** Una vez publicado en línea (ej. GitHub Pages), visita el enlace en tu celular y usa la opción **"Añadir a la pantalla de inicio"** de tu navegador. ¡Así se convierte en una "app de celular"!
      </p>

    </div>
  );
};

export default App;