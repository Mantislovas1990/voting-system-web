function nameValidation() {
    const regName = /^[A-Za-z]+$/;
    const name = document.getElementById('name').value;
    if (!regName.test(name)) {
        alert('Unknown input, please enter only letters');
        document.getElementById('name').focus();
        return false;
    }
}