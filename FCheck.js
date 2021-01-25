function checkID(id){
    const re1 = /^[0-9]{8}$/;
    return re1.test(id);
}
function checkphoneNumber(phoneNumber){
    const re1 = /^[0-9]{11,12}$/;
    return re1.test(phoneNumber);
}
function checkEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function standardString(str){
    let temp='';
    for (let i=0; i<str.length;i++){
        if ((str.charAt(i)===' ')&&(str.charAt(i+1)===' ')) continue;
        if (i===0 || str.charAt(i-1)===' '){
            temp+= str.charAt(i).toUpperCase();
            continue;
        }
        temp+= str.charAt(i);
    }
    return temp;
}
function checkInfo() {
    if (!checkID(document.getElementById('id').value)) {
        alert('ID not valid');
        return false;
    }
    if (!checkEmail(document.getElementById('email').value)){
        alert('Email not valid');
        return false;
    }
    if (parseInt(document.getElementById('quatilyInclud').value)<1 || Number.isNaN(document.getElementById('quatilyInclud').value)){
        alert('Quatily Included not valid');
        return false;
    }
    if (parseInt(document.getElementById('rentDay').value)<1 || Number.isNaN(document.getElementById('rentDay').value)){
        alert('Rent Day not valid');
        return false;
    }
    return true;
}
function checkInfoEmp(){
    if (!checkID(document.getElementById('idEmp').value)) {
        alert('ID not valid');
        return false;
    }
    if (!checkEmail(document.getElementById('emailEmp').value)){
        alert('Email not valid');
        return false;
    }
    if (!checkphoneNumber(document.getElementById('phoneNumberEmp').value)) {
        alert('Phone Number not valid');
        return false;
    }
    return true;
}