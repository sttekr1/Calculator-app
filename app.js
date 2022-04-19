const displayResult = document.getElementById("displayResult");
const numbers = Array.from(document.getElementsByClassName("number"));
const operand = Array.from(document.getElementsByClassName("operand"));

const buttons = numbers.concat(operand);

buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "=":
                displayResult.innerText = eval(displayResult.innerText);
                break;
            default:
                displayResult.innerText += e.target.innerText;
        };
    });
});

document.addEventListener("keydown", (e) => {
    if (
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "."
    ) {
        clickButton(e.key);
        // console.log(e.key)
    } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*" || e.key === "=") {
        clickOperation(e.key);
        // console.log(e.key)
    };
});
function clickButton(key) {
    buttons.forEach((button) => {
        if (button.innerText === key) {
            button.click();
        }
    });
}
function clickOperation(key) {
    buttons.forEach((operation) => {
        if (operation.innerText === key) {
            operation.click();
        }
    });
};