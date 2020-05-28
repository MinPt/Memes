




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


    $("#navbarBtn4").click(function () {
        $("#mytable tr").filter(function (index) {
            return (index + 1) % 3 === 0;
        })
            .css({"background-color":"blue"});
    })

    $("#navbarBtn5").click(function () {
        $("*:not(.green,#blue)").css({"border":"2px solid red"});
    })


    $("#navbarBtn6").click(function(){
        $("div:contains(p)").css({"background-color":"red"});
    })

    $("#navbarBtn").click(function () {

    })
    $("input:odd").attr("checked","checked");

    $("#dialogBtn").click(function () {
        $("#mainWindow").append(`<div class='m-0'>${moment().format('HH:mm:ss')} - ${$("#myTextArea").val()} <div>`);

        $("#myTextArea").val(" ");
    })

});

