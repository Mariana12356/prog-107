//https://teachablemachine.withgoogle.com/models/QjwzhjCRm/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio : true, video:false});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/QjwzhjCRm/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var felicidade = 0 ;
var neutro = 0 ;
var triste = 0 ;
function gotResults(error, results){
    if(error) {
        console.error(error);
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        resultado = results[0].label;
        console.log(resultado);

        document.getElementById("result_label").innerHTML = 'Som detectado de - '+ results[0].label;
        document.getElementById("result_count").innerHTML = 'Felicidade detectado - '+felicidade+ ' Triste detectado - '+triste+ ' Neutro detectado - '+neutro;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

       img = document.getElementById('animal_image');


    
       if(resultado == 'felicidade') {
        img.src = 'feliz.gif';
        felicidade = felicidade+1;
       }

     else if(resultado == 'triste') {
        img.src = 'triste.gif';
        triste = triste+1;
       }

     else if(resultado == 'neutro') {
        img.src = 'neutro.gif';
        neutro = neutro+1;
       } else {
        img.src = 'ouvir.gif';
        console.log("else");
    
    }
}}