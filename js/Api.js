function myFunction() {
    fetch("https://catfact.ninja/fact")
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        let txt = "";
          for (let x in data) {
            txt += data[x] + " ";
          document.getElementById("demo2").innerHTML = txt;
          };
      
        return data;
      })  
}