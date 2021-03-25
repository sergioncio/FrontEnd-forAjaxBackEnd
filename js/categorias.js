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

xhr.open("GET","Http://localhost:5000/Categorias/categorias", false);
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization","Bearer " + token);

xhr.send(null);
var barraCategorias = document.getElementById("barra-categorias");
var position = document.getElementById("lista-categorias");

for (i = 0 ; i < result.length ; i++){
    var nombreCategoria = result[i]["nombre"];

    var categoria = document.createElement("div");  

    var h3Lista = document.createElement("h3");
    h3Lista.innerHTML = nombreCategoria;

    categoria.appendChild(h3Lista);

    var enlace = document.createElement("a");
    enlace.href = "#"+nombreCategoria;
    var span = document.createElement("span");
    span.className = "text-muted";
    span.innerHTML = nombreCategoria+" ";

    enlace.appendChild(span);
    barraCategorias.appendChild(enlace);

    var xhr1 = new XMLHttpRequest();
    //xhr.withCredentials=true;
    var cursos;
    xhr1.addEventListener("readystatechange", function(){
        if (this.readyState === 4){
            console.log(this.responseText);
            cursos = JSON.parse(this.responseText);
        }
    });

    xhr1.open("GET","Http://localhost:5000/Curso/categoria/"+(i+1), false);
    xhr1.setRequestHeader("Accept", "application/json");
    xhr1.setRequestHeader("Authorization","Bearer " + token);

    xhr1.send(null);

    var row = document.createElement("div");
    row.className = "row";
    row.id = nombreCategoria;

    for (j = 0 ; j < cursos.length ; j++){
        var titulo = cursos[j]["titulo"];
        var thumbnail = cursos[j]["thumbnail"];
        var descripcion = cursos[j]["descripcion"];
        var url = cursos[j]["url"];

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
        col.className = "col-sm-4 d-flex pb-3 card-deck";

        body.appendChild(h3);
        body.appendChild(para);
        body.appendChild(link);
        div.appendChild(img);
        div.appendChild(body);
        col.appendChild(div);
        row.appendChild(col);
        categoria.appendChild(row);
    }
    position.appendChild(categoria);
}