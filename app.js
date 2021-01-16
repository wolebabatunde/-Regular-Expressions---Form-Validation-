// FORM BLUR EBENT LISTENERS
document.getElementById('name').addEventListener('blur',
    validateName)

document.getElementById('zip').addEventListener('blur',
    validateZip)

document.getElementById('email').addEventListener('blur',
    validateEmail)

document.getElementById('phone').addEventListener('blur',
    validatePhone)

// VALIDATE NAME FUNCTION
function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;

    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

// VALIDATE ZIP FUNCTION
function validateZip() {
    const zip = document.getElementById('zip');
    const re = /^[0-9]{5}(-[0-9]{4})?$/

    if (!re.test(zip.value)) {
        zip.classList.add("is-invalid");
    } else {
        zip.classList.remove("is-invalid")
    }
}

// VALIDATE EMAIL FUNCTION
function validateEmail() {

}

// VALIDATE PHONE FUNCTION
function validatePhone() {

}