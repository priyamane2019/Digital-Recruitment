import React from 'react'
import styled from "styled-components";
import { useState } from 'react';

const MainServices = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);


  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };
  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };

  const handleMouseEnter5 = () => {
    setIsHovered5(true);
  };

  const handleMouseLeave5 = () => {
    setIsHovered5(false);
  };
  const handleMouseEnter6 = () => {
    setIsHovered6(true);
  };

  const handleMouseLeave6 = () => {
    setIsHovered6(false);
  };
  const handleMouseEnter7 = () => {
    setIsHovered7(true);
  };

  const handleMouseLeave7 = () => {
    setIsHovered7(false);
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="content">
          <h1>We build digital for a living.</h1>
          <p>Codigo comprises a team of brilliant minds and innovative individuals who create digital products people love to use.</p><br /><br />
          <p>We believe that seamless, user-centric and meaningful experiences transcend mediums and touchpoints.</p>
        </div>

<div className="brief-info">
        <div className="child1">
          <div className='grandchild'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              width: '200px',
              height: '200px',
              backgroundColor: 'yellow',
              textAlign: 'center',
              justifyContent: 'center',
              transition: 'width 0.3s, height 0.3s',
              cursor: 'pointer',
              borderRadius: '50%',

            }}
          >
            <img src="./images/service1.webp" alt="img" />

            {isHovered ? (
              <div className="grandchildhover"
                style={{
                  width: '400px',
                  height: '400px',
                  backgroundColor: 'yellow',
                  borderRadius: '50%',
                  textAlign: 'center',
                  marginTop: '-250px',
                  marginLeft: '-125px',
                  position: 'absolute',

                }}
              >
                <p> Mobile Development  </p><br />
                <h2> We are all users</h2><br /><br /><br />
                <p> With over 200 digital projects and counting, we get what users want and need pretty easily. UX is the core to everything we build. In Codigo, we take user research, competitive analysis, wireframes, user flows, content maps very seriously.</p>

              </div>

            ) : null}
          </div>

          <div className='grandchild'
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
            style={{
              width: '200px',
              height: '200px',
              backgroundColor: 'rgb(255, 99, 71, 0.5)',
              textAlign: 'center',
              justifyContent: 'center',
              transition: 'width 0.3s, height 0.3s',
              cursor: 'pointer',
              borderRadius: '50%',

            }}
          >
            <img src="./images/service2.webp" alt="img" />


            {isHovered1 ? (
              <div className="grandchildhover"
                style={{
                  width: '400px',
                  height: '400px',
                  backgroundColor: 'rgb(255, 99, 71)',
                  borderRadius: '50%',
                  textAlign: 'center',
                  marginTop: '-240px',
                  marginLeft: '-115px',
                  position: 'absolute',

                }}
              >
                <p> Interface Design  </p><br />
                <h2> We live to design </h2><br /><br />
                <p> We have pixel OCD. We keep ourselves constantly inspired with the hype and trends in the design industry to craft gorgeous interactions for your brand.</p>

              </div>
            ) : null}
          </div>

          <div className='grandchild'
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            style={{
              width: '200px',
              height: '200px',
              backgroundColor: 'red',
              textAlign: 'center',
              justifyContent: 'center',
              transition: 'width 0.3s, height 0.3s',
              cursor: 'pointer',
              borderRadius: '50%',

            }}
          >
            <img src="./images/service3.webp" alt="img" />

            {isHovered2 ? (
              <div className="grandchildhover"
                style={{
                  width: '400px',
                  height: '400px',
                  backgroundColor: 'red',
                  borderRadius: '50%',
                  textAlign: 'center',
                  marginTop: '-250px',
                  marginLeft: '-70px',
                  position: 'absolute',

                }}
              >
                <p> Consultancy </p><br />
                <h3> We can help validate your ideas. </h3><br /><br />
                <p>Ready to take the first step? Let us help with a minimum viable product. Tap on our brains and experience to create a semi-product to test the waters. Consult us on user experience, how the product could look like and turn it into a rapid prototype</p>

              </div>
            ) : null}
          </div>
        </div>

