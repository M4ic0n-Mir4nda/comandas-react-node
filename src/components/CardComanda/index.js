import imgBusca from '../../images/busca.svg'
import { listProducts } from '../../services/produtos';
import { useState } from 'react';
import styled from 'styled-components';

const SectionComanda = styled.section`
    width: 80%;
    margin-top: 50px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 3px 5px #0005;
    margin-bottom: 50px;

    @media(max-width: 450px) {
        width: 100%;
    }
`

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

const Description = styled.div`
    width: 300px;
    margin-left: 15px;
    white-space: nowrap;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 

    h3 {
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    }

    @media(max-width: 558px) {
    width: 160px;
    }

    @media(max-width: 370px) {
    width: 100%;
    margin: 0 auto;
    }  
`

const ImgSearch = styled.img`
    border: none;
    background-color: #fff;
    padding: 17px;
    border-radius: 0 10px 10px 0px;
    cursor: pointer;
    box-shadow: 0 3px 2px -2px gray;

    @media (max-width: 650px) {
        margin-left: 1px;
    }
`

const ButtomSearch = styled.button`
    padding: 0;
    border: none;
    background-color: #fff;
`

const Input = styled.input`
    padding: 5px;
    width: 400px;
    height: 31px;
    border: none;
    background-color: #fff;
    padding: 15px;
    border-radius: 10px 0 0 10px;
    font-size: 16px;
    box-shadow: 0 3px 2px -2px gray;

    &:focus {
        outline: 0
    }
`

const CardContainer = styled.div`
    margin-top: 50px;
    margin: 0 auto;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;

    @media(max-width: 550px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const Card = styled.div`
    text-align: center;
    border: 2px solid #e7e7e7;
    border-radius: 4px;
    padding: 5px;
    border-radius: 5px;
    transition: 0.5s;
    cursor: pointer;
`

const Empty = styled.div`
    width: 98vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    

    h1 {
        color: grey;
        font-size: 16px;
    }
`

function CardComanda(props) {

  const [name, setName] = useState('');
  const [responseProducts, setResponseProducts] = useState([]);

  function handleChange(event) {
    setName(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const productsAPI = await listProducts(name);
    setResponseProducts(productsAPI);
  }

  function addProductComanda(product) {
    props.productChosen(product)
  }

  return (
    <SectionComanda>
        <form onSubmit={handleSubmit}>
            <SearchContainer>
                <Input
                    type='text'
                    placeholder='Busque um produto...'
                    onChange={handleChange}
                />
                <ButtomSearch type='submit'>
                    <ImgSearch src={imgBusca} alt='imagem de busca' />
                </ButtomSearch>
            </SearchContainer>
            <CardContainer>
            {responseProducts.length > 0 ? (
                responseProducts.map((product) => (
                <Card onClick={() => addProductComanda(product)}>
                    <h2>{product.codigo}</h2>
                    <Description>
                        <h3>{product.descricao}</h3>
                    </Description>
                    <h2>
                        R$ {parseFloat(product.precovenda).toFixed(2).replace('.', ',')}
                    </h2>
                </Card>
                ))
            ) : (
                <Empty>
                    <h1>Digite e Busque algum produto...</h1>
                </Empty>
            )}
            </CardContainer>
        </form>
    </SectionComanda>
  );
}

export default CardComanda;