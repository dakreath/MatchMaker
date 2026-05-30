function calculateLove(){
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if(!name1 || !name2){
        alert("Required! You must enter both names.");
        return;
    }

    if(name1 === name2){
        alert("This is self-love. Sorry, we cannot compute your self-esteem!."");
        return;
    
    }

    
    const lovePercentage = Math.floor(Math.random() * 101);
    const result = document.getElementById("result");
    result.innerHTML = `${name1} and ${name2}'s Love Percentage: ${lovePercentage}%`;
   
    if(lovePercentage == 0){
        result.innerHTML += "<br> Zero attraction. Put in the work or quit!";
    } 

    else if(lovePercentage < 40){
        result.innerHTML += "<br> Little attraction is imminent! Give it time before you log off!";
    } 

    else if(lovePercentage < 50){
        result.innerHTML += "<br> You are close! Just a little bit  of faith and patience.";
    } 
    
      else if(lovePercentage == 50){
        result.innerHTML += "<br> Tie! OMG! You're crushes!";
    } 

    else if(lovePercentage <= 85){
        result.innerHTML += "<br> Both of you are signed. You can fire!";
    } 

    else if(lovePercentage < 99){
        result.innerHTML += "<br> Just one last move to true love! Recharge it to the max.";
    } 

    else{
        result.innerHTML += "<br> Congratulation! A perfect match! You've unlocked the secret of love!";
    }

    document.getElementById("name1").value = "";

    document.getElementById("name2").value = "";
}


   
