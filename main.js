import './style.css'

const button = document.getElementById('button');
const title = document.getElementById('h1');

const COLORS_API = "https://www.thecolorapi.com/id?rgb=rgb";

button.addEventListener('click', () => {

  let R = getRandomNum(0, 255);
  let G = getRandomNum(0, 255);
  let B = getRandomNum(0, 255);

  fetch(COLORS_API + `(${R},${G},${B})`)
    .then(response => {
       if(response.status == 200){
         response.json()
         .then((data) => {
           document.body.style.backgroundColor = data.hex.value;
           title.innerHTML = 'Background color : ' + data.name.value;
         })
       }
    })
})

function getRandomNum(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  let num = Math.floor(Math.random() * (max - min +1)) + min;
  return num;
}
