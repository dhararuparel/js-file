function validateForm() {
    const inputs = document.querySelectorAll("input, select, textarea");

    for (let input of inputs) {
        if (input.value === "") {
            alert("All fields must be filled out.");
            input.focus();
            return false;
        }
    }

    return true; // Submit the form if all fields are valid
}
