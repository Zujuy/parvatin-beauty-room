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
export const About = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
text-align: left;
padding: 2%;

.text{
  width:45%;
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
button:hover {
  background-color: white
  color: ${colors.color2};
}

.imageabout{
  width: 45%;
  margin-right: 50%;
  display: inline-block;
  order: 2;
  flex-grow: 2;
  padding: 100px;

}
`

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
}
`
export const IconsServices = styled.section`
display: flex;
align-items: center;
background-color: ${colors.color1};
flex-flow: nowrap;
justify-content: space-between;
flex-direction: row;

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
export const TextServices = styled.section`
display: flex;
align-items: center;
background-color: ${colors.color1};
flex-flow: nowrap;
justify-content: space-between;
flex-direction: row;
color: ${colors.text};

.textbeauty{
  order:1;
  flex-grow:1;
  width: 30%;
}

.textnutrition{
  order:2;
  flex-grow:1;
  width: 30%;
}

.textworkout{
  order:3;
  flex-grow:1;
  width: 30%;
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
}
`
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

h4{
  font-size: xx-large;
  text-align: center;
}

p{
  font-size: large;
  text-align: center;
}

input{
  width: 70%;
  background-color: ${colors.color1};
  border: 2px solid ${colors.color1};
  border-radius:8px;
  color: ${colors.color2};
  opacity:0.5;
  font-size: large;
  padding: 10px;
  margin-bottom:5px;

}

input[type=submit] {
  width:150px;
  background-color: ${colors.color2};
  color: white;
  border: 2px solid ${colors.color2};
  border-radius:4px;
  padding: 10px;
`
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
