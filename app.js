//selector
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

//eventlistener
keys.forEach (key=>{
    key.addEventListener("click", calculate);
});

document.onkeydown = function(e) {
    let key_pressed = e.key;
    let regex = /^[0-9-+*=/.()]+$/;
    //let eValue = "0"
    //console.log(key_pressed)

    if (key_pressed === "Escape") {
        output.innerText = "";
        result.innerText = "0";
        return;    
    }

    if (key_pressed === "Backspace") {
        output.textContent = output.textContent.substr(0,output.textContent.length-1);
        return;
    }

    if (key_pressed === "=" || key_pressed ==="Enter" ) {
            result.innerText = eval(output.innerText);
            //eValue = result.innerText
            //output.innerText = ""
            //console.log(`evalue = ${eValue}`);
            return;
    }
    
    else if (key_pressed.match(regex)){
        output.textContent += key_pressed;
        return;
    }
    else {
        if(result.innerText === "0"){
            result.innerText = "0"
        }
            result.innerText = eval(output.innerText);
            //console.log(`evalueini = ${result.innerText}`);
            //alert('Ini kalkulator bang bukan Chat GPT')
    }
}

function calculate() {
    let buttonText = this.innerText;
    if (buttonText === "AC") {
        output.innerText = "";
        result.innerText = "0";
        return;    
    }

    if (buttonText === "DEL") {
        output.textContent = output.textContent.substr(0,output.textContent.length-1);
        return;
    }

    if (buttonText === "=") {
        result.innerText = eval(output.innerText);
        
    }

    else {
        output.textContent += buttonText;
        return;
    }
}