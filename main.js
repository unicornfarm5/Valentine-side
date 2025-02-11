//collecting the elements:
const yesButton = document.querySelector("#yes-button");
const noButton = document.querySelector("#no-button");
const wrapper = document.querySelector("section")


//yes clicked: show message
    yesButton.addEventListener("click", ()=> {
        //makeing the message
        const yesMessage = document.createElement("p")
        yesMessage.innerText="Yay, Im so happy! <3"
        //collection div for message
        const divELement = document.querySelector("#message");
        divELement.append(yesMessage)
    })

//mouse over NO - button moves
//Idea from:  https://youtu.be/6ohVH0hQlD8

noButton.addEventListener('mouseover', () => {
    //making elements for reaction - ide fra https://www.youtube.com/watch?v=6ohVH0hQlD8
    const noButtonReact = noButton.getBoundingClientRect();

    const i = Math.random()*200;
    const j = Math.random()*200;

    noButton.style.left = i+"px";
    noButton.style.top = j+"px";

    console.log("mouse was over no")
});



//also adding the button-mover when clicked for good measure - in case of phone-users
noButton.addEventListener('click', () => {
    //making elements for reaction - ide fra
    const noButtonReact = noButton.getBoundingClientRect();

    const i = Math.random()*200;
    const j = Math.random()*200;

    noButton.style.left = i+"px";
    noButton.style.top = j+"px";

    console.log("no clicked")
});