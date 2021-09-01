


var points = 0;
function buttonClick(){
    var randomNumber = Math.floor(Math.random()*6)+1;
    points=points+randomNumber
    var imgSrc = "/images/dice"+randomNumber+".png" ;
    document.querySelectorAll("img")[0].setAttribute("src",imgSrc);
    if(points % 7== 0){
        points=0
    }
    document.querySelector(".points").innerHTML = "account points  " + points;
    if(points >= 100){
        document.querySelector(".score").
        innerHTML="Congratulation You have Reached 100! Refresh to play Again";
        points=0;
    }
    console.log(randomNumber)
}
