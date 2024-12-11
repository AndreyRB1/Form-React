import React from "react";
import {Input, ValidationIcon, TeamImput} from "../elements/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const InputComponent = ({placeholder}) => {
    return (
        <TeamImput>
            <Input type="text" placeholder={placeholder} id="correo"></Input>
            <ValidationIcon icon={faCircleXmark} />
        </TeamImput>
    );
}

export default Input;