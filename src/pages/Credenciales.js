import "../styles/CredencialesStyle.css"; 

import "../assets/img/background.png";
import "../assets/img/chipBlue.PNG";
import React from 'react';

const Credenciales = ()=> {
    return (
    <div>
        <div className="background"/>
        <div className="container">
        <div className="Credenciales">
        <div className="AccesoSistema">
            <h1>Credenciales</h1>
            <form action="">
            <input type="text" placeholder="ID " className="ID"/> 
            <input type="text" placeholder="telefono" className="telefono"/> 
            <input type="password" placeholder="Contraseña" className="pass"/>
            <input type="submit" className="Cancelar" value="Cancelar"/>
            <input type="submit" className="Aceptar" value="Aceptar"/>
            <div className="imgchipBlue"></div>
            </form>
        </div>
        <div className="Acceso">
            <h2>Acceso al sistema</h2>
            <div>
                <select defaultValue={this.state.selectValue} onChange={this.handleChange}/>
                    <option value="Orange">Orange</option>
                    <option value="Radish">Radish</option>
                    <option value="Cherry">Cherry</option>

                </div>
        </div>
        </div>
        </div>
     </div>
    );
 }

 export default Credenciales