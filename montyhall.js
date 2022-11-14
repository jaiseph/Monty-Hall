var choices = ['goat', 'car', 'goat'];

//shuffle(choices); 

var one = choices[0];

var two = choices[1];

var three = choices[2];


let eins = document.getElementById("buttonone");
let zwei = document.getElementById("buttontwo");
let drei = document.getElementById("buttonthree");


let uno = document.getElementById("SwitchO");
let dos = document.getElementById("SwitchT");
let tres = document.getElementById("SwitchTH");



let une = document.getElementById("StayO");
let deux = document.getElementById("StayT");
let trois = document.getElementById("StayTH");







//shuffle array



function shuffleArray(choices) {
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }
console.log(choices);
}


 
shuffleArray(choices);



















function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);
}






for (i = 0; i < choices.length; i++){ 
    
    
    
    
    
document.write("<div class='card'>",
        "<div class='card-inner'>",
        
            
            
            "<div class='card__face card__face--front'>",
                "<h2>" + 'back of card' + "</h2>",
            "</div>",
               
            "<div class='card__face card__face--back'>",
                   
                "<h2>"  +  choices[i] + "</h2>",
                   
                   
            "</div>",
        "</div>",
    
    "</div>",
    
    "</br>",


           
               
               
               
               



);


};











const card = document.querySelectorAll('.card-inner');

card.forEach(card =>{

card.addEventListener('click', function(){
    
    card.classList.toggle('is-flipped');
    
});

})







const yeh = document.querySelectorAll('.card-inner');

function rotate(){
    
    //document.getElementsByClassName('is-flipped').classList.toggle('is-flipped');
    
    
    
   if(choices[1] == 'goat') {
       
       yeh[1].classList.toggle('is-flipped');
     
    } else {
        
        
        yeh[2].classList.toggle('is-flipped');
        
    };
    
   eins.style.display = "none"; 
   zwei.style.display = "none"; 
  drei.style.display = "none"; 
    
    
    uno.style.display = "block"; 
    une.style.display = "block"; 
   
    
    
};


//rotate(); 





 function rotateT(){
    
   if(choices[0] == 'goat') {
       
       yeh[0].classList.toggle('is-flipped');
     
    } else {
        
        
        yeh[2].classList.toggle('is-flipped');
        
    };
    
     
     
     eins.style.display = "none"; 
   zwei.style.display = "none"; 
  drei.style.display = "none"; 
    
    
    deux.style.display = "block"; 
    dos.style.display = "block"; 
   
};





  function rotateTH(){
    
  if(choices[0] == 'goat') {
       
       yeh[0].classList.toggle('is-flipped');
     
    } else {
        
        
        yeh[1].classList.toggle('is-flipped');
        
    };
    
      
      eins.style.display = "none"; 
   zwei.style.display = "none"; 
  drei.style.display = "none"; 
    
    
   
    trois.style.display = "block"; 
    tres.style.display = "block";
    
};







function changeO(){
    
  if(choices[1] == 'goat') {
       
       yeh[2].classList.toggle('is-flipped');
     
    } else {
        
        
        yeh[1].classList.toggle('is-flipped');
        
    };
    
    
    uno.style.display = "none"; 
    une.style.display = "none"; 
    
    
};









function changeT(){
    
  if(choices[0] == 'goat') {
       
       yeh[2].classList.toggle('is-flipped');
     
    } else {
        
        
        yeh[0].classList.toggle('is-flipped');
        
    };
    
    
    
  dos.style.display = "none"; 
    deux.style.display = "none"; 
    
};










function changeTH(){
    
  if(choices[1] == 'goat') {
       
       yeh[0].classList.toggle('is-flipped');
     
    } else {
        
        
        yeh[1].classList.toggle('is-flipped');
        
    };
    
    
   
    trois.style.display = "none"; 
    tres.style.display = "none";
    
    
};







function stayO(){
    
 
       
       yeh[0].classList.toggle('is-flipped');
     
   
    uno.style.display = "none"; 
    une.style.display = "none";
    
};




 function stayT(){
    
 
       
       yeh[1].classList.toggle('is-flipped');
     
   dos.style.display = "none"; 
    deux.style.display = "none";
    
    
};







 function stayTH(){
    
 
       
       yeh[2].classList.toggle('is-flipped');
     
   
    tres.style.display = "none"; 
    trois.style.display = "none";
    
};
