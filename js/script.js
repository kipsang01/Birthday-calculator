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
    
}