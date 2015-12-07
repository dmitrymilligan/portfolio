$(document).ready(function () {

$(".form, .form-block-4 , .success-1, .success-2").hide();
$(".step-1-num, .step-2-num, .step-3-num, .step-4-num, .step-5-num, .step-6-num, .step-7-num")
.css("opacity", "0");


$(".molniya-input, .express-input, .standart-input, .econom-input, .location-input").click(function () {
  $(".form").show();
  $(".block-1, .block-2").css("opacity","0.4");
});
$(".form-close-1, .form-close-2").click(function () {
  $(".block-1, .block-2").css("opacity","1");
  $(".form, .success-1").hide();
}).hover(function () {
  $(".form-close-1, .form-close-2").addClass("redcolor")
},
function () {
$(".form-close-1, .form-close-2").removeClass("redcolor")
}
);
$("#block-4-btn").click(function () {
  $(".form-block-4").show();
  $(".block-4, .block-5").css("opacity","0.4");
});
$(".form-block-4-close-1, .form-block-4-close-2").click(function () {
  $(".block-4, .block-5").css("opacity","1");
  $(".form-block-4").hide();
}).hover(function () {
  $(".form-block-4-close-1, .form-block-4-close-2").addClass("redcolor")
},
function () {
$(".form-block-4-close-1, .form-block-4-close-2").removeClass("redcolor")
});
$("#send-1").click( function () {
  $(".success-1").show();
  setTimeout(function () {
    $(".form").hide();
    $(".success-1").hide();
    $(".block-1, .block-2").css("opacity","1");
  }, 3000);
});
$("#send-2").click( function () {
  $(".success-2").show();
  setTimeout(function () {
    $(".form-block-4").hide();
    $(".success-2").hide();
    $(".block-4, .block-5").css("opacity","1");
  }, 3000);
})
$(".form-close-3, .form-close-4").click(function () {
  $(".form-block-4").hide();
  $(".success-2").hide();
  $(".block-4, .block-5").css("opacity","1");
}).hover(function () {
  $(".form-close-3, .form-close-4").addClass("redcolor")
},
function () {
  $(".form-close-3, .form-close-4").removeClass("redcolor")
});

// Step number view
$(".step-1-img").hover(function () {
$(".step-1-num").css("opacity", "1");
},
function () {
$(".step-1-num").css("opacity", "0");
}
);
$(".step-2-img").hover(function () {
$(".step-2-num").css("opacity", "1");
},
function () {
$(".step-2-num").css("opacity", "0");
}
);$(".step-3-img").hover(function () {
$(".step-3-num").css("opacity", "1");
},
function () {
$(".step-3-num").css("opacity", "0");
}
);$(".step-4-img").hover(function () {
$(".step-4-num").css("opacity", "1");
},
function () {
$(".step-4-num").css("opacity", "0");
}
);$(".step-5-img").hover(function () {
$(".step-5-num").css("opacity", "1");
},
function () {
$(".step-5-num").css("opacity", "0");
}
);$(".step-6-img").hover(function () {
$(".step-6-num").css("opacity", "1");
},
function () {
$(".step-6-num").css("opacity", "0");
}
);$(".step-7-img").hover(function () {
$(".step-7-num").css("opacity", "1");
},
function () {
$(".step-7-num").css("opacity", "0");
}
);
$(".discount-button").click(function () {
  $(".block-2-success").css("display","block");
})

$(".tooltip-show").tooltip();
});
