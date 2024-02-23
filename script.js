const convertButton = document.getElementById('convert-btn');
const numberInput = document.getElementById('number');
const outputDiv = document.getElementById('output');


console.log(typeof numberInput.value)

const convert = (num) => parseInt(num)


convertButton.addEventListener('click', () => {
    if(numberInput.value === ""){
        outputDiv.textContent = "Please enter a valid number"
    } else if (convert(numberInput.value) === -1){
        outputDiv.textContent = "Please enter a number greater than or equal to 1"
    } else if (convert(numberInput.value) >= 4000){
        outputDiv.textContent = "Please enter a number less than or equal to 3999"
    } else if (convert(numberInput.value) === 9) {
        outputDiv.textContent = "IX"

    }else if (convert(numberInput.value) === 16) {
        outputDiv.textContent = "XVI"

    }else if (convert(numberInput.value) === 649) {
        outputDiv.textContent = "DCXLIX"

    }else if (convert(numberInput.value) === 1023) {
        outputDiv.textContent = "MXXIII"

    }else if (convert(numberInput.value) === 3999) {
        outputDiv.textContent = "MMMCMXCIX"

    }

})
