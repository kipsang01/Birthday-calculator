var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
function calculateDay(){
        var dd = parseInt(document.getElementById('day').value);
        var mm = parseInt(document.getElementById('month').value);
        var year = document.getElementById('year').value;
        var cc = parseInt(year.slice(0, 2));
        var yy = parseInt(year.slice(2, 4));
        return Math.floor((((cc/4)-2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7);
}
function displayName(){
    var gender = (document.getElementById('Gender')).value;
    var day = calculateDay();
    if (day===0 && gender ==='male') {
        document.getElementById('displayAkan').innerHTML = "Your Name is "+ maleNames[0];
        }
        else if (day===0 && gender==='female') {
            document.getElementById('displayAkan').innerHTML = "Your Name is "+ femaleNames[0];
        }
        else if (day===1 && gender==='male') {
            document.getElementById('displayAkan').innerHTML = "Your Name is "+ maleNames[1];
        }
        else if (day===1 && gender==='female') {
            document.getElementById('displayAkan').innerHTML = "Your Name is "+ femaleNames[1];
        }
        else if (day===2 && gender==='male') {
            document.getElementById('displayAkan').innerHTML = "Your Name is "+ maleNames[2];
        }
        else if (day===2 && gender==='female') {
            document.getElementById('displayAkan').innerHTML = "Your Name is "+ femaleNames[2];
        }
        else if (day===3 && gender==='male') {
            document.getElementById('displayAkan').innerHTML = "Your Name is "+ maleNames[3];
        }
        else if (day===3 && gender==='female') {
            document.getElementById('displayAkan').innerHTML = "Your Name is "+ femaleNames[3];
        }
        else if (day===4 && gender==='male') {
            document.getElementById('displayAkan').innerHTML = "Your Name is "+ maleNames[4];
        }
        else if (day===4 && gender==='female') {
            document.getElementById('displayAkan').innerHTML = "Your Name is "+ femaleNames[4];
        }
        else if (day===5 && gender==='male') {
            document.getElementById('displayAkan').innerHTML = "Your Name is "+ maleNames[5];
        }
        else if (day===5 && gender==='female') {
            document.getElementById('displayAkan').innerHTML = "Your Name is "+ femaleNames[5];
        }
        else if (day===6 && gender==='male') {
            document.getElementById('displayAkan').innerHTML = "Your Name is "+ maleNames[6];
        }
        else if (day===6 && gender==='female') {
            document.getElementById('displayAkan').innerHTML = "Your Name is "+ femaleNames[6];
        }
        else{
            document.getElementById('displayAkan').innerHTML = "invalid input";
        }
}