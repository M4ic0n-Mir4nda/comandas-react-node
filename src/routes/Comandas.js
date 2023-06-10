import { useState } from 'react';
import CardComanda from '../components/CardComanda';
import styled from 'styled-components';
import Comanda from '../components/Comanda';

const CardContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f1f1f1;
`

function Comandas() {

    const [productComanda, setProductComanda] = useState([]);

    return (
        <section>
            <Comanda produto={productComanda} />
            <CardContainer>
                <CardComanda productChosen={product => setProductComanda(product)}/>
            </CardContainer>
        </section>
    )
}

export default Comandas;