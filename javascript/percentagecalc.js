var number1= document.getElementById('num1');
var number2= document.getElementById('num2');
var result= document.getElementById('res');
var form=document.getElementById('getpercent');

form.addEventListener('submit', function(event) {
     //we can insert a function as a parameter within another function in javascript
    if(!number1.value || !number2.value)
        alert("Please enter required values");
    else{
        var x=parseFloat(number1.value);
        var y=parseFloat(number2.value);
        
        var percentage= (x/y)*100;
        result.innerText="Answer is: " + percentage +"%";
        event.preventDefault(); //forms require these to prevent some of their default behaviours as per user requirement. 
    }
});