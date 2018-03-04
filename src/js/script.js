    var myVideo= document.getElementById("video1");

    function playPause(){
        if (myVideo.paused)
            myVideo.play();
        else
            myVideo.pause();
    }

$(document).ready(function(){
    var wow = new WOW({
        mobile:false
    });
    wow.init();

    // التأكد من صحة حقول الإدخال
    $(function(){
        $("#contact-form").validate();
    });
    
});


