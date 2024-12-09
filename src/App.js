import React from "react";
import styled from "styled-components";
import Imagenes from "./assets/imagenes";
import { Form , Container_Form, Section, Figure, TeamImput, Input, InputError, ValidationIcon} from "./elements/Form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation} from '@fortawesome/free-solid-svg-icons';




const app = () => {
  return (
    <main>
      <Section>
        <Container_Form>
          <Form action="">
            <TeamImput>
            <Input type="text" placeholder="CORREO" id="correo"></Input>
            <ValidationIcon icon={faCircleXmark} />
            </TeamImput>
            <InputError>lorem as</InputError>
            <div>
              <p>
                <FontAwesomeIcon icon={faCircleExclamation}/>
                <b>ERROR</b> POR FAVOR RELLENAR EL FORMULARIO CORRECTAMENTE
              </p>
            </div>
            <div>
              <button type="submit">Enviar</button>
             </div>
          </Form>
        </Container_Form>
        <Figure>
        <img src={Imagenes[0]}/>
        </Figure>
      </Section>
    </main>
  );
}

export default app;