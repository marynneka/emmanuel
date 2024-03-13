document.addEventListener(
    "DOMContentLoaded", function(){
    //    get your guess number from the input value 
    const inputVal = document.getElementById("input");

    // get your button element 
    const inputButton = document.querySelector(".btn");

    // actualguess 
    const actualGuess = 10;

    // track number of guess 
    let remainiingChances = 5;

    // check if guess is the same as the user's guess 
    function checkGuess(userGuess,actual){
        if (userGuess === ""){
            alert("pls fill the space");
        }

        if (userGuess !== "" && !isNaN(userGuess)){
        remainiingChances--;
        

        if(Number(userGuess) === actualGuess){
            alert("Correct guess!");
        } else{
            alert(`Wrong guess! You have ${remainiingChances} chances Left.`);
        }

        if(remainiingChances === 0){
            alert(` Game over! The correct guess was ${actual}`);

            // if you want to disable the button 
            inputButton.disabled = true;
        }
      }
    }
    
    inputButton.addEventListener("click", function(){
        checkGuess(inputVal.value, actualGuess);
    
    });
    });