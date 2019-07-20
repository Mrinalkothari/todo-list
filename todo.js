var input = prompt("Choose the options!! NEW, LIST, QUIT, DELETE");
var arr = [];
while(input != "quit"){
    if(input == "new"){
        var pu = prompt("Enter item to your todo list");
        arr.push(pu);
        console.log(pu + " added to your todo list")
        
    }
    
    else if(input == "list"){
       console.log("**************");
       for(var i=0; i<arr.length; i++){
           console.log(i + ":" + " " + arr[i]);
       }
       console.log("**************");
        }
       
    
    else if(input == "delete"){
        var del = prompt("From which index do you want to delete.");
        arr.splice(del,1);
        
    }
     
    var input = prompt("Choose the options!! NEW, LIST, QUIT, DELETE"); 
     
}
console.log("Ohk! YOU QUIT THE APP VISIT AGAIN!!");