import styled from 'styled-components';
import userImg from '../../images/user.png'

const HeaderContainer = styled.header`
    padding: 8px;
    background-color: #8b0000;
    display: flex;
    justify-content: right;
    align-items: center;
`

const OptionsUser = styled.div`
    p {
        font-size: 14px;
        color: white;
        padding: 3px;
        margin: 0;
    }

    @media(max-width: 450px) {
        p {
            font-size: 16x;
        }
    }
`

const IconImg = styled.img`
    width: 50px;
    height: 50px;
    padding: 5px;
`

function Header() {
    return (
        <HeaderContainer>
            <OptionsUser>
                <p>Maicon...</p>
                <p>Meu perfil</p>
            </OptionsUser>
            <IconImg src={userImg} alt='imagem do usuario' className='img-user'/>
        </HeaderContainer>
    )
}

export default Header;