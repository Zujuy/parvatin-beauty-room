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
    margin-top: 15%;
  }

  .whatsapp {
    background: #334353;
    color: white;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    margin-top: 15%;
  }
`;

//carousel
export const Carousel = styled.section`
margin-top: 1080px;
height: 1080px;
width:1020px;
display: flex;
flex-wrap: nowrap;
flex-direction: row;
overflow-y: scroll;
padding: 0 2rem;

}
`;
//carouselbootstrap
export const CarouselStyled = styled.section`
  width: 100%;
  max-width:1800px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-y: hidden;
  padding: 0;

  .boton1 {
    display: inline-block;
    margin-bottom: 35%;
    margin-left: -85%;
    width: 250px;
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
    display: inline-block;
    width: 250px;
    height: 50px;
    font-size: medium;
    background-color: ${colors.buttoncarrousel};
    border-radius: 8px;
    color: white;
    transition-duration: 0.4s;
    padding: 0px;
    margin-left: 85%;
    margin-bottom: 2%;
    font-family: Summer;
  }

  .boton3 {
    display: inline-block;
    width: 250px;
    height: 50px;
    font-size: medium;
    background-color: ${colors.color2};
    border-radius: 8px;
    color: white;
    transition-duration: 0.4s;
    margin-bottom: 30%;
    margin-left: 82%;
    font-family: Summer;
  }


  @media only screen and (max-width: 1500px){
    .boton1 {
    margin-bottom: 32%;
    margin-left: -85%;
  }

   .boton2 {
    margin-left: 80%;
    margin-bottom: 3%;
  }

   .boton3 {
    margin-bottom: 25%;
    margin-left: 78%;
  }
  }

    @media only screen and (max-width: 1250px){
    .boton1 {
    margin-bottom: 30%;
    margin-left: -85%;
  }

   .boton2 {
    margin-left: 80%;
    margin-bottom: 2%;
  }

   .boton3 {
    margin-bottom: 25%;
    margin-left: 76%;
  }
  }

  @media only screen and (max-width: 1000px){
    .boton1 {
    margin-bottom: 25%;
    margin-left: -85%;
  }

   .boton2 {
    margin-left: 71%;
    margin-bottom: -5%;
  }

   .boton3 {
    margin-bottom: 20%;
    margin-left: 68%;
  }
  }

`;

//sobre nosotros
export const About = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 2%;
  margin-left: 10%;
  margin-right:10%;
  

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
    transition-duration: 4.2s;
    padding: 0px;
    font-family: Summer;
  }

  .imageabout {
    width: 55%;
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
    padding-right:10%;
    padding-left:10%;
    
  }

  h4 {
    font-size: xx-large;
    text-align: center;
    font-family: HelveticaBold;
  }

  p {
    font-size: large;
    text-align: center;
    margin-left: 15%;
    margin-right: 15%;
    font-family: HelveticaRoman;
  }
`;

//botones servicios
export const IconsServices = styled.section`
  display: flex;
  background-color: ${colors.color1};
  width: 100%;
  justify-content: space-between;

  .beautyicon {
    order: 1;
    flex-grow: 1;
    margin-left:2%;
    padding-left:1%
  }
  .nutritionicon {
    order: 2;
    flex-grow: 1;
    margin-left:1%;
  }

  .workouticon {
    order: 3;
    flex-grow: 1;
  
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
  justify-content:space-between;
  padding-bottom: 50px;

  .textbeauty {
    order: 1;
    flex-grow: 1;
    margin-left:2%;
  }

  .textnutrition {
    order: 2;
    flex-grow: 1;
    
  }

  .textworkout {
    order: 3;
    flex-grow: 1;
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
    margin-left: 5%;
    width: 100%;
    font-family: Acumin;
  }

  .text-modal1{
    margin-left:5%;
    margin-right:6%;
    text-align:justify
  }

  .text-modal11{
    margin-left:6%;
    margin-right:7%;
    text-align:justify
  }

  .text-modalii{
    margin-left:7%;
    margin-right:8%;
    text-align:justify
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

  .styledform input {
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

  .styledform placeholder {
    color: ${colors.color2};
  }

  .styledform button {
    padding: 0px;
    font-family: Summer;
    width: 150px;
    height: 50px;
    font-size: 30px;
    background-color: ${colors.color2};
    border-radius: 8px;
    border: 2px solid #fa8184;
    color: white;
    transition-duration: 4.2s;
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
  width: 420px;
  height: 812px;
  background-color: ${colors.color1};
  display: flex;
  flex-direction: column;

  img {
    width: 40%;
    padding-top: 70%;
  }

  h3 {
    margin-top:-30%;
    font-size: large;
  }
`;

//socialmedia
export const SocialMediaMobile = styled.section`
  .icon-bar-mobile {
    display: flex;
    position: fixed;
    flex-direction: row;
    top: 10%;
    -webkit-transform: translateX(30%);
    -ms-transform: translateX(30%);
    transform: translateX(30%);
  }

  .icon-bar-mobile a {
    display: block;
    text-align: center;
    padding: 5px;
    transition: all 0.3s ease;
    color: white;
    font-size: 30px;
  }

  .icon-bar-mobile a:hover {
    background-color: #fa8184;
  }

  .facebook-mobile {
    background: #334353;
    color: white;
    border-radius: 50%;
    height: 55px;
    width: 60px;
    margin-left: 10%;
  }

  .instagram-mobile {
    background: #334353;
    color: white;
    border-radius: 50%;
    height: 55px;
    width: 60px;
  }
`;

