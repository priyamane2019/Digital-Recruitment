import React, { useState, useContext } from 'react';
import { StudentContext } from './StudentContext';
import styled from "styled-components";
import { useNavigate} from "react-router-dom";

const StudentLogin = () => {

  const { studentData } = useContext(StudentContext);
 const [loggedInUser, setLoggedInUser] = useState(null);
  const [loginError, setLoginError] = useState('');

const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = e.target;
    const user = studentData.find((student) => student.password === password.value && student.email === email.value);

    if (user) {

      setLoggedInUser(user);
      setLoginError('');
  navigate("/");

  

    } else {
      setLoggedInUser(null);
      setLoginError('Enter the valide userName And Password');
    }

    email.value = '';
    password.value='';
  };
  if(loginError)
  {
    alert('Enter the valide userName And Password')
    }

  return (
    <Wrapper>
    <div>      
      {loggedInUser ? (
        <div>
           {
           alert(`Welcome, ${loggedInUser.email}!`)
           }
        </div>
      ) : (
        <div>
        <h2>Sign In</h2>
        
        <div className="LogForm">
        <div className='formData'>
          <form onSubmit={handleLogin}>
            <input type="email" name="email" placeholder="USerName" autoComplete="off"  required /><br /><br />
            <input type="password" name="password" placeholder="Password" autoComplete="off"  required /><br /><br />
            <button type="submit">Login</button>
            
          </form>
          
        </div>
        
        <div className="image">
        <div className="img">
          <img src="./images/login.avip.avif" alt="img" />
        </div>
      </div>
        </div>
        </div>
      )}
    </div>
    
    </Wrapper >
  );
};

export default StudentLogin;
const Wrapper = styled.section`
.LogForm{
  display:flex;
  width:800px;
  height:400px;
  padding:10px;
  margin-left:300px;
  background-color:white;
  text-align:center;
  border:2px solid gray;
  border-radius:10px;
}
h2{
  text-align:center;
  padding:20px;
  margin:20px;
}
input{
  width:350px;
  height:30px;
  font-size:15px;
  border:0.5px solid gray;
}
button{
  color:white;
  width:250px;
  height:30px;
  background-color:blue;
  cursor:pointer;
  border:none;
  margin-top:20px;
  border-radius:10px;
}
img{
  width:400px;
  height:300px;
  margin-top:60px;
  
}
.formData{
  width:500px;
  padding:10px;
  margin-top:80px;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {

  .LogForm{
    display:flex;
    width:450px;
    height:300px;
    padding:5px;
    margin-left:10px;
    
  }
  input{
    width:230px;
  }
  img{
  width:230px;
  height:200px;
  margin-top:50px;
  
}
.formData{
  width:250px;
  padding:5px;
}
button{
  width:200px;
}
}
`