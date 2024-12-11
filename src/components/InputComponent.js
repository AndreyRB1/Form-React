import React from "react";
import {Input, ValidationIcon, TeamImput,Label} from "../elements/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const InputComponent = () => {
    return (
        <TeamImput>
            <Label htmlFor="" >CORREO</Label>
            <Input type="text" placeholder="CORREO" id="correo"></Input>
            <ValidationIcon icon={faCircleXmark} />
        </TeamImput>
    );
}

export default Input;