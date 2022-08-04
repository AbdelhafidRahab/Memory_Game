let start_button = document.querySelector(".start-button");
let name_field = document.querySelector(".name-field");
let container_start_button_name_field = document.querySelector(".container-start-button-name-field");
let overlay = document.querySelector(".overlay");
let welcom = document.querySelector(".welcom span");
let cards = document.querySelectorAll("main .card");
let images = document.querySelectorAll("main .card img");
let one=0,two=0;
let moves = document.querySelector(".moves span");
let score = document.querySelector(".score span");
let time = document.querySelector(".time span");


start_button.onclick = function() {
    let timing = setInterval(()=>{
        if (time.innerHTML != 0) {
            time.innerHTML--;
        }
        if (score.innerHTML == 10 || time.innerHTML == 0) {
            let end_overlay = document.createElement("div");
            end_overlay.classList.toggle("overlay");
            document.body.appendChild(end_overlay);
            if (score.innerHTML == 10) {
                let winner = document.createElement("span");
                let winner_text = document.createTextNode("You Win");
                winner.classList.toggle("winner");
                winner.append(winner_text);
                end_overlay.appendChild(winner);
                setTimeout(()=>{
                    winner.remove();
                    let another_round = document.createElement("button");
                    another_round.classList.toggle("another_round");
                    let another_round_text = document.createTextNode("Another Round");
                    another_round.append(another_round_text);
                    end_overlay.append(another_round);
                    another_round.onclick = function() {
                        location.reload();
                    }
                },2000);
            }else{
                let loser = document.createElement("span");
                let loser_text = document.createTextNode("You lose");
                loser.classList.toggle("loser");
                loser.append(loser_text);
                end_overlay.appendChild(loser);
                setTimeout(()=>{
                    loser.remove();
                    let Try_again = document.createElement("button");
                    Try_again.classList.toggle("Try_again");
                    let Try_again_text = document.createTextNode("Try Again");
                    Try_again.append(Try_again_text);
                    end_overlay.append(Try_again);
                    Try_again.onclick = function() {
                        location.reload();
                    }
                },2000);
            }
            clearInterval(timing);
        }
    },1000);
    if (name_field.value == "") {
        welcom.innerHTML = "Anonymous";
    }else{
        welcom.innerHTML = String(name_field.value).charAt(0).toUpperCase() + String(name_field.value).slice(1);
    }
    container_start_button_name_field.remove();
    overlay.remove();
}
cards.forEach((e) => {
    e.onclick = function() {
            e.firstChild.style.transform = "rotateY(0deg)";  
            if (one == 0) {
                one = e.firstChild;
            }else if (two == 0) {
                two = e.firstChild;
            }
        if (one!=0 && two!=0) {
            moves.innerHTML++;
            if (one.src == two.src && one.id != two.id) {
                score.innerHTML++;
                one.parentElement.style.pointerEvents = "none";
                two.parentElement.style.pointerEvents = "none";
                one =0;
                two =0;
            }else {
                setTimeout(() => {
                    one.removeAttribute("style");
                    two.removeAttribute("style");
                    one = 0;
                    two = 0;
                }, 600);
            }
        }
        
    }
});
