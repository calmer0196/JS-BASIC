const greetingForm = document.querySelector(".js-greetingsForm"),
    greetingInput = greetingForm.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = greetingInput.value;
    console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    greetingForm.classList.add(SHOWING_CN);
    greetingForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){   // 로그인이 되었을 때 환영 문구
    greetingForm.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){ // 커런트 유저 값이 없을 때
        askForName();
    } else {    // 커런트 유저 값이 있을 때
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();