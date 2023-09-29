const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const choicesClass = document.querySelector("#choices");
const decideClass = document.querySelector(".decide");
const result = document.querySelector(".result")
const choices = ["rock", "paper", "scissor"];

const containerClass = document.querySelector(".container");

const matchClass = document.querySelector(".match");
console.log(matchClass)

rock.addEventListener("click", () => {

    const randomIndex = Math.floor(Math.random() * choices.length);
    const userMove = "rock";
    const computerMove = choices[randomIndex];

    const btn1 = document.createElement("button");
    const img1 = document.createElement("img");
    img1.src = "images/rock.png"

    btn1.appendChild(img1);
    matchClass.appendChild(btn1);

    const btn2 = document.createElement("button");
    const h1 = document.createElement("h1");
    h1.innerHTML = "V.S";

    btn2.appendChild(h1);
    matchClass.appendChild(btn2);

    const btn3 = document.createElement("button");
    const img2 = document.createElement("img");
    img2.src = "images/" + computerMove + ".png";

    btn3.appendChild(img2);
    matchClass.appendChild(btn3);
    
    
    winOrLose(userMove, computerMove);
    containerClass.style.marginTop = "4rem";
    containerClass.style.height = "500px";
})

paper.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const userMove = "paper";
    const computerMove = choices[randomIndex];

    const btn1 = document.createElement("button");
    const img1 = document.createElement("img");
    img1.src = "images/paper.png"

    btn1.appendChild(img1);
    matchClass.appendChild(btn1);

    const btn2 = document.createElement("button");
    const h1 = document.createElement("h1");
    h1.innerHTML = "V.S";

    btn2.appendChild(h1);
    matchClass.appendChild(btn2);

    const btn3 = document.createElement("button");
    const img2 = document.createElement("img");
    img2.src = "images/" + computerMove + ".png";

    btn3.appendChild(img2);
    matchClass.appendChild(btn3);
    
    winOrLose(userMove, computerMove);
    containerClass.style.marginTop = "4rem";
    containerClass.style.height = "500px";

})

scissor.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const userMove = "scissor";
    const computerMove = choices[randomIndex];

    const btn1 = document.createElement("button");
    const img1 = document.createElement("img");
    img1.src = "images/scissor.png"

    btn1.appendChild(img1);
    matchClass.appendChild(btn1);

    const btn2 = document.createElement("button");
    const h1 = document.createElement("h1");
    h1.innerHTML = "V.S";

    btn2.appendChild(h1);
    matchClass.appendChild(btn2);

    const btn3 = document.createElement("button");
    const img2 = document.createElement("img");
    img2.src = "images/" + computerMove + ".png";

    btn3.appendChild(img2);
    matchClass.appendChild(btn3);
    
    winOrLose(userMove, computerMove);
    containerClass.style.marginTop = "4rem";
    containerClass.style.height = "500px";
})


function winOrLose(user, computer)
{
    if (user === "rock")
    {   
        switch (computer)
        {
            case "rock":
                result.innerHTML = "ITS A TIE."
                break;
            
            case "paper":
                result.innerHTML = "YOU LOSE."
                break;

            case "scissor":
                result.innerHTML = "YOU WIN."
                break;
        }

        decideClass.style.display = "block";

    }

    if (user === "paper")
    {   
        switch (computer)
        {
            case "rock":
                result.innerHTML = "YOU WIN."
                break;
            
            case "paper":
                result.innerHTML = "ITS A TIE."
                break;

            case "scissor":
                result.innerHTML = "YOU LOSE."
                break;
        }

        containerClass.style.height = "480px";
        decideClass.style.display = "block";
    }

    if (user === "scissor")
    {   
        switch (computer)
        {
            case "rock":
                result.innerHTML = "YOU LOSE."
                break;
            
            case "paper":
                result.innerHTML = "YOU WIN."
                break;

            case "scissor":
                result.innerHTML = "ITS A TIE."
                break;
        }

        containerClass.style.height = "480px";
        decideClass.style.display = "block";

    }
}

const reset =  document.querySelector(".reset");

reset.addEventListener("click", () => {
    matchClass.innerHTML = "";
    decideClass.style.display = "none";
    containerClass.style.height = "200px";
    containerClass.style.marginTop = "11rem";
})