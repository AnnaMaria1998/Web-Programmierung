function submitForm(){
    if(validate() == true){
        var result = {
            first:document.getElementById('first').value,
            last:document.getElementById('last').value,
            birth:document.getElementById('birth').value,
            street:document.getElementById('street').value,
            plz:document.getElementById('plz').value,
            mail:document.getElementById('mail').value,
            phonenumber:document.getElementById('phonenumber').value,
            course: document.querySelectorAll('input[type=checkbox]:checked'),
            coursePlace:document.querySelectorAll('input[type=radio]:checked')
        };
        console.log(result);
        postMethod(result);
        alert("funktioniert");
    }
}

function postMethod(data){
    let xhr = new XMLHttpRequest();
            let url = "https://uran.guru";
       
            // open a connection
            xhr.open("POST", url, true);
 
            // Set the request header i.e. which type of content you are sending
            xhr.setRequestHeader("Content-Type", "application/json");
 
            // Sending data with the request
            xhr.send(data);
}

function validate(){
    var birthdate = document.getElementById('birth').value;
    var currentDate = new Date();    
    var minDate = new Date().setFullYear(currentDate.getFullYear() - 15);
    if(birthdate < minDate){
        alert("Zu jung!");
        return false;
   }

    return true;
}