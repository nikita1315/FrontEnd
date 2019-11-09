function removeByJquery() {
    var element = $("#words-to-delete");
    element.remove();
}

function add() {
    var but2 = $("#add-but");
    but2.after("<h1>Hello, world!</h1>");
}
var current = "blue";
let colors = ["none","none","none","none","none","none","none","none","none"]

function turn(number) {
   

    $("#s" + number).css("background-color", current);

    colors[number-1]=current;
    
    if (current === "blue") {
        current = "red";
    } else {
        current = "blue";
    }

    $("#s" + number).prop("disabled", true);

   
    

}
