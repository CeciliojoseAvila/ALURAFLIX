import styled from "styled-components";
import Logotipo from "../Logotipo/Logo";

const Footer = styled.footer`
    padding-bottom: 6rem;
    background-color: #000;
    display: flex;
    justify-content: center;
    border-top: 3px solid #2A7AE4;
    padding: 1.5rem 0 3.5rem 0;
    margin-top: 5rem;
    color: #e4e0e0;
`;


const PieDePagina = () => {

    return (
      <Footer>
        <h1
          style={{
            marginBlockStart: 10,
            marginTop: 40,
            marginRight:200,
          }}
        >
          © 2023 Todos los derechos reservados
        </h1>
        <Logotipo footer={true} />
      </Footer>
    );
}


export default PieDePagina;