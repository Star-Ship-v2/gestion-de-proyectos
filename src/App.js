import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render (){
    return (
      <div className="App">
     <div class="background"></div>
     <div class="container">
     <div class="login-container">
       <div class="register">
         <h1>Iniciar Sesión</h1>
         <form action="">
           <input type="text" placeholder="Nombre de usuario " class="nombre de usuario"/>
           <input type="password" placeholder="Contraseña" class="pass"/>
           <input type="submit" class="olvido" value="¿Has olvidado la contraseña?"/>
           <input type="submit" class="submit" value="Iniciar"/>
           <img src="img\chipBlue.PNG"/>
          </form>
       </div>
       <div class="login">
         <h2>Iniciar Sesión Con Redes Sociales</h2>
         <div class="login-items">
           <button class="fb"><i class="fab fa-facebook-f"></i> Acceder con Facebook</button>
           <button class="tw"><i class="fab fa-twitter"></i> Acceder con Twitter</button>
           <button class="correo"><i class="fas fa-envelope"></i> Acceder con Correo</button>
         </div>
       </div>
     </div>
   </div>
      </div>
  );
 }
}

export default App;
