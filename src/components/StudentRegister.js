import styled from "styled-components";
import React, { useContext, useState } from 'react';
import { StudentContext } from './StudentContext';
import {useNavigate} from "react-router-dom"
const StudentForm = () => {
  const { studentData, setStudentData } = useContext(StudentContext);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, age, location, job, password, cpassword } = e.target;


    const newStudent = {
      name: name.value,
      email: email.value,
      age: parseInt(age.value),
      location: location.value,
      job: job.value,
      password: password.value,
      cpassword: cpassword.value
    };
    
    setStudents([...students, newStudent]);
    setStudentData([...studentData, newStudent]);


if(password.value === cpassword.value)
{
  alert("Successfully Sign Up")
  navigate("/signin");
    name.value = '';
    email.vlaue = '';
    age.value = '';
    location.value = '';
    job.value = '';
    password.value = '';
    cpassword.value = '';


}else
{
  alert("Password should be matched!")
}

  };

  return (
    <Wrapper>
        <h2>Registration Form </h2>
      <div className="RegForm">
        <div className='formData'>
      <form onSubmit={handleSubmit} autoComplete="off">
          <input type="text" name="name" placeholder="Name" required /><br /><br />
          <input type="email" name="email" placeholder="Email" autoComplete="off" required /><br /><br />
          <input type="number" name="age" placeholder="Age" required /><br /><br />
          <input type="text" name="location" placeholder="Location" required /><br /><br />
          <input type="text" name="job" placeholder="Job" required /><br /><br />
          <input type="password" name="password" placeholder="Passoword" autoComplete="off" required /><br /><br />
          <input type="password" name="cpassword" placeholder="Confirm Password"  autoComplete="off" required /><br /><br />
          <button type="submit">Register</button>
      </form>
      </div>
      <div className="image">
        <div className="img">
          <img src="./images/Register.jpeg" alt="img" />
        </div>
      </div>
      
    </div>
    </Wrapper >
  );
};



export default StudentForm;

const Wrapper = styled.section`
.RegForm{
  display:flex;
  width:800px;
  height:500px;
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
  margin-top:90px;
  
}
.formData{
  width:500px;
  padding:10px;
  margin-top:30px;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {

  .RegForm{
    display:flex;
    width:450px;
    height:400px;
    padding:5px;
    margin-left:10px;
    
  }
  input{
    width:230px;
  }
  img{
  width:230px;
  height:250px;
  margin-top:50px;
  
}
.formData{
  width:250px;
  padding:5px;
}
}

`