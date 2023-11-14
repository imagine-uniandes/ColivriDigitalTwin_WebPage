import { useState } from "react";
import axios from 'axios';
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login(props){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {

        setUsername('');
        setPassword('');

        e.preventDefault();
            
        const data = {
            username: username,
            password: password
        };
  
          try{
            const response = await axios.post("http://localhost:3000/api/v1/users/login", data);
            
            if(response.status === 401){
              setShowSuccess(false);
              setShowError(true);
            }

            else if(response.status === 201){
              setShowSuccess(true);
              setShowError(false);

              localStorage.setItem('role', response.data.role[0]);
              localStorage.setItem('token', response.data.token);
              props.setRole(localStorage.getItem('role'));

              navigate('/')
            }
  
          } catch(error){
            setShowSuccess(false);
            setShowError(true);
            console.error(error);
          }

      } 

    return(
        <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-5">
            <div class="card rounded-3 text-black">
              <div class="row ">
                  <div class="card-body p-md-5 mx-md-4">
                    <div class="text-center">
                      <h1 class="mt-1 mb-5 pb-1">Inicia sesión</h1>
                    </div>
    
                    <form onSubmit={handleSubmit}>  
                      <div class="form-outline mb-4">
                        <label class="mt-3 form-label" for="form2Example11">Nombre de usuario</label>
                        <input type="text" id="form2Example11" class="form-control" value={username} onChange={handleUsernameChange}/>
                      </div>
    
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example22"> Contraseña </label>
                        <input type="password" id="form2Example22" class="form-control" value={password} onChange={handlePasswordChange}/>
                      </div>
    
                      <div class="text-center pt-1 mb-5 pb-1">
                        <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Ingresar</button>
                      </div>
                    </form>
                  </div>               
              </div>
            </div>
          </div>
        </div>

        {showSuccess && (
        <Alert variant="success" dismissible>
          <p>Ingreso correcto.</p>
        </Alert>
        )}

        {showError && (
        <Alert variant="danger" dismissible>
          <p> Error: revisa el nombre de usuario y la contraseña.</p>
        </Alert>
        )}
      </div>
    );

}

export default Login;