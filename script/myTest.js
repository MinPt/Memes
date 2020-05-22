




$(document).ready(function () {
    $("#mybutt").click(function () {
        let selector1 = document.getElementById("input-selector").value;
        let property1 = document.getElementById("input-property").value;
        let value1 = document.getElementById("input-value").value;
        $(selector1).css(property1,value1);
    });

    $("#navbarBtn1").click(function () {
        $("p.red").css({"color":"red"});
        $("ul").css({"color":"red"});
    })

    $("#refresh-btn").click(function () {
        location.reload();
    })

    $("#navbarBtn2").click(function () {
        $("div>p").css({"color":"blue"});
    });

    $("#navbarBtn3").click(function () {
        $("div.blocks>").css({"background-color":"pink"});
    });



});

