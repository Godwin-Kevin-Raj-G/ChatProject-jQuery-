$(document).ready(function () {
    $("#btn1").click(function () {
        var bala = document.getElementById("msg1").value

        $("#one").append("<p style=\"float:right;color:yellow \">" + bala + "</p><br>")
        $("#two").append("<p style=\"float:left ;color:yellow\">" + bala + "</p><br>")
        scrolfunction();

    })
    $("#btn2").click(function () {
        var bala1 = document.getElementById("msg2").value

        $("#one").append("<p style=\"float:left;color:red \">" + bala1 + "</p><br>")
        $("#two").append("<p style=\"float:right;color:red \">" + bala1 + "</p><br>")

        scrolfunction1();
    })
})
function scrolfunction() {
    var elemnt1 = document.$("#image")
    elemnt1.scrollTop = elemnt1.scrollHeight;




}
function scrolfunction1() {
    var element2 = document.$("#image1")
    element2.scrollTop = element2.scrollHeight
    // element2.scrollTop=element2.scrollHeight



}