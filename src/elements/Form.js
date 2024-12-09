import styled from "styled-components";

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

const Form = styled.form`
    background: yellow ;
    padding: 20px;

`;

const TeamImput = styled.div`
    position: 'relative';
    zIndex: 90;
`;

const Input = styled.input`
    background-color: #522d9f;
    width: 80%;
    height: 40px;
    border-radius:7px;
    outline: none;
    border: none;
    padding-left: 10px;
    color: aliceblue;
    margin-bottom: 5px;
    
`;

const Container_Form = styled.form`
    background: purple;
    width: 50%;
    height: 100vh;

`;

const Figure = styled.form`
    background: yellow;
    width: 50%;
    height: 100vh;
`;




export {Form, Container_Form, Section, Figure, TeamImput, Input};