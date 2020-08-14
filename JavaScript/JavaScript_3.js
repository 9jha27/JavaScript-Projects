function displayType(family) {
    var familyType = family.getAttribute("data-family-type");
    alert(family.innerHTML + " is my " + familyType + '!');
}