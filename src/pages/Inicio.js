import "../styles/InicioStyle.css"
import React from 'react';

const Inicio = ()=> {
    return (
    <div>
        <div className="background"></div>
        <div className="container">
        <div className="login-container">
        <div className="register">
            <h1>Iniciar Sesión</h1>
            <form action="">
            <input type="text" placeholder="Nombre de usuario " className="nombre de usuario"/>
            <input type="password" placeholder="Contraseña" className="pass"/>
            <input type="submit" className="olvido" value="¿Has olvidado la contraseña?"/>
            <input type="submit" className="submit" value="Iniciar"/>
            <img src="img\chipBlue.PNG"/>
            </form>
        </div>
        <div className="login">
            <h2>Iniciar Sesión Con Redes Sociales</h2>
            <div className="login-items">
            <button className="fb"><i className="fab fa-facebook-f"></i> Acceder con Facebook</button>
            <button className="tw"><i className="fab fa-twitter"></i> Acceder con Twitter</button>
            <button className="correo"><i className="fas fa-envelope"></i> Acceder con Correo</button>
            </div>
        </div>
        </div>
        </div>
     </div>
    );
 }

 export default Inicio