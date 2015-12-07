$(document).ready(function () {
  $(".classic_info, .rock, .pian, .barab, .photo_gallery").dialog({
        autoOpen: false,
        height: 550,
        width: 800,
        modal: true,
        show: {
            effect: "blind",
            duration: 1000
        }
    });
    $(".down, .up").hide();
    $(".clear li").click(function () {
        $(".photo").css("background", "");
        $(".sticker").text("");
        $(".border_name_title").text("");
    });
    $(".video").click(function () {
        $(".photo_gallery").dialog("open");
        $(".photo_1").click(function () {
            $(".photo").css("background", "url (img/photo_1.jpg) no-repeat");
            $(".photo_gallery").dialog("close");
        });
        $(".photo_2").click(function () {
            $(".photo").css("background", "url (img/photo_2.jpg) no-repeat");
            $(".photo_gallery").dialog("close");
        });
        $(".photo_3").click(function () {
            $(".photo").css("background","url (img/photo_3.jpg) no-repeat");
            $(".photo_gallery").dialog("close");
        })
        $(".photo_4").click(function () {
      $(".photo").css("background","url(img/photo_4.jpg) no-repeat");
      $(".photo_gallery").dialog("close");
    })
    $(".photo_5").click(function () {
      $(".photo").css("background","url(img/photo_5.jpg) no-repeat");
      $(".photo_gallery").dialog("close");
    })
    $(".photo_6").click(function () {
      $(".photo").css("background","url(img/photo_6.jpg) no-repeat");
      $(".photo_gallery").dialog("close");
    })
    $(".photo_7").click(function () {
      $(".photo").css("background","url(img/photo_7.jpg) no-repeat");
            $(".photo_gallery").dialog("close");
      })
    })
    $(".add_sticker_text, .input").dialog({
        autoOpen: false,
        height: 400,
        width: 400,
        modal: true,
        show: {
        effect: "blind",
        duration: 1000
  }
  });
  function addBorderText () {
    if(!flag && !arr) {
      var flag = 0;
      var arr = [];
    };
    $(".stickers").click(function () {
    $(".add_sticker_text").dialog("open");
      }); // .stickers click end
    $("#send_text").click(function () {
      if(flag >= 1){
        $(".down").show();
      }
      var text = $("#sticker_text").val();
      $(".sticker").text(text);
      flag += 1;
      $(".num_of_sticker p").text(flag);
    });  //send_text click end
      $(".up").show().click(function () {
        $(".sticker").text("");
        flag += 1;
        $(".num_of_sticker p").text(flag);
      });
      $(".down").click( function () {
          flag -= 1;
          $(".num_of_sticker p").text(flag);
          if(flag <= 1){
            $(this).hide();
          }
        });
}; // addBorderText end
addBorderText();
  $(".border_name").click(function () {
    $(".input").dialog("open");
  })
  $("#send").click(function () {
    var text = $("#text").val();
    $(".border_name_title").text(text);
    $("#text").val("");
  })
  $(".c1").click(function () {
    $(".classic_info").dialog("open");
  })
  $(".c2").click(function () {
    $(".rock").dialog("open");
  })
  $(".c3").click(function () {
    $(".pian").dialog("open");
  })
  $(".c4").click(function () {
    $(".barab").dialog("open");
  })
  $("#pian_close").click(function () {
    $(".pian").dialog("close");
  })
  $("#rock_close").click(function () {
    $(".rock").dialog("close");
  })
  $("#classic_close").click(function () {
    $(".classic_info").dialog("close");
  })
  $("#barab_close").click(function () {
    $(".barab").dialog("close");
  })
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
})
