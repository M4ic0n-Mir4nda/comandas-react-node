import React, { createContext, useState } from 'react';

// Crie o contexto
export const MesaContext = createContext();

// Crie o provedor do contexto
export const MesaProvider = ({ children }) => {
  const [mesaSelecionada, setMesaSelecionada] = useState(null);

  return (
    <MesaContext.Provider value={{ mesaSelecionada, setMesaSelecionada }}>
      {children}
    </MesaContext.Provider>
  );
};