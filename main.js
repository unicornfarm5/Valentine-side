console.log("connected to js")


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

//no hovered: the no-button moves around?
//Ide til teknik fra https://youtu.be/6ohVH0hQlD8

noButton.addEventListener('mouseover', () => {
    //making elements for reaction - ide fra
    const wrapperReact = wrapper.getBoundingClientRect();
    const noButtonReact = noButton.getBoundingClientRect();

    const i = Math.floor(Math.random()*(wrapperReact.width -noButtonReact.width))+1;
    const j = Math.floor(Math.random()*(wrapperReact.height -noButtonReact.height))+1;

    noButton.style.left = i+"px";
    noButton.style.top = j+"px";

    console.log("mouse was over no")
});

//for at siden kan bruges af telefonbrugere laver jeg samme flytte-funktion til nejknapen ved klik

noButton.addEventListener('click', () => {
    //making elements for reaction - ide fra
    const wrapperReact = wrapper.getBoundingClientRect();
    const noButtonReact = noButton.getBoundingClientRect();

    const i = Math.floor(Math.random()*(wrapperReact.width -noButtonReact.width))+1;
    const j = Math.floor(Math.random()*(wrapperReact.height -noButtonReact.height))+1;

    noButton.style.left = i+"px";
    noButton.style.top = j+"px";

    console.log("mouse was over no")
});

