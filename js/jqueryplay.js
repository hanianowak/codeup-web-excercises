$(function () {

    // document.getElementById("#btn1").addEventListener("click", function () {
    //     alert("you cliced the btn1")
    // }) ;

    $("#btn1").on("click", function () {
        $('#panel1').slideUp(1000);
        $('#panel2').slideUp(1000);
        $('#panel3').slideUp(1000);
        $('#panel4').slideUp(1000);
    });

    $("#btn2").dblclick("dblclick", function () {
        $("#panel2").fadeOut(1000);
    });

    $("#btn3").mouseover(function () {
        $("#panel3").toggleClass("highlighted");
    });


});