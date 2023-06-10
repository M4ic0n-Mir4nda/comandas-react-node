import btnAdd from '../../images/btnAdd.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MesaContext } from '../../MesaContext';
import { useContext } from 'react';

export const CardContainer = styled.div`
    margin: 70px auto;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media(max-width: 450px) {
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
    }

    a {
        text-decoration: none;
        color: #000;
    }
`

export const CardMesaContainer = styled.div`
    text-align: center;
    border: 2px solid #e7e7e7;
    border-radius: 4px;
    padding: 5px;
    background-color: rgba(0, 226, 0, 0.582);
    border-radius: 5px;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 226, 0, 0.37);
    }

    img {
        margin-top: 20px;
        width: 60px;
    }
`

function CardMesa(props) {
    const { setMesaSelecionada } = useContext(MesaContext);
    let arr = [];
    for (let i = 1; i < props.qtdeMesas; i++) {
      arr.push(i);
    }
  
    const handleClick = (mesa) => {
      setMesaSelecionada(mesa);
    };

    return (
      <CardContainer>
        {arr.map(numMesa => (
          <Link to='/comandas' key={numMesa}>
            <CardMesaContainer onClick={() => handleClick(numMesa)}>
              <img src={btnAdd} alt='adicionar' />
              <p>Mesa {numMesa}</p>
            </CardMesaContainer>
          </Link>
        ))}
      </CardContainer>
    );
  }
  
  export default CardMesa;