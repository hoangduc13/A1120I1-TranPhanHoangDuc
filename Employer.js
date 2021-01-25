class Employee{
    constructor(name,id,birthday,email,phoneNumber,level,position) {
        this.name = name;
        this.id = id;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.level = level;
        this.position = position;
    }
    getname(){
        return this.name;
    }
    setname(name){
        this.name = name;
    }
    getid(){
        return this.id;
    }
    setid(id){
        this.id = id;
    }
    getbirthday(){
        return this.birthday;
    }
    setbirthday(birthday){
        this.birthday = birthday;
    }
    getemail(){
        return this.email;
    }
    setemail(email){
        this.email = email;
    }
   getphoneNumber(){
        return this.phoneNumber;
   }
   setphoneNumber(phoneNumber){
        this.phoneNumber = phoneNumber;
   }
    getlevel(){
        return this.level;
    }
    setlevel(level){
        this.level = level;
    }
    getPosition(){
        return this.position;
    }
    setPosition(position){
        this.position = position;
    }
    getsalary(){
        let tempS;
        switch (this.getPosition()) {
            case 'Manager':{
                tempS = 500;
                break;
            }
            case 'Sale':{
                tempS = 300;
                break;
            }
            case 'Marketing':{
                tempS = 200;
                break;
            }
            case 'Staff':{
                tempS = 0;
                break;
            }
        }
        return tempS;
    }
}
function addEmployee(){
    if (checkInfoEmp()){
        var nameS = document.getElementById('nameEmp').value;
        nameS = nameS.trim().toLowerCase();
        nameS = standardString(nameS);
        let cus = new Employee(nameS,
            document.getElementById('idEmp').value,
            document.getElementById('birthdayEmp').value,
            document.getElementById('emailEmp').value,
            document.getElementById('phoneNumberEmp').value,
            document.getElementById('levelEmp').value,
            document.getElementById('positionEmp').value);
        listEmployee[listEmployee.length] = cus;
        ouputInforEmployee(listEmployee[listEmployee.length]);

        document.getElementById('nameEmp').value = '';
        document.getElementById('idEmp').value= '';
        document.getElementById('birthdayEmp').value= '';
        document.getElementById('emailEmp').value= '';
        document.getElementById('phoneNumberEmp').value= '';
        document.getElementById('levelEmp').value= '';
        document.getElementById('positionEmp').value= '';
    }
}
function deEmp(nameDel){
    for (let i=parseInt(nameDel); i < listEmployee.length-1; i++) listEmployee[i] = listEmployee[i + 1];
    listEmployee.pop();
    ouputInforEmployee();
}
function editEmp(nameEd) {
    let choose1 = prompt(`      1.Name:
      2.ID:
      3.Birthday:
      4.Email:
      5.Phone Number:
      6.level:
      7.Position:`);
    switch (choose1) {
        case '1':{
            var name = prompt('Name');
            name = name.trim().toLowerCase();
            name = standardString(name);
            listEmployee[nameEd].setname(name);
            break;
        }
        case '2':{
            do{
                var  iD = prompt('ID');
            }while (!checkID(iD));
            listEmployee[nameEd].setid(iD);
            break;
        }
        case '3':{
            do{
                var  bir = prompt('Birthday');
            }while(!checkBirthday(bir));
            listEmployee[nameEd].setbirthday(bir);
            break;
        }
        case '4':{
            do{
                var email = prompt('Email');
            }while(!checkEmail(email));
            listEmployee[nameEd].setemail(email);
            break;
        }
        case '5':{
            do{
                var phoneNumber = prompt('Phone Number');
            }while(!checkEmail(phoneNumber));
            listEmployee[nameEd].setphoneNumber(phoneNumber);
            break;
        }
        case '6':{
            let level = prompt(`1.Technical
2.Colleges
3.University
4.Graduate`);
            switch (level) {
                case '1':{
                    listEmployee[nameEd].setlevel('Technical');
                    break;
                }
                case '2':{
                    listEmployee[nameEd].setlevel('Colleges');
                    break;
                }
                case '3':{
                    listEmployee[nameEd].setlevel('University');
                    break;
                }
                case '4':{
                    listEmployee[nameEd].setlevel('Graduate');
                    break;
                }
                default: alert('not valid');
            }
            break;
        }
        case '7':{
            let position = prompt(`1.Manager
2.Sale
3.Marketing
4.Staff`);
            switch (position) {
                case '1':{
                    listEmployee[nameEd].setPosition('Manager');
                    break;
                }
                case '2':{
                    listEmployee[nameEd].setPosition('Sale');
                    break;
                }
                case '3':{
                    listEmployee[nameEd].setPosition('Marketing');
                    break;
                }
                case '4':{
                    listEmployee[nameEd].setPosition('Staff');
                    break;
                }
                default: alert('not valid');
            }
            break;
        }
        default: alert('not served');
    }
    ouputInforEmployee();
}
let temp = `<table class="table">
       <tr>
        <th>Name</th>
        <th>ID</th>
        <th>Birth Day</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Level</th>
        <th>Position</th>
        <th></th>
        <th></th>
        <th></th>
    </tr>
  </table>`;
function  ouputInforEmployee() {
    document.getElementById('result1').innerHTML = temp;
    for (let i = 0; i < listEmployee.length; i++) {
        let b = '<tr id=' + i + '/>';
        b += '<th>' + listEmployee[i].getname() + '</th>';
        b += '<th>' + listEmployee[i].getid() + '</th>';
        b += '<th>' + listEmployee[i].getbirthday() + '</th>';
        b += '<th>' + listEmployee[i].getemail() + '</th>';
        b += '<th>' + listEmployee[i].getphoneNumber() + '</th>';
        b += '<th>' + listEmployee[i].getlevel() + '</th>';
        b += '<th>' + listEmployee[i].getPosition() + '</th>';
        b += '<th><button class="btn btn-success" onclick="alert('+listEmployee[i].getsalary()+')">Salary</th>';
        b += '<th><button class="btn btn-success" onclick="editEmp(' + i + ')">Edit</th>';
        b += '<th><button class="btn btn-success" onclick="deEmp(' + i + ')">Delete</th>';
        document.getElementById('result1').innerHTML += b;
    }
}