function caesarShift(text) {
    var lowerCase = text.toLowerCase();
    var shiftAmount = (lowerCase.charCodeAt(0)-96);
    
    var codedtext = "";
    for(var i = 0; i < lowerCase.length; i++) {
        var character = lowerCase.charCodeAt(i);

        if(character >= 97 && character <= 122) {
            codedtext += String.fromCharCode(((character - 97 + shiftAmount) % 26) + 97);

        } else {
            codedtext += String.fromCharCode(character);
        }
    }
   
    console.log(codedtext)
}

caesarShift("apple")
caesarShift("cat ALARM")
caesarShift("Zoo")
