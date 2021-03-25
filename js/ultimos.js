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
        //console.log(this.responseText);
        result = JSON.parse(this.responseText);
    }
});

xhr.open("GET","Http://localhost:5000/Curso/ultimos", false);
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization","Bearer " + token);

xhr.send(null);
var position = document.getElementById("ultimos");
var row = document.createElement("div");
row.className = "row";

for (i = 0 ; i < result.length ; i++){
    var titulo = result[i]["titulo"];
    var thumbnail = result[i]["thumbnail"];
    var descripcion = result[i]["descripcion"];
    var url = result[i]["url"];

    var div = document.createElement("div");  
    div.className = "card carta";
    //div.style = "width: 18rem;";

    var h3 = document.createElement("h3");                
    h3.innerHTML = titulo; 
    h3.className = "card-title";

    var img = document.createElement("img");
    img.src = thumbnail;
    img.className = "card-img-top";
    img.alt = titulo;

    var para = document.createElement("p");
    para.innerHTML = descripcion;
    para.className = "card-text";

    var body = document.createElement("div");
    body.className = "card-body d-flex flex-column";

    var link = document.createElement("a");
    link.href = url;
    link.innerHTML = "VIEW";
    link.className = "btn btn-primary mt-auto";
    link.style = "max-width: 12rem;";

    var col = document.createElement("div");
    col.className = "col-sm-4 d-flex pb-4 card-deck";

    body.appendChild(h3);
    body.appendChild(para);
    body.appendChild(link);
    div.appendChild(img);
    div.appendChild(body);
    col.appendChild(div);
    row.appendChild(col);
    position.appendChild(row);
} 