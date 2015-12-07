$(document).ready(function () {
  $(".classic_info, .rock, .pian, .barab, .photo_gallery, .add_new_sticker_text").dialog({
        autoOpen: false,
        height: 550,
        width: 800,
        modal: true,
        show: {
            effect: "blind",
            duration: 1000
        }
    });
    $(".info, .info_2, .stickers_position_info").hide();
    $(".clear li").click(function () {
        $(".photo").css("background", "");
        $(".sticker").text("");
        $(".border_name_title").text("");
    });
    $(".video").click(function () {
        $(".photo_gallery").dialog("open");
        $(".photo_1").click(function () {
            $(".photo").css("background", "url(img/photo_1.jpg) no-repeat");
            $(".photo_gallery").dialog("close");
        });
        $(".photo_2").click(function () {
            $(".photo").css("background", "url(img/photo_2.jpg) no-repeat");
            $(".photo_gallery").dialog("close");
        });
        $(".photo_3").click(function () {
            $(".photo").css("background", "url(img/photo_3.jpg) no-repeat");
            $(".photo_gallery").dialog("close");
        });
        $(".photo_4").click(function () {
            $(".photo").css("background", "url(img/photo_4.jpg) no-repeat");
            $(".photo_gallery").dialog("close");
        });
            $(".photo_5").click(function () {
            $(".photo").css("background", "url(img/photo_5.jpg) no-repeat");
            $(".photo_gallery").dialog("close");
        });
        $(".photo_6").click(function () {
            $(".photo").css("background", "url(img/photo_6.jpg) no-repeat");
            $(".photo_gallery").dialog("close");
        });
        $(".photo_7").click(function () {
            $(".photo").css("background", "url(img/photo_7.jpg) no-repeat");
            $(".photo_gallery").dialog("close");
        });
    });
    $(".add_sticker_text, .input, .add_new_sticker_text").dialog({
        autoOpen: false,
        height: 400,
        width: 400,
        modal: true,
        show: {
        effect: "blind",
        duration: 1000
  }
  });
  function addBorderText() {
    var arr = [],
    flag = 0;
    function start() {
    $(".stickers").click(function() {
      $(".add_sticker_text").dialog("open");
    });
    $("#ok").click(function() {
        $(".add_sticker_text").dialog("close");
    })
    $("#send_text").click(function() {
      var text = $("#sticker_text").val();
      if(text != "" && text != " "){
        arr.push(text);
      $(".sticker").text(arr[flag]);
      flag++;
      $(".current_page_number").text("Страница: " + flag);
      $(".num_of_sticker").text("Всего страниц: " + arr.length);
      };
      $("#sticker_text").val("");
    });
  };
  start();
    function end(){
      $(".up").click(function() {
        $(".current_page_number").text("Страница: " + flag);
        $(".sticker").text(arr[flag]);
      if(flag < arr.length){
        flag++;
      }
    });
    $(".down").click(function() {
      $(".current_page_number").text("Страница: " + flag);
      $(".sticker").text(arr[flag-1]);
      if(flag > 1){
        flag--;
      }
    });
  };
  end();
  };      // end addBorderText()
  addBorderText();
  $(".border_name").click(function() {
    $(".input").dialog("open");
  });
  $("#send").click(function() {
    var text = $("#text").val();
    $(".border_name_title").text(text);
    $("#text").val("");
    $(".input").dialog("close");
  });





  //function addNewSticker() {
    $(".add_sticker").click(function () {
           var Sticker = {
           draw : function () {
             var arr = [],
             flag = 0,
             div = document.createElement(div);
      $(div).addClass("secondary_sticker");
      $(".new_stickers_place").append(div);
      $(div).draggable()
            .click(function () {
                    flag += 1;
                    console.log(flag);
                    var self = this;
                    $(".add_new_sticker_text").dialog("open");
                    $("#new_send_text").click(function () {
                      var text = $("#new_sticker_text").val();
                        if(text.length > 0 && text != " ") {
                        $(self).text(text);
                          arr.push(text);

                          $(".sticker_num").text("Стикер " + flag);
                        console.log(arr);

                        $("#new_sticker_text").val("");
                      }
                    });
                    $("#new_ok").click(function () {
                        $(".add_new_sticker_text").dialog("close");

                    });
      });
      }
    };
    new Sticker.draw();
  });


    //  var div = document.createElement(div);
    //  $(div).addClass("secondary_sticker");
    //  $(".new_stickers_place").append(div);
    //  $(div).draggable()





//  }; // addNewSticker
//addNewSticker();





  $(".c1").click(function() {
    $(".classic_info").dialog("open");
  });
  $(".c2").click(function() {
    $(".rock").dialog("open");
  });
  $(".c3").click(function() {
    $(".pian").dialog("open");
  });
  $(".c4").click(function () {
    $(".barab").dialog("open");
  });
  $("#pian_close").click(function () {
    $(".pian").dialog("close");
  });
  $("#rock_close").click(function () {
    $(".rock").dialog("close");
  });
  $("#classic_close").click(function () {
    $(".classic_info").dialog("close");
  });
  $("#barab_close").click(function () {
    $(".barab").dialog("close");
  });
  $(".sticker").draggable().resizable({maxHeight:500,maxWidth:400,minHeight:100,minWidth:100});
$(".wrapper").resizable({maxHeight:550,maxWidth:1200,minHeight:430,minWidth:980});
$("li").draggable();
$(".input").draggable();
$(".yellow").click(function  () {
  $(".wrapper").css("background","yellow");
});
$(".white").click(function  () {
  $(".wrapper").css("background","white");
  $(".c2").css("background","url(img/rock.png) no-repeat")
});
$(".blue").click(function  () {
  $(".wrapper").css("background","blue");
  $(".c2").css("background","url(img/rock_blue.png) no-repeat")
});
$(".pink").click(function  () {
  $(".wrapper").css("background","pink");
});
$(".violet").click(function  () {
  $(".wrapper").css("background","violet");
});
});
