import styled from "styled-components";

//color palet
export const colors = {
  text: "#334353",
  color1: "#FAE8DA",
  testimoniesback: "#FBC3A7",
  color2: "#FA8184",
  copywrite: "#1B2D3F",
  buttoncarrousel: "#DB0000"
}

//carousel
export const Carousel = styled.section`
margin-top: 1080px;
display: flex;
flex-wrap: nowrap;
flex-direction: row;
overflow-y: scroll;
padding: 0 2rem;

}
`

//sobre nosotros 
export const About = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
text-align: left;
padding: 2%;

.text{
  width:20%;
  display: inline-block;
  order: 1;
  flex-grow: 1;
}

h4{
  font-size: xx-large;
  color:${colors.text};
  padding-right:30px;
}

p{
  font-size: x-large;
  color:${colors.text};
  padding-right:30px;
}

button{
  width: 300px;
  height:50px;
  font-size: medium;
  background-color:${colors.color2};
  border-radius: 8px;
  border:2px solid #FA8184; 
  color: white;
  transition-duration: 0.4s;
  padding: 10px;
}


.imageabout{
  width: 55%;
  margin-right: 50%;
  display: inline-block;
  order: 2;
  flex-grow: 2;
  padding: 100px;

}
`
//nuestros servicios
export const OurServices = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
padding: 5%;
background-color: ${colors.color1};

.servicetext{
color: ${colors.text};
align-items: center;
margin-left: 5%;
font-size: large;
}

h4{
  font-size: xx-large;
  text-align: center;
}

p{
  font-size: large;
  text-align: center;
  margin-left:20%;
  margin-right:20%;
}
`
//botones servicios
export const IconsServices = styled.section`
display: flex;
align-items: center;
background-color: ${colors.color1};
flex-flow: nowrap;
justify-content: space-between;
flex-direction: row;
padding-bottom:0px;
padding-top:0px;

.beautyicon{
  order:1;
  flex-grow:1;
}
.nutritionicon{
  order:2;
  flex-grow:1;
}

.workouticon{
  order:3;
  flex-grow:1;
}
`
//servicios textos
export const TextServices = styled.section`
display: flex;
align-items: center;
background-color: ${colors.color1};
flex-flow: nowrap;
justify-content: space-evenly;
flex-direction: row;
color: ${colors.text};
padding:0px;
margin-top:0px;

.textbeauty{
  order:1;
  flex-grow:1;
  width: 20%;
}

.textnutrition{
  order:2;
  flex-grow:1;
  width: 20%;
}

.textworkout{
  order:3;
  flex-grow:1;
  width: 20%;
}

h4{
  font-size: xx-large;
  text-align: center;
}

p{
  font-size: large;
  text-align: center;
}
`
//comentarios
export const Grades = styled.section`
display: flex;
flex-direction:column;
background-color: ${colors.testimoniesback};
text-align:center;
color: ${colors.text};

img{
  width: 100%;
}

h4{
  font-size: xx-large;
  text-align: center;
}

p{
  font-size: large;
  text-align: center;
  margin-left:30%;
  margin-right:30%;
}
`

//form
export const SignForm = styled.section`
display: flex;
align-items: center;
flex-direction:column;
justify-content: space-between;
background-color: white;
text-align:center;
align-content:center;
color: ${colors.text};
flex-wrap: wrap

h2{
  font-size: xxx-large;
  text-align: center;
}

p{
  font-size: large;
  text-align: center;
  margin-left:35%;
  margin-right:35%;
}

input{
  width: 90%;
  background-color: ${colors.color1};
  border: 2px solid ${colors.color1};
  border-radius:8px;
  color: ${colors.color2};
  opacity:0.8;
  font-size: large;
  padding: 10px;
  margin-bottom:30px;

}

input[type=submit] {
  width:150px;
  background-color: ${colors.color2};
  color: white;
  border: 2px solid ${colors.color2};
  border-radius:4px;
  padding: 10px;
`
// footer
export const Styledfooter = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
text-align: left;
padding: 10%;
background-color: ${colors.color2};
color: white;

.direction{
  margin-left: 35%;
}
`
export const Designfooter = styled.section`
display: flex;
justify-content:center;
align-items:center;
background-color: ${colors.copywrite};
color:white;
`
//socialmedia
export const Socialbar = styled.section`
a {
  text - decoration: none;
  vertical - align: middle;
  text - align: center;
  line - height: 3;
}

p {
  color: white;
  position: relative;
  left: -10px;
  font - family: 'Lato';
}

#sidebar {
  height: 250px;
  width: 10px;
  position: fixed;
  text - align: center;
  padding: 10px;
  margin - left: 10px;
}

p i {
  left: 30px;
  position: relative;
  vertical - align: middle;
  text - align: center;
  font - size: 24px;
}

.social {
  margin - left: -200px;
  width: 230px;
  padding: 0;
  display: inline - table;
  height: 0px;
  background - color: rgba(128, 128, 128, 0.73);
  -moz - transition - property: margin - left;
  -moz - transition - duration: 0.2s;
  -moz - transition - delay: 0.2s;
  -ms - transition - property: margin - left;
  -ms - transition - duration: 0.2s;
  -ms - transition - delay: 0.2s;
  -o - transition - property: margin - left;
  -o - transition - duration: 0.2s;
  -o - transition - delay: 0.2s;
  -webkit - transition - property: margin - left;
  -webkit - transition - duration: 0.2s;
  -webkit - transition - delay: 0.2s;
  box - shadow: 0px 0px 6px 0px #3E3D3D;
  cursor: pointer;
}

.social: hover {
  margin - left: -30px;
  width: 230px;
  background - color: #3b5998;
}

.facebook: hover {
  background - color: #3b5998;
}

.twitter: hover {
  background - color: #4099FF;
}

.instagram: hover {
  background - color: #4099FF;

}
`