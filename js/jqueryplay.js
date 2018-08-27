$(function () {

    // document.getElementById("#btn1").addEventListener("click", function () {
    //     alert("you cliced the btn1")
    // }) ;

    $("#btn1").on("click", function () {
        $('#panel1').slideUp(1000);
        $('#panel2').slideUp(2000);
        $('#panel3').slideUp(3000);
        $('#panel4').slideUp(4000);
    });


    $("#btn2").click(function () {
        $("#panel1, #panel2, #panel3, #panel4").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });

    //
    // $("#btn2").ready(function () {
    //     $("#panel2").animate({left: '250px'});
    // });

    $("#btn3").mouseover(function () {
        // $("#panel3").toggleClass("highlighted");
        $("#panel1").show(1000);
        $("#panel2").hide(1000);
        $("#panel3").show(1000);
        $("#panel4").hide(1000);
    });

    $("#btn4").on("click", function () {
        $("#panel1").css("font-weight", "bold").slideUp(2000).slideDown(5000);
        $("#panel2").css("font-weight", "bold").slideUp(2000).slideDown(5000);
        $("#panel3").css("font-weight", "bold").slideUp(2000).slideDown(5000);
        $("#panel4").css("font-weight", "bold").slideUp(2000).slideDown(5000);
    });


});