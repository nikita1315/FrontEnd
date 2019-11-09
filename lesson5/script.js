
function removeByJquery(){
    var element = $("#words-to-delete");
    element.remove();
}

function add(){
    var card = document.getElementById("words-to-delete");
    document.body.appendChild(card);
}