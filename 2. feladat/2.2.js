function caesarShift(text) {
    var lowerCase = text.toLowerCase();
    var myRegExp = new RegExp(lowerCase.charAt(0), "g")
   
    var shiftAmount = (lowerCase.match(myRegExp) || []).length;
    
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
caesarShift("apple ALARM")
caesarShift("Zoo")