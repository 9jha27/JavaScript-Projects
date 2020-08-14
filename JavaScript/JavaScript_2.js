function validateForm() {
    var x = document.forms['myForm']['fname'].value;
    var y = document.forms['myForm']['lname'].value;
    var z = document.forms['myForm']['email'].value;
    if (x = y = z == '') { //Is this how you would do it for multiple areas?
        alert("Please fill out all required areas");
        return false;
    }
}

//HTML DATA ATTRIBUTES

function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in the " + character.innerHTML + " universe!");
}