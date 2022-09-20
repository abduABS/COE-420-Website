document.addEventListener("DOMContentLoaded", function(event) {

    console.log("hello!")

    document.getElementById('incsize').addEventListener("click",incrsize);
    function incrsize(){
        //increase size of all fonts on page
        document.body.style.fontSize = "xx-large";
    }

    document.getElementById('rstsize').addEventListener("click",rstsize);
    function rstsize(){
        //increase size of all fonts on page
        document.body.style.fontSize = "medium";
    }

    document.getElementById('chtype').addEventListener("click",comic);
    function comic(){
        //increase size of all fonts on page
        document.body.style.fontFamily = "Comic Sans MS"
    }


    const userAction = async () => {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=25.311&lon=55.489&units=metric&appid=db6c1ff7909afe98d34b65627ed19014');
        const myJson = await response.json(); //extract JSON from the http response
        console.log(myJson)
        var a = "Today's weather is "+ myJson.weather[0].main+" with a temperature of "+myJson.main.temp+"C"
        //set element text
        document.getElementById("weather").textContent = a;
    }

    userAction();


});