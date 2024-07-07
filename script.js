let currentInput = '0'; // current input on the screen
let memory = ''; // store for the first number in the operation
let operator = ''; // operator selected for the operation
let result = ''; // result of the operation

function appendToScreen(value) {
    if (currentInput === '0') {
        currentInput = ''; // clear initial zero
    }
    currentInput += value;
    document.getElementById('screen').innerText = currentInput;
}

function clearScreen() {
    currentInput = '0';
    memory = '';
    operator = '';
    result = '';
    document.getElementById('screen').innerText = currentInput;
}

function calculate() {
    if (currentInput.includes('+')) {
        let nums = currentInput.split('+');
        result = parseFloat(nums[0]) + parseFloat(nums[1]);
    } else if (currentInput.includes('-')) {
        let nums = currentInput.split('-');
        result = parseFloat(nums[0]) - parseFloat(nums[1]);
    } else if (currentInput.includes('*')) {
        let nums = currentInput.split('*');
        result = parseFloat(nums[0]) * parseFloat(nums[1]);
    } else if (currentInput.includes('/')) {
        let nums = currentInput.split('/');
        result = parseFloat(nums[0]) / parseFloat(nums[1]);
    }

    document.getElementById('screen').innerText = result;
    currentInput = result.toString(); // store result for further operations
}
