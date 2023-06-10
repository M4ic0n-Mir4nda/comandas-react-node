import { useContext, useEffect, useState } from 'react';
import { MesaContext } from '../../MesaContext';
import './style.css';

function Comanda({ produto }) {
  const { mesaSelecionada } = useContext(MesaContext);
  const [comanda, setComanda] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    if (produto) {
      setComanda([...comanda, produto]);
    }
  }, [produto]);

  useEffect(() => {
    calculateSubtotal();
  }, [comanda]);

  const calculateSubtotal = () => {
    let total = 0;
    comanda.forEach(item => {
        if (item.precovenda) { 
            total += parseFloat(item.precovenda);
        }
    });
    setSubtotal(total);
  };

  return (
    <div className='teste-container'>
      <div className='background-container'>
        <h1>Mesa: {mesaSelecionada}</h1>
        <div className='scroll'>
          {comanda.length > 1 && comanda.slice(1).map(item => (
            <div className='content'>
              <p>{item.codigo}</p>
              <h3>{item.descricao}</h3>
              <h2>R$ {parseFloat(item.precovenda).toFixed(2).replace('.', ',')}</h2>
            </div>
          ))}
        </div>
        <div>
          <h1 className='subtotal'>SubTotal: R$ {!subtotal ? 0 : subtotal.toFixed(2).replace('.', ',')}</h1>
        </div>
      </div>
    </div>
  );
}

export default Comanda;
