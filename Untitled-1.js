buttons = document.querySelectorAll("button");
display = document.querySelector("input");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    switch (button.innerHTML){
        case "c":
            display.value = "";
            break;
        case "x":
            display.value += "*";
            break;
        case "=":
            try {
                result = eval(display.value);
                display.value = result;
            }
            catch (error) {
                alert("You wanna chop slap?");
            }
            break
        default:
            display.value += button.innerHTML;
    }
  });
});

