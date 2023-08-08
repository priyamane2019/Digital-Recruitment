import React from 'react';
import styled from "styled-components";
import { useContext } from 'react';
import { StudentContext } from './StudentContext';
import { FcApproval } from "react-icons/fc";

import "../index.css"
const StudentSearch = () => {
    const { studentData } = useContext(StudentContext);
    console.log("Priyam Student data", studentData.name);
    //  const {logout } = useAuth0();
    const [input, setInput] = React.useState("");
    const [value, setValue] = React.useState("lang");
    const [answer, setAnswer] = React.useState([]);
    const [isTrue, setIsTrue] = React.useState(false);


    function handleSearch() {
        if (value === "location") {
            const result = studentData.filter(item => item.location === input)
            setAnswer(result);
            setIsTrue(true);
        }
        else if (value === "job-role") {
            const result = studentData.filter(item => item.job === input)
            setAnswer(result);
            setIsTrue(true);
        }
        else if (value === "email") {
            const result = studentData.filter(item => item.email === input)
            setAnswer(result);
            setIsTrue(true);
        }
        else if(value === "")
        {
            alert("Please Select the search value");
        }

        else if(input === "")
                {
                    alert("Student Not Found. Please Register Students");
                }
        

    }


    return (

    <Wrapper>
        <div className='parent'>
            <h2>Register Student's Information</h2><br/><br/>
            <input type="text" className='searchip' placeholder='Enter Search Items' value={input} onChange={(e) => {
                
                setInput(e.target.value);

            }} />
            <select className="selectititm" value={value} onChange={(e) => {
                setValue(e.target.value)
            }}>
                <option >Select</option>
                <option value="location">Location</option>
                <option value="job-role">Job Role</option>
                <option value="email">Email</option>
            </select>
            <button className="search" onClick={handleSearch}>Search</button>
            <div className="grid grid-three-column">
                {
                    isTrue ? (
                        answer.map((item) => {

                            const { name, email, age, location, job } = item;
                            return (
                                   
                                        <div className="grid grid-three-column">
                                            <div className="StudentInfo">
                                                <span><b>Mail-id:</b> {email}</span><br />
                                                {<span><b>Job-role:</b> {job}</span>}<br />
                                              
                                                {<h4><b>Name: </b>{name} <FcApproval /> </h4>}
                                                {<span><b>Age:</b> {age}</span>}<br />
                                                {<span><b>Location: </b>{location}</span>}


                                            </div>
                                        </div>
                                   
                            )
                        })

                    ) : (
                        <div className="grid grid-three-column">

                            {

                                studentData.map((curElem) => {

                                    const { name, email, age, location, job } = curElem;
                                    return (
                                           
                                                <div className="grid grid-three-column">
                                                    <div className="StudentInfo">
                                                    <span><b>Mail-id:</b> {email}</span><br />
                                                <span><b>Job-role:</b> {job}</span><br />
                                              
                                                <h4><b>Name: </b>{name} <FcApproval /> </h4>
                                                <span><b>Age:</b> {age}</span><br />
                                                <span><b>Location: </b>{location}</span>


                                                    </div>
                                                </div>
                                           
                                    )
                                })

                            }

                        </div>
                    )
                }
            </div>
        </div>
    </Wrapper>

    );
};

export default StudentSearch;

const Wrapper = styled.header`
.parent{
    text-align:center;
    margin-top:70px;
}
.selectititm, .search{
    margin:10px;
    padding:10px;
    width:125px;
    height:50px;
    cursor:pointer;
    border:2px solid black;
    border-radius:10px;

}
input{
    border:2px solid black;
    width:400px;
    border-radius:10px;

}
.search{
    background-color:blue;
    color:white;
    width:300px;
    border:none;

}
.StudentInfo{
    margin:30px 10px;
    padding:30px;
    line-height:30px;
text-align:justify;
    font-size:large;
    width:400px;
    height:200px;
    border: 2px solid gray;
    border-radius:10px;
}
.grid {
    display: grid;
    gap: 1rem;
  }
`
