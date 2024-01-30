function showDiv(id) {
    document.getElementById(id).style.display = "block";
}
function hideDiv(id) {
    document.getElementById(id).style.display = "none";
}

function nextPage(from, to) {
    document.getElementById(from).style.display = 'none';
    document.getElementById(to).style.display = 'block';
}
function backPage(from, to) {
    document.getElementById(to).style.display = 'block';
    document.getElementById(from).style.display = 'none';
}