//intro mobile
export const IntroMobile = styled.section`
  padding-top: 10%;
  padding-left:5%;
  width: 420px;
  height: 800px;
  background-color: ${colors.intro};
  flex-direction: column;
  justify-content: flex-start;
  display: flex .img {
    position: relative;
  }
 .images{
   margin-left:2px;
   padding-left:0px;
   width:60%;
 }

  .boton1 {
    position: absolute;
    width: 120px;
    height: 35px;
    background-color: ${colors.color2};
    border-radius: 8px;
    color: white;
    transition-duration: 0.4s;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 8%;
    margin-top: -50px;
  }

  .boton2 {
    position: absolute;
    width: 120px;
    height: 35px;
    background-color: ${colors.color2};
    border-radius: 8px;
    color: white;
    transition-duration: 0.4s;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 58%;
    margin-top: -60px;
  }

  .boton3 {
    position: absolute;
    width: 120px;
    height: 35px;
    background-color: ${colors.color2};
    border-radius: 8px;
    color: white;
    transition-duration: 0.4s;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 7%;
    margin-top: -58px;
  }

  #btext1{
    font-size:14px;
  }
  #btext2{
    padding:0px;
    padding-top:7px;
    font-size:12px;
  }

  .h4{
    font-size:10px;
  }
`;

// About mobile
export const AboutusMobile = styled.section`
  display: flex;
  padding-top: 30%;
  padding-left: 10%;
  padding-right: 10%;
  width: 420px;
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
    transition-duration: 4.2s;
    font-family: Summer;
    margin-top: 0px;
    text-align: center;
  }

  .imageabout {
    margin-top: 30%;
    padding-left: 5%;
    padding-right: 10%;
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
  width: 420px;
  height: 800px;

  .containeer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-left: -5%;
    padding-right: 5%;

    .no-gutters {
  margin-right: 0%;
  margin-left: 10%;

  > .col,
  > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
}
  }

  .modal-contentm {
    width: 300px;
    background-color: ${colors.color2};
    color: white;
  }

  .modal-titlem {
    display: block;
    margin-left: 15%;
    width: 100%;
    font-family: Acumin;
  }

  .text-modal1m{
    margin-left:5%;
    margin-right:6%;
    text-align:justify
  }

  .text-modal11{
    margin-left:6%;
    margin-right:7%;
    text-align:justify
  }

  .text-modalii{
    margin-left:7%;
    margin-right:8%;
    text-align:justify
  }
`;

//testimonies mobile
export const TestimoniesMobile = styled.section`
  background-color: ${colors.intro};
  text-align: left;
  font-size: small;
  padding-top: 30%;
  width: 420px;
  height: 1000px;
  padding-left: 5%;
  padding-right: 10%;

  .testimoniestext {
    padding-left: 5%;
    padding-right: 5%;
  }

  .testimonio1 {
    padding-left: 5%;
  }

  .testimonio2 {
    padding-left: 15%;
  }

  .testimonio3 {
    padding-left: 5%;
  }
`;

//mobile Form
export const MobileFormStyle = styled.section`
  display: flex;
  width: 400px;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  text-align: center;
  align-content: center;
  margin-top: 50px;
  padding-top: 20%;
  flex-wrap: wrap h2 {
    font-size: small;
    text-align: center;
  }

  h5 {
    font-family: HelveticaBold;
  }
  p {
    font-size: small;
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
    font-family: HelveticaRoman;
    color: ${colors.text};
  }

  .mobilestyledform input {
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

  .mobilestyledform placeholder {
    color: ${colors.color2};
  }

  .mobilestyledform button {
    padding: 0px;
    font-family: Summer;
    width: 150px;
    height: 50px;
    font-size: 30px;
    background-color: ${colors.color2};
    border-radius: 8px;
    border: 2px solid #fa8184;
    color: white;
    transition-duration: 4.2s;
  }
`;
//mobile Footer
export const MobileFooter = styled.section`
  align-items: center;
  text-align: left;
  padding: 10%;
  background-color: ${colors.color2};
  color: white;
  text-align: center;
  line-height: 0.8em;
  width: 420px;

  h6 {
    font-family: HelveticaBold;
    font-size: small;
    line-height: 0.8em;
  }

  p {
    font-family: Helvetica;
    font-size: small;
    line-height: 1.3em;
  }
  .direction {
    margin-left: 5%;
    font-size: small;
    align-content: center;
  }
`;

export const Designfootermobile = styled.section`
  height: 40px;
  display: flex;
  justify-content: center;
  background-color: ${colors.copywrite};
  color: white;
  padding-top: 10px;
  width: 420px;

  p {
    font-family: HelveticaRoman;
    font-size: small;
  }

  .img {
    order: 1;
  }
  .p {
    order: 2;
    margin-left: 50%;
  }
`;
