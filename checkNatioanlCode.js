var nationalCode = document.getElementsByClassName("MultiNationalCode")

function isValidIranianNationalCode(input) {
    if (!/^\d{10}$/.test(input)) return false;
    const check = +input[9];
    const sum = input.split('').slice(0, 9).reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;
    return sum < 2 ? check === sum : check + sum === 11;
}
var nationalCodeCheckValue = []
function changeBackgroundColer() {
    for (i = 0; i < nationalCode.length; i++) {
        if (isValidIranianNationalCode(nationalCode[i].value)) {
            nationalCode[i].style.backgroundColor = "#41f2067c"
            nationalCodeCheckValue[i] = true
        } else {
            nationalCode[i].style.backgroundColor = "#f71c0c7c"
            nationalCodeCheckValue[i] = false
        }
    }
}

setInterval("changeBackgroundColer()", 100)