//Worked on vanilla js, not here tho. Something to do with state maybe? figure out later.
const text = document.querySelector(".name");
const textStr = text.textContent
const splitText = textStr.split("");

text.textContent = "";

for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>" 
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char+=1;
    if (char >= 6){
        complete();
        return;
    }
}

function complete(){
  clearInterval(timer);
  timer = null;
}

export default onTick;