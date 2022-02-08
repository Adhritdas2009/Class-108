function start(){
    navigator.mediaDevices.getUserMedia({ audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ZC0yp6uJ3/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("soundname").innerHTML=results[0].label;
        p = results[0].confidence * 100;
        document.getElementById("accu").innerHTML= p.toFixed(2) + "%";

        if (results[0].label == "Bottle Bell"){
            document.getElementById("alien1").src = "aliens-01.gif";
            document.getElementById("alien2").src= "aliens-02.png";
            document.getElementById("alien3").src= "aliens-03.png";
            document.getElementById("alien4").src="aliens-04.png";
        }

        else if (results[0].label == "Clap"){
            document.getElementById("alien1").src="aliens-01.png";
            document.getElementById("alien2").src="aliens-02.gif";
            document.getElementById("alien3").src="aliens-03.png";
            document.getElementById("alien4").src="aliens-04.png";
        }

        else if (results[0].label == "Mouse Clicking"){
            document.getElementById("alien1").src="aliens-01.png";
            document.getElementById("alien2").src="aliens-02.png";
            document.getElementById("alien3").src="aliens-03.gif";
            document.getElementById("alien4").src="aliens-04.png";
        }

        else if(results[0].label == "Background Noise"){
            document.getElementById("alien1").src="aliens-01.png";
            document.getElementById("alien2").src="aliens-02.png";
            document.getElementById("alien3").src="aliens-03.png";
            document.getElementById("alien4").src="aliens-04.gif";
        }
    }
}