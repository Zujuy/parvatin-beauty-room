import styled from 'styled-components';

//color palet
export const colors = {
  text: '#334353',
  color1: '#FAE8DA',
  testimoniesback: '#FBC3A7',
  color2: '#FA8184',
  copywrite: '#1B2D3F',
  buttoncarrousel: '#DB0000',
  intro: '#F5CAB1',
};

//RRSSBAR
export const SocialMediaMenu = styled.section`
  .icon-bar {
    position: fixed;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .icon-bar a {
    display: block;
    text-align: center;
    padding: 16px;
    transition: all 0.3s ease;
    color: white;
    font-size: 20px;
  }

  .icon-bar a:hover {
    background-color: #fa8184;
  }

  .facebook {
    background: #334353;
    color: white;
    border-radius: 50%;
    height: 60px;
    width: 60px;
  }

  .instagram {
    background: #334353;
    color: white;
    border-radius: 50%;
    height: 60px;
    width: 60px;
  }

  .whatsapp {
    background: #334353;
    color: white;
    border-radius: 50%;
    height: 60px;
    width: 60px;
  }
`;

//carousel
export const Carousel = styled.section`
margin-top: 1080px;
display: flex;
flex-wrap: nowrap;
flex-direction: row;
overflow-y: scroll;
padding: 0 2rem;

}
`;
//carouselbootstrap
export const CarouselStyled = styled.section`
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-y: scroll;
  padding: 0;

  .boton1 {
    margin-bottom: 30%;
    width: 200px;
    height: 50px;
    font-size: medium;
    background-color: ${colors.text};
    border-radius: 8px;
    color: white;
    transition-duration: 0.4s;
    padding: 0px;
    font-family: Summer;
  }

  .boton2 {
    width: 200px;
    height: 50px;
    font-size: medium;
    background-color: ${colors.buttoncarrousel};
    border-radius: 8px;
    color: white;
    transition-duration: 0.4s;
    padding: 0px;
    margin-left: 90%;
    font-family: Summer;
  }

  .boton3 {
    width: 200px;
    height: 50px;
    font-size: medium;
    background-color: ${colors.color2};
    border-radius: 8px;
    color: white;
    transition-duration: 0.4s;
    margin-bottom: 30%;
    margin-left: 80%;
    font-family: Summer;
  }
`;

//sobre nosotros
export const About = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 2%;
  margin-left: 40px;

  .text {
    width: 20%;
    display: inline-block;
    order: 1;
    flex-grow: 1;
  }

  h4 {
    font-size: xx-large;
    color: ${colors.text};
    padding-right: 30px;
    font-family: HelveticaBold;
  }

  p {
    font-size: x-large;
    color: ${colors.text};
    padding-right: 30px;
    font-family: HelveticaRoman;
  }

  button {
    width: 300px;
    height: 50px;
    font-size: medium;
    background-color: ${colors.color2};
    border-radius: 8px;
    border: 2px solid #fa8184;
    color: white;
    transition-duration: 0.4s;
    padding: 0px;
    font-family: Summer;
  }

  .imageabout {
    width: 55%;
    margin-right: 50%;
    display: inline-block;
    order: 2;
    flex-grow: 2;
    padding: 100px;
  }
`;

//nuestros servicios
export const OurServices = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
  background-color: ${colors.color1};

  .servicetext {
    color: ${colors.text};
    align-items: center;
    margin-left: 5%;
    font-size: large;
  }

  h4 {
    font-size: xx-large;
    text-align: center;
    font-family: HelveticaBold;
  }

  p {
    font-size: large;
    text-align: center;
    margin-left: 20%;
    margin-right: 20%;
    font-family: HelveticaRoman;
  }
`;

//botones servicios
export const IconsServices = styled.section`
  display: flex;
  background-color: ${colors.color1};
  width: 100%;
  margin-left: 0px;
  padding-left: 40px;

  .beautyicon {
    order: 1;
    flex-grow: 1;
  }
  .nutritionicon {
    order: 2;
    flex-grow: 1;
    padding-left: 50px;
  }

  .workouticon {
    order: 3;
    flex-grow: 1;
    padding-left: 50px;
  }
`;

//servicios textos
export const TextServices = styled.section`
  display: flex;
  background-color: ${colors.color1};
  color: ${colors.text};
  width: 100%;
  margin-left: 0px;
  padding-left: 40px;

  .textbeauty {
    order: 1;
    flex-grow: 3;
    padding: 0px;
  }

  .textnutrition {
    order: 2;
    flex-grow: 3;
    padding: 0px;
  }

  .textworkout {
    order: 3;
    flex-grow: 3;
    padding: 0px;
  }

  h4 {
    font-size: large;
    text-align: center;
    padding: 0px;
    font-family: Acumin;
  }

  p {
    font-size: large;
    text-align: center;
    font-family: Acumin;
  }

  .button {
    font-family: Acumin;
  }

  .modal-content {
    width: 700px;
    background-color: ${colors.color2};
    color: white;
  }

  .modal-title {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    font-family: Acumin;
  }
`;
//comentarios
export const Grades = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${colors.testimoniesback};
  text-align: center;
  color: ${colors.text};

  img {
    width: 100%;
  }

  h4 {
    font-size: xx-large;
    text-align: center;
    font-family: HelveticaBold;
    margin-top: 100px;
  }

  p {
    font-size: large;
    text-align: center;
    margin-left: 30%;
    margin-right: 30%;
    font-family: HelveticaRoman;
  }
