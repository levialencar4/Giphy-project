
var appKey = "C2Kt0GhGJdj5NGsXDQH0HKEHs8Liumlm"


$('#getButton').click(function () {
    var numberVal = $('#numberGif').val()
    var searchVal = $('#searchInput').val()
    var apiGet = $.get(`http://api.giphy.com/v1/gifs/search?q=${searchVal}&api_key=${appKey}&limit=${numberVal}`);
    apiGet.done(data => {
        $("#gifRow").html("")
        data.data.forEach(element => {
            $("#gifRow").append(`<div class="col-lg-4 col-sm-12 align-items-stretch">
            <div class="row justify-content-center"><img class="m-4 img-fluid w-50 " src="${element.images.original.url}"></img></div> 
            
           
        </div>`
            )

        })
        

    });
})



$('#faqLink').click(function () {
    $('#faqSection').show()
    $('#homePage').hide()
    $('#aboutUsSection').hide()
    $('#contactUsSection').hide()
    
    
})

$('#contactUsLink').click(function () {
    $('#contactUsSection').toggle()
    $('#homePage').hide()
    $('#aboutUsSection').hide()
    $('#faqSection').hide()
})

$('#aboutUsLink').click(function () {
    $('#aboutUsSection').toggle()
    $('#homePage').hide()
    $('#faqSection').hide()
    $('#contactUsSection').hide()
})



