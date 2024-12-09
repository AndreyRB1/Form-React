import React from "react";
import styled from "styled-components";
import { Form , Container_Form, Section, Figure, TeamImput, Input} from "./elements/Form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'



const app = () => {
  return (
    <main>
      <Section>
        <Container_Form>
          <Form action="">
            <div>
            <input type="text" placeholder="CORREO"></input>
            <FontAwesomeIcon icon={faCircleXmark} />
            </div>
            <p>lorem asd</p>
          </Form>
        </Container_Form>
        <Figure>
        <img />
        </Figure>
      </Section>
    </main>
  );
}

export default app;