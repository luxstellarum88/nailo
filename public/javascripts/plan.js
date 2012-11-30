$(document).ready(function() {

	// plan.jade: 도를 누르면, 도의 이름을 다음 '도시선택페이지' 상단에 뿌려준다
	/*a.province').click(function() {
		$.get('plan.js', function(data) {
			var province = $(data).find('a.province').text();
			alert(province);
			$('.province_name').text(province);
		});
	});*/
	// datepicker
	var popupStatus = 0;

	$.loadPopup = function(popup){
		//팝업은 popupStatus 가 비활성화되어 있을때만 불러진다. / loads popup only if it is disabled
		//if(popupStatus===0){
		$("#page").css({
			"opacity": "0.7"
		});
		$("#plan2").fadeIn("slow");
		popup.fadeIn("slow");
			//popupStatus = 1;
		//}
	};

	$.disablePopup = function(popup){
	//popupStatus 가 활성화 되어 있다면 비활성화 시키기 / disables popup only if it is enabled
		//if(popupStatus==1){
			//$("#plan2").fadeOut("slow");
			popup.fadeOut("slow");
			popupStatus = 0;
		//}
	};

	$.centerPopup = function(popup){
		//화면 중앙에 자리잡게 하기 위한 요청 / request data for centering
		var windowWidth = document.documentElement.clientWidth;
		var windowHeight = document.documentElement.clientHeight;
		var popupHeight = popup.height();
		var popupWidth = popup.width();
		//중앙에 위치시키기 / centering
		console.log(popupWidth, windowWidth);
		popup.css({
			"position": "absolute",
			"top": windowHeight/2-popupHeight/2,
			"left": windowWidth/2-popupWidth/2,
			"z-index" : 1000
		});
		//IE6 을 위한 핵 / only need force for IE6
	};


	// plan2.jade: datepicker
	/*
		무조건 sequential하게 열차 시간이 들어온다고 가정. 
		train_plan[0] = { day : 1, city_name : ABC };
		train_plan[1] = { day : 1, city_name : BCD };
		....
		
	*/
	$(".city2").unbind('click').bind("click", function(){
		var target = $(this);
		console.log(target);
		train_plan[train_plan_flag] = {};
		train_plan[train_plan_flag]['city_name'] = $(this).text();

		selected_cities[selected_cities.length] = target.text();
			
		$('.city2').each(function(){
			$(this).hide();
		});
		
		var li = "<li class='city' city_name='"+target.attr('city_name')+"' city_name_kor='"+target.text()+"'>" + target.text() + "</li>";
		$("#sortable").append(li);
		$('li').removeClass('ui-corner-bottom');
			$('ul')
				.addClass('ui-corner-top')
				.removeClass('ui-corner-all')
				.sortable({
				'containment': 'parent',
				'opacity': 0.6,
				update: function(event, ui) {
				alert("dropped");
				}
		});

		var nextPage = "#plan_3";
		
		var effect = "slide";
			
		changePage($(nextPage),effect);
		// $(".set_days_btn").unbind('click').bind('click', function(){
		// 	var daypicker = $("#daypicker");
		// 	train_plan[train_plan_flag]['day'] = daypicker.find('.days').val();
		// 	daypicker.find('.days').val("");
		// 	console.log(train_plan[train_plan_flag]['day'], train_plan[train_plan_flag]['city_name']);
		// 	console.log(train_plan);
		// 	train_plan_flag++;
		// 	$.disablePopup(daypicker);
			
			

		// });
	});

	// plan2.jade: datepicker

	// plan.jade: 맵의 크기를 동적으로 지정한다
	var window_width = $(window).width();
	$('.wrapper_map').css('width', window_width);
	var map_width = $('.wrapper_map').width();
	var map_height = map_width * 1.5;
	$('.wrapper_map').css('padding-bottom', map_height);
});