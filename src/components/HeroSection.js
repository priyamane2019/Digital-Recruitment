import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsCurrencyRupee } from "react-icons/bs";

const HeroSection = () => {

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <h3>LEARN WHAT THE INDUSTRY DEMANDS</h3>
            <h1 className="intro-data">Unlock your dream tech job</h1>
            <p>AI-powered, industry-oriented courses in software development and data science to land the tech job of your dreams.
            </p>
            <NavLink to="/contact">
              <Button>Get Start</Button><br /><br />
            </NavLink><br /><br />
            <div className="imgs">
              <img className="img1" src="images/img1.jpeg" alt="logo" />
              <img className="img1" src="images/img2.jpeg" alt="logo" />
              <img className="img1" src="images/img3.jpeg" alt="logo" />
              <img className="img1" src="images/img4.jpeg" alt="logo" />
              <img className="img1" src="images/img5.jpeg" alt="logo" />
            </div><br />
            <div className="star">
              <p><img className="img1" src="images/star.svg" alt="logo" />
                4.8 from 1000+ reviews</p>
            </div>
            <ul>
              <li><h3><BsCheckCircleFill /> Open to students with a Bachelor's degree or a diploma</h3></li>
              <li><h3><BsCheckCircleFill /> Project-based live learning</h3></li>
              <li><h3><BsCheckCircleFill /> Easy EMI options available</h3></li>
              <li><h3><BsCheckCircleFill /> Two specialisations available</h3></li>
            </ul><br /><br />
            <div className="enroll-section">
              <NavLink to="/signup">
                <button className="enroll">Enroll</button>
              </NavLink>
              <NavLink to="/services">
                <button className="learn">Lern More</button>
              </NavLink>
            </div><br /><br />

          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <div className="child-container">
              <div className="contact-form">
                <h3>Book a 1:1 doubt clearing session with our experts</h3><br /><br />
                <form
                  action="https://formspree.io/f/xvojzlnp"
                  method="POST"
                  className="contact-inputs">
                  <input
                    type="text"
                    placeholder="Enter Your Full Name"
                    name="Name"
                    required
                    autoComplete="off"
                  />

                  <input
                    type="email"
                    name="Email"
                    placeholder=" Enter Your Email"
                    autoComplete="off"
                    required
                  />

                  <input
                    type="number"
                    name="Mobile No"
                    placeholder="Enter Your Mobile No."
                    autoComplete="off"
                    required
                  />


                  <input
                    type="text"
                    name="Qualification"
                    placeholder="Enter Your Education Qualification"
                    autoComplete="off"
                    required
                  />

                  <input type="submit" value="send" />
                </form>
              </div>
            </div><br /><br />

            <div className="learnin-info">
              <div className="learn-div">
                <h3>Learning Format</h3>
                <h3>Online</h3>
              </div>
              <div className="learn-div">
                <h3>Duration</h3>
                <h3>8-13 Months</h3>
              </div>
              <div className="learn-div">
                <h3>EMI From</h3>
                <h3>6124<BsCurrencyRupee /></h3>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0;
   padding: 7rem 0 3rem 0;
    text-align: center;
    
    .child-container{
      border:2px solid black;
      padding:30px;
      border-radius:10px;
    }
    .container {
      margin-top: 3rem;
      
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    
.imgs{
  position:relative;
}
.learn , .enroll{
 background-color:blue;
 color:white;
 width:200px;
 height:50px;
 cursor:pointer;
 margin:5px;
 border:none;
 border-radius:5px;
}
.enroll{
  padding-left:5px;
}
.learnin-info{
  margin-top:30px;
  padding:15px;
  text-align:center;
  width:500px;
  height:100px;
  display:flex;
  justify-content:center;
  align-item:center;
  border:1px solid black;
  border-radius:10px;
}
.learn-div{
  width:150px;
  height:100px;
  padding-top:5px 10px 5px 5px;
  align-item:center;
  justify-content:center;
}
  .img1{
    border-radius:50%;
    width: 5px;
    height:50px;
  }
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    }
    .learnin-info
    {
      display:flex;
    }

    h1 {       
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    background-color:
    display: flex;
    justify-content: center;
    align-items: center;
   

  }
  
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    .hero-section-data{
      width:58rem;
      height:60 rem;
      padding:5px;
      marging-right:3px;
      h1{
        font-size:large
      }
    }

.learn-div{
  padding:1px;
  margin:1px;
}
h3{
  font-size:small;
}
    .contact-form{
      padding:5px;
    }
    .child-container{
      width:55rem;
      padding-left:5px;
      margin:1px;

    }

    figure::after {
      content: "";
      width: 700px;
      height: 300px;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
