import game from "../image/Ernesto/diceGame.jpg";
import background from "../image/Ernesto/bit.jpg";
import face from "../image/Ernesto/face.jpg";
import recipe from "../image/Ernesto/recipe.jpg";
import coding from "../image/Ernesto/api.jpg";
import coming from "../image/Ernesto/coming.jpg";

const portfolios = [
  {
    id: 1,
    category: "REACT",
    image: background,
    link1: "https://cryptoernesto.netlify.app/",
    link2: "https://cryptoernesto.netlify.app",
    title: "Cryptocurrency App",
    text: "Reactjs,Redux Toolkit,Chart.js,RapidAPI",
  },
  {
    id: 2,
    category: "REACT",
    image: face,
    link1: "https://github.com/Ernestocanada/facedete-api",
    link2: "https://facepicdetection.herokuapp.com",
    title: "Image recognition app",
    text: "Image recognition app using a Machine Learning API",
  },
  {
    id: 3,
    category: "JAVASCRIPT",
    image: recipe,
    link1: "https://github.com/Ernestocanada/turecipes",
    link2: "https://turecipes.netlify.app",
    title: "Recipe Application",
    text: "Recipe Application with custom recipe uploads",
  },
  {
    id: 4,
    category: "GAME",
    image: game,
    link1: "https://github.com/Ernestocanada/Game/tree/master",
    link2: "https://ernestocanada.github.io/Game/",
    title: "Roll a Dice",
    text: "CSS 40%, JS 36%, HTML 24%",
  },
  {
    id: 5,
    category: "NODE.JS",
    image: coding,
    link1: "https://github.com/Ernestocanada/facedete-api",
    link2: "https://facepicdetection.herokuapp.com/",
    title: "API Nodejs Express Facedete-API",
    text: "API Nodejs Express",
  },
  {
    id: 6,
    category: "REACT",
    image: coming,
    link1: "https://github.com/Ernestocanada",
    link2: "https://github.com/Ernestocanada",
    title: "Coming soon!",
    text: "Coming soon!",
  },
];

export default portfolios;
