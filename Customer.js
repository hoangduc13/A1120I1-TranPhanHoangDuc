class Customer{
    constructor(name,id,birthday,email,address,typeCustomer,typeRoom,typeService,rentDay,quatilyIncluded,discout) {
        this.name = name;
        this.id = id;
        this.birthday = birthday;
        this.email = email;
        this.address = address;
        this.typeCustomer = typeCustomer;
        this.typeRoom = typeRoom;
        this.typeService = typeService;
        this.rentDay = rentDay;
        this.quatilyInclud= quatilyIncluded;
        this.discout = discout;
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
    getaddress(){
        return this.address;
    }
    setaddress(address){
        this.address = address;
    }
    gettypecustomer(){
        return this.typeCustomer;
    }
    settypeCustomer(typeCustomer){
        this.typeCustomer = typeCustomer;
    }
    gettypeRoom(){
        return this.typeRoom;
    }
    settypeRoom(typeRoom){
        this.typeRoom = typeRoom;
    }
    gettypeService(){
        return this.typeService;
    }
    settypeService(typeService){
        this.typeService = typeService;
    }
    getrentDay(){
        return this.rentDay;
    }
    setrentDay(rentDay){
        this.rentDay = rentDay;
    }
    getquatilyInclud(){
        return this.quatilyInclud;
    }
    setquatilyInclud(quatilyInclud){
        this.quatilyInclud = quatilyInclud;
    }
    setdiscout(dis){
        this.discout = dis;
    }
    getdiscout(){
        return this.discout;
    }
    getTotalPay(){
        let tempT;
        switch (this.typeService) {
            case 'Villa':{
                tempT = 500;
                break;
            }
            case 'House':{
                tempT = 300;
                break;
            }
            case 'Room':{
                tempT = 100;
                break;
            }
        }
        console.log(tempT);
        return parseInt(this.rentDay)*tempT*(1-parseInt(this.discout)/100);
    }
}
function addCustomer(){
    if (checkInfo()){
        var nameS = document.getElementById('name').value;
        nameS = nameS.trim().toLowerCase();
        nameS = standardString(nameS);
        var addS = document.getElementById('address').value;
        addS = addS.trim().toLowerCase();
        addS = standardString(addS);
        let cus = new Customer(nameS,
            document.getElementById('id').value,
            document.getElementById('birthday').value,
            document.getElementById('email').value,
            addS,
            document.getElementById('typeCustomer').value,
            document.getElementById('typeRoom').value,
            document.getElementById('typeService').value,
            document.getElementById('rentDay').value,
            document.getElementById('quatilyInclud').value,
            document.getElementById('discout').value);
        listCustomer[listCustomer.length] = cus;
        ouputInforCustomer(listCustomer[listCustomer.length]);
        document.getElementById('name').value='';
        document.getElementById('id').value='';
        document.getElementById('birthday').value='';
        document.getElementById('email').value='';
        document.getElementById('address').value='';
        document.getElementById('typeCustomer').value='';
        document.getElementById('discout').value='';
        document.getElementById('quatilyInclud').value='';
        document.getElementById('rentDay').value='';
        document.getElementById('typeService').value='';
        document.getElementById('typeRoom').value='';
    }
}
function de(nameDel){
    for (let i=parseInt(nameDel); i < listCustomer.length-1; i++) listCustomer[i] = listCustomer[i + 1];
    listCustomer.pop();
    ouputInforCustomer();
}
function edit(nameEd) {
    let choose1 = prompt(`      1.Name:
      2.ID:
      3.Birthday:
      4.Email:
      5.Address:
      6.Customer Type:
      7.:Quantily included
      8.Rent days:
      9.Type of Service:
      10.Type of room:
      11.Discout`);
    switch (choose1) {
        case '1':{
            var name = prompt('Name');
            name = name.trim().toLowerCase();
            name = standardString(name);
            listCustomer[nameEd].setname(name);
            break;
        }
        case '2':{
            do{
                var  iD = prompt('ID');
            }while (!checkID(iD));
            listCustomer[nameEd].setid(iD);
            break;
        }
        case '3':{
            do{
                var  bir = prompt('Birthday');
            }while(!checkBirthday(bir));
            listCustomer[nameEd].setbirthday(bir);
            break;
        }
        case '4':{
            do{
                var email = prompt('Email');
            }while(!checkEmail(email));
            listCustomer[nameEd].setemail(email);
            break;
        }
        case '5':{
            var address = prompt('Address');
            address = address.trim().toLowerCase();
            address = standardString(address);
            listCustomer[nameEd].setaddress(address);
            break;
        }
        case '6':{
            var typeCustomer = prompt('Customer Type');
            listCustomer[nameEd].settypeCustomer(typeCustomer);
            break;
        }
        case '7':{
            do{
                var  inc = parseInt(prompt('Quantily included'));
            }while(inc<1 || Number.isNaN(inc));
            listCustomer[nameEd].setquatilyInclud(inc);
            break;
        }
        case '8':{
            do{
                var day = parseInt(prompt('Rent days'));
            }while(day<1 || Number.isNaN(day));
            listCustomer[nameEd].setrentDay(day);
            break;
        }
        case '9':{
            var  typeSer = prompt('Type Service');
            listCustomer[nameEd].settypeService(typeSer);
            break;
        }
        case '10':{
            var typeRoom = prompt('Type Room');
            listCustomer[nameEd].settypeRoom(typeRoom);
            break;
        }
        case '11':{
            do{
                var dis = parseInt(prompt('Discout'));
            }while(day<1 || Number.isNaN(dis));
            listCustomer[nameEd].setdiscout(dis);
            break;
        }
        default: alert('not served');
    }
    ouputInforCustomer();
}
let tempH = `<table class="table">
      <tr>
      <th>Name</th>
      <th>ID</th>
      <th>Birth Day</th>
  <th>Email</th>
  <th>Address</th>
  <th>Type Customer</th>
  <th>Discout</th>
  <th>Quantily included</th>
  <th>Rent Day</th>
  <th>Type of Service</th>
  <th>Type of Room</th>
  <th></th>
  <th></th>
  </tr>
  </table>`;
function  ouputInforCustomer() {
    document.getElementById('result').innerHTML = tempH;
    for (let i = 0; i < listCustomer.length; i++) {
        let b = '<tr id=' + i + '/>';
        b += '<th>' + listCustomer[i].getname() + '</th>';
        b += '<th>' + listCustomer[i].getid() + '</th>';
        b += '<th>' + listCustomer[i].getbirthday() + '</th>';
        b += '<th>' + listCustomer[i].getemail() + '</th>';
        b += '<th>' + listCustomer[i].getaddress() + '</th>';
        b += '<th>' + listCustomer[i].gettypecustomer() + '</th>';
        b += '<th>' + listCustomer[i].getdiscout() + '</th>';
        b += '<th>' + listCustomer[i].getquatilyInclud() + '</th>';
        b += '<th>' + listCustomer[i].getrentDay() + '</th>';
        b += '<th>' + listCustomer[i].gettypeService() + '</th>';
        b += '<th>' + listCustomer[i].gettypeRoom() + '</th>';
        b += '<th><button class="btn btn-success" onclick="alert('+listCustomer[i].getTotalPay()+')">Pay</th>';
        b += '<th><button class="btn btn-success" onclick="edit(' + i + ')">Edit</th>';
        b += '<th><button class="btn btn-success" onclick="de(' + i + ')">Delete</th>';
        document.getElementById('result').innerHTML += b;
    }
}