import React from "react";
import styled from "styled-components";
import Imagenes from "./assets/imagenes";
import {
  Form, Container_Form, Section, Figure, TeamImput, InputError, ValidationIcon, ImgHeader,
  Boton} from "./elements/Form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import InputComponent  from "./components/InputComponent";




const app = () => {
  return (
    <main>
      <Section>
        <Container_Form>
          <Form action="">
            <ImgHeader>
              <img src={Imagenes[1]} className="imgHeader" />
            </ImgHeader>
            <InputComponent/>
            <InputError>lorem as</InputError>
            <Boton type="submit">INGRESAR</Boton>
          </Form>
        </Container_Form>
        <Figure>
          <img src={Imagenes[0]} />
        </Figure>
      </Section>
    </main>
  );
}

export default app;