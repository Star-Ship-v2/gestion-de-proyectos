import "../styles/RegistroStyle.css"; 

import "../assets/img/background.png";
import "../assets/img/chipBlue.PNG";
import React,{useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import Inicio from "./Registro";

function App(){
    const [Dropdown, setDropdown]=useState(false);
    const abrirCerrarDropdown = () =>{
        setDropdown(!Dropdown);
    }
    return(
        <div className="App">
                <Dropdown isOpen={Dropdown} toggle={abrirCerrarDropdown}>
    <DropdownToggle>
        Tipo de usuario a desempeñar
    </DropdownToggle>
    <DropdownMenu>
        <DropdownItem>Estudiante</DropdownItem>
        <DropdownItem>Lider</DropdownItem>
        <DropdownItem>Administrador</DropdownItem>
    </DropdownMenu>
    </Dropdown>
    </div>
    );
}
export default App 