`;

//form
export const SignForm = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  text-align: center;
  align-content: center;
  margin-top: 50px;
  flex-wrap: wrap h2 {
    font-size: xxx-large;
    text-align: center;
  }

  h2 {
    font-family: HelveticaBold;
  }
  p {
    font-size: large;
    text-align: center;
    margin-left: 35%;
    margin-right: 35%;
    font-family: HelveticaRoman;
    color: ${colors.text};
  }

  input {
    width: 90%;
    background-color: ${colors.color1};
    border: 2px solid ${colors.color1};
    border-radius: 8px;
    color: ${colors.color2};
    opacity: 0.8;
    font-size: large;
    padding: 10px;
    margin-bottom: 30px;
  }

  placeholder {
    color: ${colors.color2};
  }

  input[type='submit'] {
    padding: 0px;
    font-family: Summer;
    width: 150px;
    height: 50px;
    font-size: 30px;
    background-color: ${colors.color2};
    border-radius: 8px;
    border: 2px solid #fa8184;
    color: white;
    transition-duration: 0.4s;
  }
`;
// footer
export const Styledfooter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 10%;
  background-color: ${colors.color2};
  color: white;

  h3 {
    font-family: HelveticaBold;
  }

  p {
    font-family: Helvetica;
  }
  .direction {
    margin-left: 25%;
  }
`;
export const Designfooter = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.copywrite};
  color: white;
  padding: 10px;

  p {
    font-family: HelveticaRoman;
  }
`;

//home mobile
export const HomeMobileStyle = styled.section`
  width: 380px;
  height: 812px;
  background-color: ${colors.color1};
  display: flex;
  flex-direction: column;

  img {
    width: 40%;
    padding-top: 70%;
  }

  h3 {
    padding-top: 20%;
    font-size: large;
  }
`;

//socialmedia
export const SocialMediaMobile = styled.section`
  .icon-bar {
    display: flex;
    flex-direction: row;
    top: 5%;
    -webkit-transform: translateX(60%);
    -ms-transform: translateX(60%);
    transform: translateX(60%);
  }

  .icon-bar a {
    display: block;
    text-align: center;
    padding: 16px;
    transition: all 0.3s ease;
    color: white;
    font-size: 20px;
  }

  .icon-bar a:hover {
    background-color: #fa8184;
  }

  .facebook {
    background: #334353;
    color: white;
    border-radius: 50%;
    height: 60px;
    width: 60px;
  }

  .instagram {
    background: #334353;
    color: white;
    border-radius: 50%;
    height: 60px;
    width: 60px;
  }
`;

//intro mobile
export const IntroMobile = styled.section`
  padding-top: 20%;
  width: 100%;
  height: 700px;
  background-color: ${colors.intro};
  flex-direction: column;
  justify-content: flex-start;

  .img {
    position: relative;
  }

  .boton1 {
    position: absolute;
    width: 100px;
    height: 40px;
    background-color: ${colors.color2};
    border-radius: 8px;
    color: white;
    transition-duration: 0.4s;
    font-family: Summer;
    margin-left: 15%;
    margin-top: -40px;
  }

  .boton2 {
    position: absolute;
    width: 120px;
    height: 35px;
    background-color: ${colors.color2};
    border-radius: 8px;
    color: white;
    transition-duration: 0.4s;
    font-family: Summer;
    margin-left: 55%;
    margin-top: -40px;
  }

  .boton3 {
    position: absolute;
    width: 120px;
    height: 35px;
    background-color: ${colors.color2};
    border-radius: 8px;
    color: white;
    transition-duration: 0.4s;
    font-family: Summer;
    margin-left: 15%;
    margin-top: -40px;
  }
`;

// About mobile
export const AboutusMobile = styled.section`
  display: flex;
  padding-top: 30%;
  padding-left: 10%;
  padding-right: 10%;
  width: 100%;
  height: 700px;
  text-align: left;
  font-size: small;
  flex-direction: column;

  .botonabout {
    position: absolute;
    width: 200px;
    height: 40px;
    background-color: ${colors.color2};
    border-radius: 8px;
    color: white;
    transition-duration: 0.4s;
    font-family: Summer;
    margin-top: 0px;
    text-align: center;
  }

  .imageabout {
    margin-top: 30%;
  }
`;

//services mobile
export const ServicesMobile = styled.section`
  background-color: ${colors.color1};
  text-align: left;
  padding-left: 10%;
  padding-right: 10%;
  font-size: small;
  padding-top: 30%;
  width: 100%;
  height: 700px;

  .circles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`;
