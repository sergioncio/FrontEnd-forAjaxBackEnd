var data = JSON.stringify({"username":"test","password":"test"});

var xhr = new XMLHttpRequest();
//xhr.withCredentials=true;

xhr.addEventListener("readystatechange", function(){
    if (this.readyState === 4){
        //console.log(this.responseText);
        var response = this.responseText;
        var JSONresponse = JSON.parse(response);
        token = JSONresponse["token"];
        document.cookie = `token=${token}`
    }
});

xhr.open("POST","Http://localhost:5000/Users/authenticate", false);
xhr.setRequestHeader("Content-Type","application/json");

xhr.send(data);