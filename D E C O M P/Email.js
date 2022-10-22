

function enviar(){
  var Email = document.getElementById("email").value;
  alert("Funcionou")

    fetch("http://localhost:8081/cadastrar", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          
            body: JSON.stringify({
                email : Email
            })

        }).then(function(res){console.log(res)})
          .catch(function(res){console.log(res)})
          
}