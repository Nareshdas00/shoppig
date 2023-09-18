$(document).ready(function () {
    $("#box_two").hide();
    $("#box_three").hide();
    $("#box_four").hide();

    $("#click_one").click(function () {
        $("#box_one").show();
        $("#box_two").hide();
        $("#box_three").hide();
        $("#box_four").hide();
    })

    $("#click_two").click(function () {
        $("#box_one").hide();
        $("#box_three").hide();
        $("#box_four").hide();
        $("#box_two").show();
    })

    $("#click_three").click(function () {
        $("#box_one").hide();
        $("#box_two").hide();
        $("#box_four").hide();
        $("#box_three").show();
    })

    $("#click_four").click(function () {
        $("#box_one").hide();
        $("#box_two").hide();
        $("#box_three").hide();
        $("#box_four").show();
    })

    //     $("#box_para").hide();
    //     $("#icon_up").hide();
    //     $("#drop_down").click(function(){
    //         $("#box_para").toggle();
    //         $("#icon_down").toggle();
    //         $("#icon_up").toggle();
    //     })

    //     $("#box_para_1").hide();
    //     $("#icon_up_1").hide();
    //     $("#drop_down_1").click(function(){
    //         $("#box_para_1").toggle();
    //         $("#icon_down_1").toggle();
    //         $("#icon_up_1").toggle();
    //     })

    //     $("#box_para_2").hide();
    //     $("#icon_up_2").hide();
    //     $("#drop_down_2").click(function(){
    //         $("#box_para_2").toggle();
    //         $("#icon_down_2").toggle();
    //         $("#icon_up_2").toggle();
    //     })

    //     $("#box_para_3").hide();
    //     $("#icon_up_3").hide();
    //     $("#drop_down_3").click(function(){
    //         $("#box_para_3").toggle();
    //         $("#icon_down_3").toggle();
    //         $("#icon_up_3").toggle();
    //     })


    //     $("#box_para_4").hide();
    //     $("#icon_up_4").hide();
    //     $("#drop_down_4").click(function(){
    //         $("#box_para_4").toggle();
    //         $("#icon_down_4").toggle();
    //         $("#icon_up_4").toggle();
    //     })

    //     $("#box_para_6").hide();
    //     $("#icon_up_6").hide();
    //     $("#drop_down_6").click(function(){
    //         $("#box_para_6").toggle();
    //         $("#icon_down_6").toggle();
    //         $("#icon_up_6").toggle();
    //     })


    // })

    // $(document).ready(function(){
    //     $("#box_two").hide();
    //     $("#box_thire").hide();
    //     $("#box_four").hide();

    //     $("#click_one").click(function(){
    //         $("#box_one").show();
    //         $("#box_two").hide();
    //         $("#box_thire").hide();
    //         $("#box_four").hide();
    //     })

    //     $("#click_two").click(function(){
    //         $("#box_one").hide();
    //         $("#box_thire").hide();
    //         $("#box_four").hide();
    //         $("#box_two").show();
    //     })

    //     $("#click_thire").click(function(){
    //         $("#box_one").hide();
    //         $("#box_two").hide();
    //         $("#box_four").hide();
    //         $("#box_thire").show();
    //     })

    //     $("#click_four").click(function(){
    //         $("#box_one").hide();
    //         $("#box_two").hide();
    //         $("#box_thire").hide();
    //         $("#box_four").show();
    //     })
})


var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

