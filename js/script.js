var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
function calculateDay(){
        var dd = parseInt(document.getElementById('day').value);
        var mm = parseInt(document.getElementById('month').value);
        var year = document.getElementById('year').value;
        var cc = parseInt(year.slice(0, 2));
        var yy = parseInt(year.slice(2));
        if (dd>0 && dd<32 && mm>0 && mm<13) {
            return Math.floor((((cc/4)-2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7);
        } else {
            alert("invalid date/month/year input")
        }
       
}
function genderName(){
    if (document.getElementById('male').checked) {
        var gender = document.getElementById('male').value;
        return gender;
        }
    else if (document.getElementById('female').checked) {
         var gender = document.getElementById('female').value;
         return gender;
         }
     else{
         alert("please check the gender to see your name")
     }
}
function displayName(){
    var gender = genderName();
    var day = calculateDay();
    if (day===0 && gender ==='male') {
        document.getElementById('displayAkan').innerHTML = maleNames[0];
        }
        else if (day===0 && gender==='female') {
            document.getElementById('displayAkan').innerHTML = femaleNames[0];
        }
        else if (day===1 && gender==='male') {
            document.getElementById('displayAkan').innerHTML = maleNames[1];
        }
        else if (day===1 && gender==='female') {
            document.getElementById('displayAkan').innerHTML = femaleNames[1];
        }
        else if (day===2 && gender==='male') {
            document.getElementById('displayAkan').innerHTML = maleNames[2];
        }
        else if (day===2 && gender==='female') {
            document.getElementById('displayAkan').innerHTML = femaleNames[2];
        }
        else if (day===3 && gender==='male') {
            document.getElementById('displayAkan').innerHTML = maleNames[3];
        }
        else if (day===3 && gender==='female') {
            document.getElementById('displayAkan').innerHTML = femaleNames[3];
        }
        else if (day===4 && gender==='male') {
            document.getElementById('displayAkan').innerHTML = maleNames[4];
        }
        else if (day===4 && gender==='female') {
            document.getElementById('displayAkan').innerHTML =femaleNames[4];
        }
        else if (day===5 && gender==='male') {
            document.getElementById('displayAkan').innerHTML =  maleNames[5];
        }
        else if (day===5 && gender==='female') {
            document.getElementById('displayAkan').innerHTML = femaleNames[5];
        }
        else if (day===6 && gender==='male') {
            document.getElementById('displayAkan').innerHTML =  maleNames[6];
        }
        else if (day===6 && gender==='female') {
            document.getElementById('displayAkan').innerHTML = femaleNames[6];
        }
        else{
            document.getElementById('displayAkan').innerHTML = "invalid input";
        }
}