</div>
        
          <div className="ContentName">
            <div>
              <h3>User Experience</h3>
              <p>How users interact</p>
            </div>
            <div>
              <h3>Interface Design</h3>
              <p>For all screens in the world</p>
            </div>
            <div>
              <h3>Consultancy</h3>
              <p>For proof-of-concepts</p>
            </div>
          </div>
        


        <div className="child2">
          <div className='grandchild'
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
            style={{
              width: '200px',
              height: '200px',
              backgroundColor: 'DodgerBlue',
              textAlign: 'center',
              justifyContent: 'center',
              transition: 'width 0.3s, height 0.3s',
              cursor: 'pointer',
              borderRadius: '50%',

            }}
          >
            <img src="./images/service4.webp" alt="img" />

            {isHovered3 ? (
              <div className="grandchildhover"
                style={{
                  width: '400px',
                  height: '400px',
                  backgroundColor: 'DodgerBlue',
                  borderRadius: '50%',
                  textAlign: 'center',
                  marginTop: '-240px',
                  marginLeft: '-155px',
                  position: 'absolute',

                }}
              >
                <p> Mobile Development </p><br />
                <h3> We are Apple & Android friendly. </h3><br /><br />
                <p>Native, ReactNative, payment gateway integration, bespoke CMS, consuming APIs from existing sources and all things mobile app relevant. We’ve mostly done it all.</p>

              </div>
            ) : null}
          </div>

          <div className='grandchild'
            onMouseEnter={handleMouseEnter4}
            onMouseLeave={handleMouseLeave4}
            style={{
              width: '200px',
              height: '200px',
              backgroundColor: 'mistyrose',
              textAlign: 'center',
              justifyContent: 'center',
              transition: 'width 0.3s, height 0.3s',
              cursor: 'pointer',
              borderRadius: '50%',

            }}
          >
            <img src="./images/service5.webp" alt="img" />

            {isHovered4 ? (
              <div className="grandchildhover"
                style={{
                  width: '400px',
                  height: '400px',
                  backgroundColor: 'mistyrose',
                  borderRadius: '50%',
                  textAlign: 'center',
                  marginTop: '-220px',
                  marginLeft: '-120px',
                  position: 'absolute',

                }}
              >
                <p> Web Development </p><br />
                <h3> We weave front-end magic. </h3><br /><br />
                <p>Web portals, microsites (yes, they still exist), web apps - responsive, powered by WordPress or supported by a bespoke CMS. No screen sizes scare us, only IE does.</p>

              </div>
            ) : null}
          </div>

          <div className='grandchild'
            onMouseEnter={handleMouseEnter5}
            onMouseLeave={handleMouseLeave5}
            style={{
              width: '200px',
              height: '200px',
              backgroundColor: 'green',
              textAlign: 'center',
              justifyContent: 'center',
              transition: 'width 0.3s, height 0.3s',
              cursor: 'pointer',
              borderRadius: '50%',

            }}
          >
            <img src="./images/service6.webp" alt="img" />

            {isHovered5 ? (
              <div className="grandchildhover"
                style={{
                  width: '400px',
                  height: '400px',
                  backgroundColor: 'green',
                  borderRadius: '50%',
                  textAlign: 'center',
                  marginTop: '-220px',
                  marginLeft: '-40px',
                  position: 'absolute',

                }}
              >
                <p> CMS </p><br />
                <h3> We give u data. </h3><br /><br />
                <p>All bespoke CMS we build comes with a dashboard so you can monitor the activities on your product. Edit or add content at your convenience - we’ll customise everything to your wants and needs.</p>

              </div>
            ) : null}

          </div>

        </div>
        <div>
          <div className="ContentName">
            <div>
              <h3>Mobile Development</h3>
              <p>iOS & Android</p>
            </div>
            <div>
              <h3>Web Development</h3>
              <p>for bussiness any shape and size</p>
            </div>
            <div>
              <h3>CMS</h3>
              <p>Manage Your Own Content</p>
            </div>
          </div>
        </div>

        <div className="child3">
          <div className='grandchild'
            onMouseEnter={handleMouseEnter6}
            onMouseLeave={handleMouseLeave6}
            style={{
              width: '200px',
              height: '200px',
              backgroundColor: 'DimGray',
              textAlign: 'center',
              justifyContent: 'center',
              transition: 'width 0.3s, height 0.3s',
              cursor: 'pointer',
              borderRadius: '50%',

            }}
          >
            <img src="./images/service7.webp" alt="img" />

            {isHovered6 ? (
              <div className="grandchildhover"
                style={{
                  width: '400px',
                  height: '400px',
                  backgroundColor: 'DimGray',
                  borderRadius: '50%',
                  textAlign: 'center',
                  marginTop: '-220px',
                  marginLeft: '-80px',
                  position: 'absolute',

                }}
              >
                <p>Emerging Tech </p><br />
                <h3>We have all the fancy gadgets. </h3><br /><br />
                <p>Bluetooth, beacon, NFC, Augmented reality, IoT and more - we know and we have all these buzzwords in our office. We put Superman in AR before Pokemon Go did.</p>

              </div>

            ) : null}
          </div>

          <div className='grandchild'
            onMouseEnter={handleMouseEnter7}
            onMouseLeave={handleMouseLeave7}
            style={{
              width: '200px',
              height: '200px',
              backgroundColor: 'RosyBrown',
              textAlign: 'center',
              justifyContent: 'center',
              transition: 'width 0.3s, height 0.3s',
              cursor: 'pointer',
              borderRadius: '50%',

            }}
          >
            <img src="./images/service8.webp" alt="img" />


            {isHovered7 ? (
              <div className="grandchildhover"
                style={{
                  width: '400px',
                  height: '400px',
                  backgroundColor: 'RosyBrown',
                  borderRadius: '50%',
                  textAlign: 'center',
                  marginTop: '-220px',
                  marginLeft: '-70px',
                  position: 'absolute',

                }}
              >
                <p>Coaching </p><br />
                <h3>We’d love to share. </h3><br /><br />
                <p>Attend our Masterclasses with the Codigo syllabus or talk to us to customise sessions just for your business teams. Learn more here</p>
              </div>
            ) : null}
          </div>
        </div>

        <div>
          <div className="ContentName">
            <div>
              <h3>Emerging Tech</h3>
              <p>Because we are geeks</p>
            </div>
            <div>
              <h3>Coaching</h3>
              <p>Come learn our secrets</p>
            </div>
          </div>
        </div>

      </div>

    </Wrapper>
  );
};

