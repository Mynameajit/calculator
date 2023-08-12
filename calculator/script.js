function val(a) {
    document.getElementById('res').value += a

}
function cle() {
    document.getElementById("res").value=""

}
function remove() {
    let r = document.getElementById("res").value
    document.getElementById("res").value = r.slice(0, -1)

}


function result() {
    let a = document.getElementById("res").value
    document.getElementById("res").value = a + '=' + eval(a)
}
