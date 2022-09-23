document.addEventListener("DOMContentLoaded", function(event) {

    console.log("hello!")

    document.getElementById('incsize').addEventListener("click",incrsize);
    function incrsize(){
        //increase size of all fonts on page
        document.body.style.fontSize = "xx-large";
        
        var h1Elements = document.getElementsByTagName("h1");
        for(var i = 0; i < h1Elements.length; i++) {
            h1Elements[i].style.fontSize = "120px";
        }

        var h2Elements = document.getElementsByTagName("h2");
        for(var i = 0; i < h2Elements.length; i++) {
            h2Elements[i].style.fontSize = "50px";
        }

        var h3Elements = document.getElementsByTagName("h3");
        for(var i = 0; i < h3Elements.length; i++) {
            h3Elements[i].style.fontSize = "xx-large";
        }

        var pElements = document.getElementsByTagName("p");
        for(var i = 0; i < pElements.length; i++) {
            pElements[i].style.fontSize = "40px";
        }

        var ulElements = document.getElementsByTagName("ul");
        for(var i = 0; i < ulElements.length; i++) {
            ulElements[i].style.fontSize = "32px";
        }

        var olElements = document.getElementsByTagName("ol");
        for(var i = 0; i < olElements.length; i++) {
            olElements[i].style.fontSize = "32px";
        }

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
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=25.2048&lon=55.2708&units=metric&appid=db6c1ff7909afe98d34b65627ed19014');
        const myJson = await response.json(); //extract JSON from the http response
        console.log(myJson)
        var a = "Today's weather is "+ myJson.weather[0].main+" with a temperature of "+myJson.main.temp+"C"
        //set element text
        document.getElementById("weather").textContent = a;
    }

    userAction();


});