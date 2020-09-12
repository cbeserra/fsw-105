var lights = false;
//var switches = [2, 5, 435, 4, 3]; // Light is On
//var switches = [1, 1, 1, 1, 3]; // Light is on
var toggles = [9, 3, 4, 2]; //Light is off
for( var i = 0; i < toggles.length; i++ ) {
    for( var j = 0; j < toggles[i]; j++) {
        lights = !lights; 
    }
}
if( lights ) {
    console.log("The lights are ON!");
} else {
    console.log("The lights are OFF!");
}

