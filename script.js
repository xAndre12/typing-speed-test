let textArea = document.querySelector("textarea");
let clock = document.querySelector(".timer");
let retry = document.querySelector(".tryAgain");
let car = document.querySelector(".car");

let text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas reiciendis optio beatae ipsum, numquam alias at explicabo! Natus voluptate ipsam suscipit, blanditiis dignissimos maiores nam id esse aut magnam possimus!";
const letters = text.split("");

const paragraf = document.querySelector(".text");
let i = 0;
let spanArray = [];
let firstPress = false;
let finish = false;
car.style.left = "0px";

for (let index = 0; index < letters.length; index++) {
  const letter = document.createElement("span");
  letter.innerHTML = letters[index];
  letter.style.color = "gray";
  spanArray.push(letter);
  paragraf.appendChild(letter);
}

textArea.addEventListener("keydown", (event) => {
  if (!firstPress) {
    timer();
    firstPress = true;
  }

  if (event.key === "Backspace" && i > 0) {
      if(textArea.value[textArea.value.length - 1] === letters[i - 1]){
        spanArray[i - 1].style.color = "gray";
        i--;
        car.style.left = parseInt(car.style.left) - 3.2 + "px";
      }
   
  } else if (event.key === letters[i]) {
    spanArray[i].style.color = "black";
    i++;
    car.style.left = parseInt(car.style.left) + 3.2 + "px"; 
  }
});

const timer = () => {
  let index = 0;
  setInterval(()=>{
    console.log(index)
    if (i !== letters.length) {
      clock.innerHTML = index;
    }
    if(i === letters.length){
      retry.style.visibility = "visible";
    }
    index ++;
  }, 1000)
};

retry.addEventListener("click", ()=>{
  finish = false;
  i=0;
  retry.style.visibility = "hidden";
  textArea.value = "";
  clock.innerHTML= 0;
  firstPress = false;
  paragraf.innerHTML = "";
  spanArray = [];
  car.style.left = "0px";
  for (let index = 0; index < letters.length; index++) {
    const letter = document.createElement("span");
    letter.innerHTML = letters[index];
    letter.style.color = "gray";
    spanArray.push(letter);
    paragraf.appendChild(letter);
  }
  
})