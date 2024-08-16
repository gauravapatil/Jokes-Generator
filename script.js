let api="https://icanhazdadjoke.com";
async function jokeGenerator(){
    let response=await fetch(api,{headers: {
        'Accept': 'application/json'} 
    })
    
    let data=await response.json();
    console.log(data);

    
    h2.innerText=data.joke;
    

   
    console.log(data);
}
// jokeGenerator();

let h2=document.getElementById("jokes");
let btn=document.getElementById("btn");
btn.addEventListener("click",jokeGenerator);
