function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
var token = getCookie("token");


var xhr = new XMLHttpRequest();
//xhr.withCredentials=true;
var result;
xhr.addEventListener("readystatechange", function(){
    if (this.readyState === 4){
        console.log(this.responseText);
        autores = JSON.parse(this.responseText);
    }
});

xhr.open("GET","Http://localhost:5000/Autores/autores", false);
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization","Bearer " + token);

xhr.send(null);

var position = document.getElementById("autores");
var row = document.createElement("div");
row.className = "row";

for (i = 0 ; i < autores.length ; i++){
    var nombre = autores[i]["nombre"];
    var thumbnail = autores[i]["thumbnail"];
    var valoracion = autores[i]["calificacion"];

    var div = document.createElement("div");  
    div.className = "card";
    //div.style = "width: 30rem;";

    var h4 = document.createElement("h4");                
    h4.innerHTML = nombre+ " <i class='fas fa-star'></i> " +valoracion; 
    h4.className = "card-text";

    var img = document.createElement("img");
    img.src = thumbnail;
    img.className = "card-img-top foto-autor";
    img.alt = nombre;

    var body = document.createElement("div");
    body.className = "card-body d-flex flex-column";
    //body.style = "max-height: 1rem;";

    var col = document.createElement("div");
    col.className = "col-sm-3 d-flex pb-3";

    body.appendChild(h4);
    div.appendChild(img);
    div.appendChild(body);
    col.appendChild(div);
    row.appendChild(col);
    position.appendChild(row);
} 