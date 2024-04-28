const url = "https://jsonplaceholder.typicode.com/users";

const form = document.getElementById('loginForm');

const button = form.querySelector('button')

function load(){
    button.addEventListener("click", function(e){
        e.preventDefault();
         fetch(url).then((response)=>{
            response.ok ? response.json()
            .then((data)=> {

                for (let i = 0; i < data.length; i++){
                const name = document.getElementById("username");
                const nameValue = name.value.toLowerCase();
                if (nameValue == data[i].username.toLowerCase()){
                    console.log("user found");
                    setTimeout(()=> {
                        window.location.href = "index1.html"
                    }, 500);
                    break;
                } else {
                    console.log("username is not found");
                }
                }
            }):pass
        })
    });
}

load();