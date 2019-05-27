$( document ).ready(function() {
    $("#ok").on('click', function(e) {
        $(".popop").hide();
        $(".overlay").hide();
    });
    $(".overlay").on('click', function(e) {
        $(".popop").hide();
        $(".overlay").hide();
    });
});