const Wrapper = styled.section`
.container{
  width:100%;
  height:100%;
  margin:0;
  padding:0;
  margin-top:110px;
  margin-left:110px;
  margin-bottom:30px;
}
.child1, .child3, .child2{
  margin-top:100px;
  display:flex;
  column-gap:150px;
  justify-content:center;

}
.ContentName{
  margin-top:85px;
  display:flex;
  column-gap:200px;
  justify-content:center;
}
img{
  width:200px;
  height:200px;
  padding-top:10px;
}

h1{
  color:brown;
}
.content{
  width:600px;
  height:300px;
  padding: 10px 10px 10px 10px;
  margin:10px;
}

.divdata{
  background-color:yellow;
  color:black;
}
.grandchildhover{
  padding-top:80px;
  text-align:justify;
  font-size:0.5px;
}
p{
  padding:5px 15px 3px 5px;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {

  .child1, .child3, .child2{
     display:grid;
     grid-template-columns: 1fr;
     margin-top:20px;
     row-gap:130px;
     margin-left:20px;
     padding-left:20px;
  }
  .child2, .child3{
    margin-top:130px;

  }
.ContentName{
  display:none;
}
  .grandchild{
    margin-left:60px;
  }
.container{
  margin-left:30px;
  margin-bottom:30px;
}
  .content{
    width:430px;
    height:400px;
    margin-left:1px;
    padding-left:1px;
  }
}

`;
export default MainServices;