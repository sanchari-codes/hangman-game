let word="umbrella";
let usedletters=[];
let guessedWord=Array(word.length).fill("_");
document.getElementById("word").innerText=guessedWord.join(" ");
let chances=12;
document.getElementById("n").value=chances;

function checkLetter()
{
    if(chances>0){
    let input=document.getElementById("guessInput");//grabs the textbox from html
    let guess=input.value;//the actual value of the textbox
    if(usedletters.includes(guess))
    {
        document.getElementById("message").innerText="Letter already used!";
        input.value="";
        return;
    }
    usedletters.push(guess);
    document.getElementById("usedletters").innerText=usedletters.join(" , ");
    for(let i=0;i<word.length;i++)
    {
        if(word[i]===guess)
        {
            guessedWord[i]=guess;
        }
    }
    document.getElementById("word").innerText=guessedWord.join(" ");
    input.value="";
    chances--;
    document.getElementById("n").value=chances;
    if(!guessedWord.includes("_"))
    {
        document.getElementById("message").innerText="YOU WINNN";
    }
   
    if(chances===0&&guessedWord.includes("_"))
    {
        document.getElementById("message").innerText="YOU LOST😭 The word was: " + word;
    }
}
}