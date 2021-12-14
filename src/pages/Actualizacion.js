import "../styles/ActualizacionStyle.css"; 

import "../assets/img/background.png";
import "../assets/img/chipBlue.PNG";

import React from 'react';





const Actualizacion = ()=> {
    
    return (      
    <div>
        <div className="background"/>
        <div className="container">
        <div className="Actualizacion">
        <div className="AccesoSistema">
            <h1>Actualización de datos personales</h1>
            <form action="">
            <input type="text" placeholder="Correo" className="Correo"/> 
            <input type="text" placeholder="Tipo de Documento de Identificación" className="Tipo de Documento de Identificación"/>
            <input type="text" placeholder="Número de identificación" className="Número de identificación"/> 
            <input type="text" placeholder="Nombre Completo" className="Nombre Completo"/> 
            <input type="password" placeholder="Cambiar Contraseña" className="Contraseña"/>
            <input type="password" placeholder="Confirmar Contraseña" className="Confirmar Contraseña"/>
            <h2>Estado pendiente por autorizar</h2>

            <input type="submit" className="Cancelar" value="Cancelar"/>
            <input type="submit" className="Actualizar" value="Actualizar"/>
            
            </form>
        </div>
        <div className="Acceso">
            <h2>Actualizacion en el sistema</h2>
            <div className="imgchipBlue"></div>

        </div>
        </div>
        </div>
     </div>
        
    );
    
 }

 export default Actualizacion