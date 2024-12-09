import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colors = {
    border: "#0075FF",
    error: "#bb2929",
    exito: "#1ed12d"
};

const Section = styled.form`
    width: 100%;
    height: 100vh;
    display: flex;
    flexDirection: row;
`;

const Container_Form = styled.form`
    background: purple;
    width: 50%;
    height: 100vh;


`;

const Form = styled.form`
    width: 100%;
    height: 100vh;
    background: pink ;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center:

`;

const TeamImput = styled.div`
    position: 'relative';
    zIndex: 90;
    background: yellow;
    align-items:center;
    justify-content:center;
    display: flex;  
`;

const Input = styled.input`
    background: #522d9f;
    width: 50%;
    height: 40px;
    border-radius:7px;
    outline: none;
    border: none;
    padding: 10px 40px;
    transition: .3s ease all;    
    color: aliceblue;
    margin-bottom: 5px;
    border: 3px solid transparent;

    &:focus {
        border: 3px solid ${colors.border};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163, 163 ,163, 0.4);
    }
    
`;

const InputError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colors.error};
`;

const ValidationIcon = styled(FontAwesomeIcon) `
    position: absolute;
    right: 10px;
    bottom: 14px;
    zIndex: 100;
    font-size: 16px;
    opacity: 0;
`;


const Figure = styled.form`
    background-image: linear-gradient(
        135deg,
        hsl(0deg 0% 0%) 0%,
        hsl(257deg 24% 12%) 29%,
        hsl(257deg 52% 14%) 47%,
        hsl(257deg 61% 14%) 65%,
        hsl(256deg 29% 13%) 100%
      );
    padding-top: 40px;
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    img {
    transition: 0.2s;
    width: 50%;
    max-width: 100%; /* Previene que la imagen exceda el tamaño del contenedor */
    height: auto;
    }

    img:hover {
        width: 80%;
    }

`;




export {Form, Container_Form, Section, Figure, TeamImput, Input,
        InputError, ValidationIcon
        
};