import styled from "styled-components";
import { NavLink } from "react-router-dom"
const FeatureProduct = () => {

  

  return (
    <Wrapper className="section">
      <div className="container">
        <h2>Our Feature Services</h2><br/><br />
        <h3>Get a job in 1500+ top product and service based companies globally</h3><br/><br/>
        <div className="place-com">
        <img className="company" src="images/c1.png" alt="logo" />
        <img className="company" src="images/c8.png" alt="logo" />
        <img className="company" src="images/c2.png" alt="logo" />
        <img className="company" src="images/c3.png" alt="logo" />
        <img className="company" src="images/c4.png" alt="logo" />
        <img className="company" src="images/c5.png" alt="logo" />
        <img className="company" src="images/c66.svg" alt="logo" />
        <img className="company" src="images/c7.png" alt="logo" />
        <img className="company" src="images/c9.png" alt="logo" />
</div><br/><br/><br/>
  <button className="button"> <NavLink to="/services"> See More</NavLink></button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
.button{
  width:200px;
  height:40px;
  color:black;
  background-color:navy;
  border-radius:5px;
  border:none;
 font-weight:700px;
}
  .container {
    max-width: 120rem;
  }
.company{
  width:100px;
  height:30px;
}
  .place-com{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap:20px;
  }



`;

export default FeatureProduct;