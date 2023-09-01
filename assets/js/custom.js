
$(document).ready(function(){
$('.news .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    padding:0,
    responsive:{
        0:{
            items:2
        },
        576:{
            items:2
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        }
    }
})

});
// file-upload
$(document).ready(function () {
    $("#demo").FancyFileUpload({
      params: {
        action: "fileuploader",
      },
      maxfilesize: 1000000,
    });
  });