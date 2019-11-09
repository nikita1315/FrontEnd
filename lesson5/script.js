
function removeByJquery(){
    var element = $("#words-to-delete");
    element.remove();
}

function add(){
    var but2 = $("#add-but");
    but2.after("<h1>Hello, world!</h1>");
}