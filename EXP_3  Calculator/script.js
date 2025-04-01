const inputValue = document.getElementById("user-input");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "AC") {
            inputValue.innerText = "0";
        } else if (value === "DEL") {
            inputValue.innerText = inputValue.innerText.slice(0, -1) || "0";
        } else if (value === "=") {
            try {
                inputValue.innerText = eval(inputValue.innerText.replace(/[^-()\d/*+.]/g, '')) || "0";
            } catch {
                inputValue.innerText = "ERROR";
            }
        } else if (value === "%") {
            inputValue.innerText = parseFloat(inputValue.innerText) / 100;
        } else {
            if (inputValue.innerText === "0" && value !== ".") {
                inputValue.innerText = value;
            } else {
                inputValue.innerText += value;
            }
        }
    });
});