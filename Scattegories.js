
let randomletterbtn =document.getElementById("randomletter")
let randomletter=document.getElementById("generaterandomletter")
randomletterbtn.addEventListener("click", function() {
    let x = Math.floor(Math.random() * (90 -64)) + 65;
    let randomltr=String.fromCharCode(x);
    randomletter.innerHTML=`<label> ${randomltr} </label>  `
})
let inputs=document.querySelectorAll(".input input")
let inputstext=document.querySelectorAll(".input p")
inputlist=[]

inputs.forEach(function(inputs){
    inputlist.push(inputs.value);

})
console.log(inputlist)
let firstinput=document.getElementById("firstinput")
let firstp=document.getElementById("firstp")
let p=""
if (firstinput.innerText.charAt(0) !== randomltr ){
    p="ERROR" ; 
    firstp.innerText=p

}

// inputlist.forEach(function(text) {
   // if (text.charAt(0) !== randomltr) {
    //    inputstext.forEach(function(error) {
      //      error.innerHTML=`<p> First  letter doesn't match , it should start with ${randomltr} </p>  `;
       //    });
 //      } 
 //  });
 //  let p="rosadofasd" 