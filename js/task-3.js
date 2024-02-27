const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const trimmedText = event.currentTarget.value.trim();
    if (trimmedText !== "") {
        output.textContent = trimmedText;
    } else {
        output.textContent = "Anonymous";
    }
  });
