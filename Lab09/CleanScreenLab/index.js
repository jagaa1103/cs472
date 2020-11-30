"use strict";

$(document).ready(() => {
    $(".circle").hide();
    let width = parseInt($('#width').val());
    let growthAmount = parseInt($('#growth-amount').val());
    let growthRate = parseInt($('#growth-rate').val());
    let n = parseInt($('#number').val());

	$(document).on("change, mouseup, keyup mouseup", "#number,#width,#growth-amount,#growth-rate", function(){
		n = parseInt($('#number').val());
		width = parseInt($('#width').val());
		growthAmount = parseInt($('#growth-amount').val());
		growthRate = parseInt($('#growth-rate').val());
	});

    $("#start").click(function() {
		if (n !== 0){
			$(".circle").show();
			$(".circle").css({
				'width': width,
				'height': width
			});

			for (let i = 0; i < n-1; i++) {
				$(".container").append("<div class='circle'></div>")
			}
			let intervalId = setInterval(grow, growthRate);
			$(".circle").click(function() {
				$(this).remove();
				clearInterval(intervalId);
			});
		}else {
			alert("Number of circle is 0! ");
		}
    })
    function grow() {
        const size = parseInt($(".circle").css('width')) + growthAmount + 'px';
        $(".circle").css({
            'width': size,
            'height': size
        });
    }
});