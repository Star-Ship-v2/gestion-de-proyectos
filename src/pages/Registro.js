import "../styles/RegistroStyle.css"; 

import "../assets/img/background.png";
import "../assets/img/chipBlue.PNG";

import React from 'react';





const Registro = ()=> {
    
    return (      
    <div>
        <div className="background"/>
        <div className="container">
        <div className="Registro">
        <div className="AccesoSistema">
            <h1>Registro</h1>
            <form action="">
            <input type="text" placeholder="Correo" className="Correo"/> 
            <input type="text" placeholder="Tipo de Documento de Identificación" className="Tipo de Documento de Identificación"/>
            <input type="text" placeholder="Número de identificación" className="Número de identificación"/> 
            <input type="text" placeholder="Nombre Completo" className="Nombre Completo"/> 
            <input type="password" placeholder="Contraseña" className="Contraseña"/>
            <input type="password" placeholder="Confirmar Contraseña" className="Confirmar Contraseña"/>
            <input type="text" placeholder="Tipo de usuario o rol" className="Tipo de usuario o rol"/>

            <input type="submit" className="Cancelar" value="Cancelar"/>
            <input type="submit" className="Aceptar" value="Aceptar"/>
            
            </form>
        </div>
        <div className="Acceso">
            <h2>Acceso al sistema</h2>
            <div className="imgchipBlue"></div>

        </div>
        </div>
        </div>
     </div>
        
    );
    
 }

 export default Registro