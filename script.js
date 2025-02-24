document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".code");

    inputs.forEach((input, index) => {
        input.setAttribute("id", `code-${index + 1}`); // Ensure unique IDs

        input.addEventListener("input", (event) => {
            const value = event.target.value;
            if (value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus(); // Move to next input
            }
        });

        input.addEventListener("keydown", (event) => {
            if (event.key === "Backspace") {
                if (input.value === "") {
                    if (index > 0) {
                        inputs[index - 1].focus(); // Move to previous input
                        inputs[index - 1].value = ""; // Clear the previous input
                    }
                } else {
                    input.value = ""; // Clear current input
                }
                event.preventDefault();
            }
        });
    });

    // Handle paste event (allows users to paste full OTP)
    inputs[0].addEventListener("paste", (event) => {
        const pastedData = event.clipboardData.getData("text").trim();
        if (pastedData.length === inputs.length) {
            pastedData.split("").forEach((char, i) => {
                inputs[i].value = char;
            });
            inputs[inputs.length - 1].focus();
        }
    });
});
