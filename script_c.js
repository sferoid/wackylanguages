var nameError = document.getElementById('error-txt');
var phoneError = document.getElementById('error-txt');
var emailError = document.getElementById('error-txt');
var subjectError = document.getElementById('error-txt');
var msgError = document.getElementById('error-txt');

function validateName(){
    var name = document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name cannot be blank';
        return false;
    }
    if (!name.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        nameError.innerHTML = 'Please type your name';
        return false;      
    }
    nameError.innerHTML = "<i class='bx bx-check'></i>";
    return true;
}