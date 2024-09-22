function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;

}

function showSectionById(id){
    // hide all the sections
    document.getElementById('addmoney-section').classList.add('hidden');
    document.getElementById('cashout-section').classList.add('hidden');
    document.getElementById('trans-section').classList.add('hidden');

    // show the section with the provided id as perameter
    document.getElementById(id).classList.remove('hidden');
}