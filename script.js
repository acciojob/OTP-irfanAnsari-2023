//your JS code here. If required.
const inputs = document.querySelectorAll('.code');
        
        inputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                if (e.target.value && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });
            
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && index > 0 && !input.value) {
                    inputs[index - 1].focus();
                }
            });
        });