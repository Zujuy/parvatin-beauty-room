import styled from 'styled-components';

//color palet
export const colors = {
  text: '#334353',
  color1: '#FAE8DA',
  testimoniesback: '#FBC3A7',
  color2: '#FA8184',
  copywrite: '#1B2D3F',
  buttoncarrousel: '#DB0000',
};

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
    padding: 5px;
  }

  .boton2 {
    width: 200px;
    height: 50px;
    font-size: medium;
    background-color: ${colors.buttoncarrousel};
    border-radius: 8px;
    color: white;
    transition-duration: 0.4s;
    padding: 5px;
    margin-left: 90%;
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
  }

  p {
    font-size: x-large;
    color: ${colors.text};
    padding-right: 30px;
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
    padding: 10px;
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
  }

  p {
    font-size: large;
    text-align: center;
    margin-left: 20%;
    margin-right: 20%;
  }
`;
//botones servicios
export const IconsServices = styled.section`
  display: flex;
  background-color: ${colors.color1};
  width: 100%;
  margin-left: 0px;

  .beautyicon {
    order: 1;
    flex-grow: 1;
  }
  .nutritionicon {
    order: 2;
    flex-grow: 1;
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
  padding: 0px;

  .textbeauty {
    order: 1;
    flex-grow: 1;
  }

  .textnutrition {
    order: 2;
    flex-grow: 1;
    padding: 0px;
  }

  .textworkout {
    order: 3;
    flex-grow: 1;
    padding: 0px;
  }

  h4 {
    font-size: xx-large;
    text-align: center;
    padding: 0px;
  }

  p {
    font-size: large;
    text-align: center;
  }

  .button {
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
  }

  p {
    font-size: large;
    text-align: center;
    margin-left: 30%;
    margin-right: 30%;
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
  color: ${colors.text};
  flex-wrap: wrap h2 {
    font-size: xxx-large;
    text-align: center;
  }

  p {
    font-size: large;
    text-align: center;
    margin-left: 35%;
    margin-right: 35%;
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
    width: 300px;
    height: 50px;
    font-size: medium;
    background-color: ${colors.color2};
    border-radius: 8px;
    border: 2px solid #fa8184;
    color: white;
    transition-duration: 0.4s;
    padding: 10px;
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

  .direction {
    margin-left: 35%;
  }
`;
export const Designfooter = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.copywrite};
  color: white;
`;
