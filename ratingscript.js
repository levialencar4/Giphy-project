 //forEach($(`#rating-${element.id}`))
    
 <div class="row justify-content-center rating-container" id= "rating-${element.id}">
 <div class="rating-circle" id="1"></div>
 <div class="rating-circle" id="2"></div>
 <div class="rating-circle" id="3"></div>
 <div class="rating-circle" id="4"></div>
 <div class="rating-circle" id="5"></div>
</div>







 $('.rating-circle').click(function () {

    var isChosenAndLast = $(this).hasClass('rating-chosen') && $('.rating-chosen').length == $(this).attr('id')


    $('.rating-circle').removeClass("rating-chosen")

    if (isChosenAndLast) {
        return
    }

    for (i = 1; i <= $(this).attr('id'); i++) {
        $('#' + i).addClass("rating-chosen")
    }

});


$('.rating-circle').hover(function () {
    $('.rating-circle').removeClass("rating-hover")
    for (i = 1; i <= $(this).attr('id'); i++) {
        $('#' + i).addClass("rating-hover")
    }

});

$('.rating-circle').mouseout(function () {
    $('.rating-circle').removeClass('rating-hover')
})
    ;

