import styled from "styled-components";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2>How we ensure phenomenal placements for you</h2><br /><br />

        <div className="grid grid-three-column">
          <div className="services-1">

            <img className="img1" src="images/s1.svg" alt="logo" />
            <h3>Profile building and mock interviews</h3>
            <p>This focuses on helping you build an effective resume and LinkedIn profile as well as a lot of mock interviews to practice your interview skills and receive feedback on areas for improvement.</p>
          </div>

          <div className="services-2">

            <img className="img1" src="images/s2.svg" alt="logo" />
            <h3>Company-specific interview prep</h3>
            <p>We maintain a question bank of more than 1000 companies and get you prepped for exactly what you might be asked in the interview.</p>
          </div>

          <div className="services-3">
            <img className="img1" src="images/s3.svg" alt="logo" />
            <h3>Soft skills and business communication</h3>
            <p>We maintain a question bank of more than 1000 companies and get you prepped for exactly what you might be asked in the interview.</p>
          </div>
        </div><br /><br />
        <p className="success"><b>SUCCESS STORIES</b></p>
        <h2>If they can, You can do it too!</h2>

        <div className="grid grid-three-column">
          <div className="alumini">
            <div className="imgalm">
              <img className="aluminiimg" src="./images/alumini1.png" alt="img" />
              <h2>Priya Mane</h2>
            </div><br /><br />
            <div className="info-alumini">
              <h3>From a Teacher to a Business Analyst</h3>
              <p>Priya was a teacher taught from scratch at Newton with 1:1 doubt sessions that helped her land a job with a 120% hike.</p>

            </div>
          </div>

          <div className="alumini">
            <div className="imgalm">
              <img className="aluminiimg" src="./images/alumini3.png" alt="img" />
              <h2>Raj pate</h2>
            </div><br /><br />
            <div className="info-alumini">
              <h3>From being an Analyst to Managing a team of Analysts</h3>
              <p>Raj joined the course to upskill and gain a certification recognized in the industry. The mentors' guidance helped him land a Team Lead position.</p>
            </div>
          </div>
          <div className="alumini">
            <div className="imgalm">
              <img className="aluminiimg" src="./images/alumini2.png" alt="img" />
              <h2>Priti Singh</h2>
            </div><br /><br />
            <div className="info-alumini">
              <h3>With a Career Gap of more than 2 years to now a Data Scientist</h3>
              <p>Priti’s career gap due to COVID layoffs was overcome by the industry projects she created at Newton, which helped her build her portfolio and land a job.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-two-column">
          <div className="courselang">
            <p><b>COURSE JOURNEY</b></p>
            <h2>Learn all the Tools that are In-demand</h2>
          </div>
          <div className="languages">
            <img className="languagesimg" src="./images/langstore.svg" alt="img" />
          </div>
        </div>
      </div>

    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;

  .grid {
    gap: 4.8rem;
  }
  .courselang{
    font-size:larger;
    padding-top:150px;
    padding-left:30px;
    width:350px;
    height:200px;
  }
  .languages{
    width:600px;
    height:500px;
    margin:150px 80px 40px 50px;
    padding-top:30px;
  }
  .success
  {
    margin-top:100px;
    padding-top:30px;
  }
  h2{
    margin:20px;
    padding-left:10px;
  }
  .info-alumini{
    padding:20px;
    text-align:justify;
  }
  .imgalm{
    display:flex;
    flex-gap:10px;
    margin:10px;
    padding:10px;
    
  }
  .alumini{
    width:350px;
    height:500px;
    border-radius:10px; 
    border:2px solid gray;
  }
  .aluminiimg{
    width:180px;
    height:250px;
  }
.img1{
  width:100px;
  height:100px;
  padding-left:30px;

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-colum-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }


  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
.languagesimg{
  width:150px;
  height:120px;
}
.languages{
  background-color:red;
}
.courselang{
  background-color:red;

}
  }
`;

export default Services;

