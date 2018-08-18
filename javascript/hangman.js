


let pressToContinue="something";
let gameON=false;
let initState = document.getElementById("initialState");
let playAgain=false;
let readyMode=false;
let pressedKey="";
let charAtWordIndex=0;
let pressedKeyCode=0;
let isWin=false;
document.onkeydown =function(e){
    pressedKey=e.key;  
    pressedKeyCode=e.keyCode;

if(playAgain) {
                    
   // console.log("***in PLAY AGAIN =TRUE and pressedKeyCode is "+ pressedKeyCode);
        
//####### GAME PLAY BEGINS HERE #########//

  if  ((pressedKeyCode >= 65 && pressedKeyCode <= 90)||(pressedKeyCode>=97 && pressedKeyCode<=122)) {
      
        document.getElementById("letsPlay").innerHTML = "AVAILABLE: " + hangman.alphabetLeft.join(" ");
        //document.getElementById("yourWord").innerHTML = hangman.userTries;
        pressedKey=pressedKey.toLowerCase();
        hangman.checkifUsed()+ " is used";
        hangman.checkLetter();
        hangman.checkState(hangman.userTries);
        //hangman.checkIfWin();

        //console.log("USER SCORE" + hangman.userScore);
       hangman.checkIfWin();
       if(hangman.win===true){
           document.getElementById("pressAnyKey").innerHTML = hangman.userProgressCharArray.join(" ");
           document.getElementById("Bob").innerHTML = hangman.computerScore;
           document.getElementById("Laura").innerHTML = hangman.userScore;
          //     
          document.getElementById("initialState").src='images/coop.jpg';
       
           //alert("Better than Damn Good Coffee!");
           hangman.restGame();
       }else{
        document.getElementById("pressAnyKey").innerHTML = hangman.userProgressCharArray.join(" ");
           //alert("no win yet");
       }
       
        // document.getElementById("letsPlay").innerHTML = ("AVAILABLE: " + hangman.alphabetLeft.join(" "));
           
    }
  
        //I need to create a function here that will reset all my variables
 } else {
        playAgain=true;
        document.getElementById("letsPlay").innerHTML = "Select a letter!!";
        //console.log(hangman.playWords);
      
       // document.getElementById("alphaLeft").innerHTML = hangman.alphabetLeft.join(" ");
        hangman.startGame();
        document.getElementById("pressAnyKey").innerHTML = hangman.userProgressCharArray.join(" ");

   
    }//end if
    


   //console.log("giving control back to main method");
}

   
let hangman = {
    randomNumber:0,
    win:false,
    indexOfChecker:0,
    isUsedLetter:false,
    rightGuess:false,
    userScore: 0, 
    computerScore:0, 
  //  state:initState,//bring back whatever the state of hangman we are in
    userTries:0,
    correctGuess:false,//added this was working prior 1004pm wed
    word:"",
    secretWordCharArray:[],
    userProgressCharArray:[],
    alreadySelected:[],
    alphabetLeft:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  // playWords: ["testwordone","testwordtwo","testwordagain","miami","seattle","testwordone","testwordtwo","testwordagain","miami","seattle","testwordone","testwordtwo","testwordagain","miami","seattle"],
   playWords: ["bob","laura","leland","lynch","waldo","roadhouse","owls","lodge","coffee","pie","renault","audrey","madie","fingernail"],
    //anotherGame: playAgain,
    //readyMode: readyMode,

//--------------------------------------startGame
   startGame: function(){
    document.getElementById("pressAnyKey").innerHTML = this.userProgressCharArray.join(" ");
      // alert("AT startGame");
    this.randomNumber=Math.floor((Math.random() * 14    ));//0-9 so array lenght is 10
    //alert(randomNumber);
    let whateverit =this.playWords[this.randomNumber];
   // alert(whateverit);//his.word);
    this.word=whateverit;
   //console.log("YAY " +this.word + " now leaving startGame");//his.word);

    this.splitWord();
        //this.alert(this.userProgressCharArray);
        //console.log("start game USER SCORE" + this.userTries);
    },
//--------------------------------------SplitWord
splitWord: function(){
    
    this.secretWordCharArray = this.word.split(" ");
  
    for(let a=0; a<this.word.length; a++){
        this.secretWordCharArray[a]=this.word.charAt(a);
        if(this.secretWordCharArray[a] === " "){
            this.userProgressCharArray[a]=" ";
        }
        else{
            this.userProgressCharArray[a]="-";
        }

    }
  
  
    //console.log("split word USER SCORE" + this.userTries);
},
//--------------------------------------------------->   checkLetter

checkLetter: function(){
   if(this.isUsedLetter===false){   
   this.rightGuess=false;
    //console.log("inCheckLetter  today");

           for(let a=0; a<this.secretWordCharArray.length; a++){
            if (pressedKey===this.secretWordCharArray[a]){
               //console.log("inCheckLetter- I guess right!" + pressedKey)
                this.rightGuess=true;
                this.userProgressCharArray[a]=pressedKey;
                this.indexOfChecker++;
                document.getElementById("pressAnyKey").innerHTML = this.userProgressCharArray.join(" ");
               // console.log("loop through array and secretWord  CheckLetterFUnction here is where I add USER SCORE" + this.userTries);
                //document.getElementById("alphaLeft").innerHTML = this.alphabetLeft;

            }
        }
    if(this.rightGuess===false){
        this.userTries=this.userTries+1;
        console.log("just added 1 CheckLetterFUnction here is where I add USER SCORE" + this.userTries);
        this.rightGuess=true;
    }  else{
        this.rightGuess=false;
        
    
    }
}
//added this


    
},
//----------------------------------------->  checkifUsed
checkifUsed: function(){//this is working 
    this.isUsedLetter=true;
        for(let a=0; a<26; a++){    
           
            if(this.alphabetLeft[a]===pressedKey){
                this.alphabetLeft[a]=" ";
                this.isUsedLetter=false;
                //document.getElementById("alphaLeft").innerHTML = this.alphabetLeft.join(" ");
                return(this.isUsedLetter);
            }
       
  
        }
        
        return(this.isUsedLetter);
        
},
checkState: function(whatIsIt){ 
   // alert("IN CHECK STATE");
    switch(whatIsIt){
        case 1: {
          
            document.getElementById("initialState").src='images/head.jpg';
            this.win=false;
            break;
        }
        case 2: {
           
            document.getElementById("initialState").src='images/body.jpg';
            this.win=false;
            break;
            
        }
        case 3: {
          
            document.getElementById("initialState").src='images/arm1.jpg';
            this.win=false;
            break;
            
        }
        case 4: {
           
            document.getElementById("initialState").src='images/arm2.jpg';
            this.win=false;
            break;
            
        }
        case 5: {
          
            document.getElementById("initialState").src='images/leg1.jpg';
            this.win=false;
            break;
            
        }
        case  6 : {
            
           
            this.computerScore++;
            document.getElementById("Bob").innerHTML = this.computerScore;
            document.getElementById("Laura").innerHTML = this.userScore;
            document.getElementById("initialState").src='images/redDead.jpg';
            document.getElementById("prevWord").innerHTML="Previous Word: "+ this.word;
            
    
                document.getElementById("initialState").src='images/BOB.png';
                 //document.getElementById("pressAnyKey").innerHTML=hangman.word;
             //   alert(this.word);
            
            
             
            
            this.win=false;
            //document.getElementById("pressAnyKey").innerHTML = this.userProgressCharArray.join(" ");
            //document.getElementById("pressAnyKey").innerHTML=this.word;
           // alert("I should lose");
           this.restGame();
            break;
        }
 
        
        default:
       // document.getElementById("yourWord").innerHTML = ("USER TRIES: "+ this.userTries);
       // document.getElementById("alphaLeft").innerHTML = this.alphabetLeft.join(" ");
    }

},

checkIfWin: function(){

    document.getElementById('letsPlay').innerHTML = "AVAILABLE: " + hangman.alphabetLeft.join(" ");
    if(this.userTries< 6){
        for(let x=0; x<this.userProgressCharArray.length; x++){
            if(this.userProgressCharArray[x]==="-"){
                console.log(this.userProgressCharArray[x]);
                return false;
            }

        }
    if(this.indexOfChecker===this.userProgressCharArray.length){
    this.userScore++;
    document.getElementById("Bob").innerHTML = hangman.computerScore;            
    document.getElementById("Laura").innerHTML = hangman.userScore;
    document.getElementById("initialState").src='images/coop.jpg';
    this.win=true;
    document.getElementById("prevWord").innerHTML="Previous Word: "+ this.word;
    return true;
    }
    }

    
   // alert("this is a win");
},

restGame: function() {
   setTimeout(function () {

    document.getElementById("initialState").src='images/initialState.jpg';
    document.getElementById("pressAnyKey").innerHTML = hangman.userProgressCharArray.join(" ");
 
    //alert("end of resetGame");

        
    }, 500);
    this.randomNumber=0
    this.win=false;
    this.indexOfChecker=0;
    this.isUsedLetter=false;
    this.rightGuess=false;
    this.userTries=0;
    this.correctGuess=false;//added this was working prior 1004pm wed
    this.word="";
    this.secretWordCharArray=[""];
    this.userProgressCharArray=[""];
    this.alreadySelected=[""];
    this.alphabetLeft=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    document.getElementById("pressAnyKey").innerHTML = this.userProgressCharArray.join(" ");
    this.startGame();

 
   // document.getElementById("initialState").src='initialState.jpg';
}




}//end of object

    
 