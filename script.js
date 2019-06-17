$( document ).ready(function() {
    if(getCookie('godkendt')=='1'){
        $(".popop").hide();
        $(".overlay").hide();
    }


    $("#ok").on('click', function(e) {
        $(".popop").hide();
        $(".overlay").hide();
        setCookie('godkendt', '1', 10) 
    });
    $(".overlay").on('click', function(e) {
        $(".popop").hide();
        $(".overlay").hide();
        setCookie('godkendt', '1', 10) 
    });
});

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    console.log(decodedCookie);
    
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }