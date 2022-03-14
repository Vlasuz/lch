lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})


// SKELETON LOADER

// const grid = document.querySelector('.skeleton-grid');
// const cardTemplate = document.getElementById('card-template');
// for (let i = 0; i < 6; i++) {
//   grid.append(cardTemplate.content.cloneNode(true));
// }
// setTimeout(() => {
//   fetch("https://fakestoreapi.com/products/category/electronics")
//     .then(res => res.json())
//     .then(posts => {
//       grid.innerHTML = ''
//       posts.forEach(post => {
//         const div = cardTemplate.content.cloneNode(true)
//         div.querySelector('[data-img]').src = post.image
//         div.querySelector('[data-title]').textContent = "INR. ₹ " + post.price
//         div.querySelector('[data-body]').textContent = post.title
//         grid.append(div)
//       })
//     })
// }, 1000)

// SKELETON LOADER












// CHART JS

if( document.querySelector('#myChart') ){
	const ctx = document.getElementById('myChart');
	const myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: ['Red', 'Blue', 'Yellow', 'Green'],
	        datasets: [{
	            label: '# of Votes',
	            data: [2, 7, 3, 5],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            y: {
	                beginAtZero: true
	            }
	        }
	    }
	});
}

if( document.querySelector('#speedChart') ){
	const ctx1 = document.getElementById('speedChart');
	const myChart1 = new Chart(ctx1, {
	    type: 'line',
	    data: {
	        labels: ['Red', 'Blue', 'Yellow', 'Green'],
	        datasets: [{
	            label: '# of Votes',
	            data: [2, 7, 3, 5],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            y: {
	                beginAtZero: true
	            }
	        }
	    }
	});
}

// CHART JS























// jQuery('.lightzoom').lightzoom({
// 	speed: 400,
// 	viewTitle: true,
// 	isEscClosing: true,
// 	isOverlayClickClosing: true
// });

if( $('#page-affBooking__table').hasClass('sortable') ){
	var sorter = new TINY.table.sorter("sorter");
		 sorter.head = "head"; //header class name
		 sorter.asc = "asc"; //ascending header class name
		 sorter.desc = "desc"; //descending header class name
		 sorter.even = "evenrow"; //even row class name
		 sorter.odd = "oddrow"; //odd row class name
		 sorter.evensel = "evenselected"; //selected column even class
		 sorter.oddsel = "oddselected"; //selected column odd class
		 // sorter.paginate = true (false); //toggle for pagination logic
		 // sorter.pagesize = 15 (20); //toggle for pagination logic
		 // sorter.currentid = "currentpage"; //current page id
		 // sorter.limitid = "pagelimit"; //page limit id
		 sorter.init("page-affBooking__table");
}
if( $('#page-affPayments__table').hasClass('sortable') ){
	var sorter = new TINY.table.sorter("sorter");
		 sorter.head = "head"; //header class name
		 sorter.asc = "asc"; //ascending header class name
		 sorter.desc = "desc"; //descending header class name
		 sorter.even = "evenrow"; //even row class name
		 sorter.odd = "oddrow"; //odd row class name
		 sorter.evensel = "evenselected"; //selected column even class
		 sorter.oddsel = "oddselected"; //selected column odd class
		 // sorter.paginate = true (false); //toggle for pagination logic
		 // sorter.pagesize = 15 (20); //toggle for pagination logic
		 // sorter.currentid = "currentpage"; //current page id
		 // sorter.limitid = "pagelimit"; //page limit id
		 sorter.init("page-affPayments__table");
}



// COPY INPUT

if( document.querySelector('.page-affInstruments__input button') ){
	document.querySelector('.page-affInstruments__input button').onclick = function () {
	    var textBox = document.getElementById("inputCopy");
	    textBox.select();
	    document.execCommand("copy");	
	}
}

// COPY INPUT

$(document).ready(function () {








	// TOTAL SCROLL

	$('.bill-fixed_mob').click(function () {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 500);
	})

	// TOTAL SCROLL
















	// COUPON BLOCK

	// Oups, I don't
	$('.bill__coupon .akkordeon').click(function () {
		if( $(this).hasClass('akkordeon_active') )
			$(this).find('.akkordeon__head span').text("Oups, I don't")
		else
			$(this).find('.akkordeon__head span').text("I have a coupon")

	})

	// COUPON BLOCK















	// DELETE FILTER

	$('.filters__list img, .messanger-list img').click(function () {
		$(this).closest('label, li').hide()
	})

	// DELETE FILTER











	// MONEY CLOSE

	$('.money__close').click(function () {
		$(this).closest('.money__block').slideUp()
	})

	// MONEY CLOSE
















	// CLOSE NOTES

	$('.notes__item .item__close').click(function () {
		$(this).closest('.notes__item').slideUp()
	})

	// CLOSE NOTES















	// MYMESSAGES

	$('.users__item').click(function () {
		$('.chat__block').hide()
		$('.chat__block').eq($(this).index()).show()

		$('.users__item').removeClass('users__item_active')
		$(this).addClass('users__item_active')
	})



	// MYMESSAGES



















	// RANGE SLIDER UI

    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 75,
      values: [ 0, 75 ],
      slide: function( event, ui ) {
        $( ".price-min" ).css('left', $('.ui-slider-handle').eq(0).css('left'))
        $( ".price-max" ).css('left', $('.ui-slider-handle').eq(1).css('left'))
        $( ".price-min span" ).text("€" + ui.values[ 0 ]);
        $( ".price-max span" ).text("€" + ui.values[ 1 ]);
      }
    });
    $( ".price-min" ).css('left', $('.ui-slider-handle').eq(0).css('left'))
    $( ".price-max" ).css('left', '95%')
    $( ".price-min span" ).text( "$" + $( "#slider-range" ).slider( "values", 0 ) )
    $( ".price-max span" ).text( "$" + $( "#slider-range" ).slider( "values", 1 ) )
      // " - $" + $( "#slider-range" ).slider( "values", 1 ) );

	// RANGE SLIDER UI

















	// COOKIES

	$('.cookies button').click(function () {
		$(this).closest('.cookies').hide();
	})

	// COOKIES















	// POPUPS

	$('a, button').click(function (e) {

		if( $(this).data('popup') ){

			e.preventDefault();

			let dataPopup = $(this).data('popup')

			$('.popup').removeClass('popup__open')
			$('.popup__'+dataPopup).addClass('popup__open')

		}

	})

	$('.popup__close, .popup__bgd').click(function () {
		$(this).closest('.popup').removeClass('popup__open')
	})

	// POPUPS
















	// HEADER MOBILE

	$('.header__burger').click(function () {
		$('.header__scrolldown').addClass('header__scrolldown_open')
	})
	$('.scrolldown__close').click(function () {
		$('.header__scrolldown').removeClass('header__scrolldown_open')
	})

	// HEADER MOBILE











	// FIXED FILTERS

	if( $(window).width() < 992 ){
		$(document).scroll(function () {
			if( $(document).scrollTop() > 500 )
				$('.filter__button_fixed').addClass('filter__button_fixed_active')
			else
				$('.filter__button_fixed').removeClass('filter__button_fixed_active')
		})
	}


	// FIXED FILTERS












	// REVIEWS

	// $('.banner__reviews').click(function () {
	// 	$(this).toggleClass('banner__reviews_active')
	// })

	// REVIEWS












	// SUBSCRIBE

	$('.page-index__subscribe form').submit(function () {
		$(this).addClass('form_sent')
	})

	// SUBSCRIBE















	// LIKE

	$('.page-index__questions .like').click(function () {

		$(this).parent().text('thank you on click')

		// if( $(this).find('svg').hasClass('svg_fill') ){
		// 	$(this).parent().find('.dislike svg').removeClass('svg_fill')

		// 	$(this).parent().find('span').removeClass('span_opacity')
		// 	$(this).find('svg').removeClass('svg_fill')
		// }else{
		// 	$(this).parent().find('.dislike svg').removeClass('svg_fill')

		// 	$(this).parent().find('span').addClass('span_opacity')
		// 	$(this).find('svg').addClass('svg_fill')
		// }
	})
	$('.page-index__questions .dislike').click(function () {

		$(this).parent().text('thank you on click')

		// if( $(this).find('svg').hasClass('svg_fill') ){
		// 	$(this).parent().find('.like svg').removeClass('svg_fill')

		// 	$(this).parent().find('span').removeClass('span_opacity')
		// 	$(this).find('svg').removeClass('svg_fill')
		// }else{
		// 	$(this).parent().find('.like svg').removeClass('svg_fill')

		// 	$(this).parent().find('span').addClass('span_opacity')
		// 	$(this).find('svg').addClass('svg_fill')
		// }
	})

	// LIKE














	// SELECT2

	$(".js-example-placeholder-multiple").select2({
	    placeholder: "Select city or airport"
	});

	// SELECT2














	// CALENDAR


	new AirDatepicker('.dateSingle1', {
		dateFormat: 'd MMM yyyy',
		range: true,
	    multipleDatesSeparator: ' - '
	})
	new AirDatepicker('.dateSingle2', {
		dateFormat: 'd MMM yyyy',
		range: true,
	    multipleDatesSeparator: ' - '
	})


	let dpMin, dpMax;

	dpMin = new AirDatepicker('.dateFrom', {
		dateFormat: 'd MMM yyyy',
	    onSelect({date}) {
	        dpMax.update({
	            minDate: date
	        })
	    }
	})

	dpMax = new AirDatepicker('.dateTo', {
		dateFormat: 'd MMM yyyy',
	    onSelect({date}) {
	        dpMin.update({
	            maxDate: date
	        })
	    }
	})

	// CALENDAR

	// $('.air-datepicker-nav--action').each(function () {
	// 	console.log($(this))
	// 	if( $(this).data('action') == 'prev' ){
	// 	}
	// })

































	// AKKORDEON

	$('.akkordeon__head').click(function () {
		$(this).parent().find('.akkordeon__body').slideToggle(200)
		$(this).parent().toggleClass('akkordeon_active')
	})
	// $(document).click(function (e) {
	//     var container = $('.akkordeon');
	//     if (container.has(e.target).length === 0){
 //        container.find('.akkordeon__body').slideUp(200)
	//     	container.removeClass('akkordeon_active')
	//     }
	// });

	// AKKORDEON









	$('.slider__arrows .slider__next').click(function () {
		if( $(this).closest('.wrapper').find('.switch__block_active').hasClass('switch__block_active') )
			$(this).closest('.wrapper').find('.switch__block_active .slick-next').click()
		else
			$(this).closest('.wrapper').find('.slick-next').click()
	})
	$('.slider__arrows .slider__prev').click(function () {
		if( $(this).closest('.wrapper').find('.switch__block_active').hasClass('switch__block_active') )
			$(this).closest('.wrapper').find('.switch__block_active .slick-prev').click()
		else
			$(this).closest('.wrapper').find('.slick-prev').click()
	})

	// SLIDERS


	$('.page-single-more .page-single__photos').slick({
		slidesToShow: 2,
		infinite: false,
		responsive:[
			{
				breakpoint: 992,
				settings: 'unslick'
			}
		]
	})

	$('.page-index__popular .slider__inner').slick({
		swipeToSlide: true,
		slidesToShow: 3,
		infinite: false,
		responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					centerMode: true,
					centerPadding: '130px'
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '130px'
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '70px'
				}
			}
		]
	})

	if( $(window).width() > 700 ){
		$('.item__slider').slick({
			dots: true,
			speed: 1,
			infinite: false,
			arrows: false
		})
		$('.car__item').each(function () {
			
			if( $(this).find('.item__photo').length <= 1 ){
				$(this).closest('.car__item').find('.slick-dots').hide()
			}else{

				let imgIndex = $(this).find('.item__photo').length-1
				let imgSrc = $(this).find('.item__photo img').eq(imgIndex).attr('src');

				$(this).find('.item__slider').slick('slickAdd',`

					<a href="#" class="item__photo">
		                <img src="${imgSrc}" alt="Photo">
		                <div class="img__text">
		                	<svg width="70" height="62" viewBox="0 0 70 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63 8.45455H52.535L47.355 0.634091C47.2288 0.44124 47.0575 0.282551 46.8561 0.171983C46.6547 0.0614141 46.4294 0.00235496 46.2 0H23.8C23.5706 0.00235496 23.3453 0.0614141 23.1439 0.171983C22.9425 0.282551 22.7712 0.44124 22.645 0.634091L17.465 8.45455H7C5.14632 8.4638 3.37118 9.20907 2.06042 10.5283C0.749651 11.8476 0.00919957 13.6343 0 15.5V54.9545C0.00919957 56.8203 0.749651 58.6069 2.06042 59.9262C3.37118 61.2455 5.14632 61.9907 7 62H63C64.8537 61.9907 66.6288 61.2455 67.9396 59.9262C69.2504 58.6069 69.9908 56.8203 70 54.9545V15.5C69.9908 13.6343 69.2504 11.8476 67.9396 10.5283C66.6288 9.20907 64.8537 8.4638 63 8.45455ZM67.2 54.9545C67.2 56.0757 66.7575 57.1509 65.9698 57.9437C65.1822 58.7364 64.1139 59.1818 63 59.1818H7C5.88609 59.1818 4.8178 58.7364 4.03015 57.9437C3.2425 57.1509 2.8 56.0757 2.8 54.9545V15.5C2.8 14.3789 3.2425 13.3036 4.03015 12.5109C4.8178 11.7181 5.88609 11.2727 7 11.2727H18.2C18.4294 11.2704 18.6547 11.2113 18.8561 11.1007C19.0575 10.9902 19.2288 10.8315 19.355 10.6386L24.535 2.81818H45.465L50.645 10.6386C50.7712 10.8315 50.9425 10.9902 51.1439 11.1007C51.3453 11.2113 51.5706 11.2704 51.8 11.2727H63C64.1139 11.2727 65.1822 11.7181 65.9698 12.5109C66.7575 13.3036 67.2 14.3789 67.2 15.5V54.9545ZM35 19.7273C32.2311 19.7273 29.5243 20.5537 27.222 22.102C24.9197 23.6503 23.1253 25.851 22.0657 28.4258C21.0061 31.0006 20.7288 33.8338 21.269 36.5672C21.8092 39.3006 23.1426 41.8113 25.1005 43.782C27.0584 45.7526 29.553 47.0946 32.2687 47.6383C34.9845 48.182 37.7994 47.903 40.3576 46.8365C42.9157 45.77 45.1022 43.9639 46.6406 41.6467C48.1789 39.3294 49 36.6051 49 33.8182C49 30.081 47.525 26.497 44.8995 23.8544C42.274 21.2118 38.713 19.7273 35 19.7273ZM35 45.0909C32.7848 45.0909 30.6194 44.4298 28.7776 43.1911C26.9358 41.9524 25.5002 40.1919 24.6525 38.1321C23.8048 36.0722 23.583 33.8057 24.0152 31.619C24.4474 29.4323 25.5141 27.4237 27.0804 25.8472C28.6468 24.2706 30.6424 23.197 32.815 22.7621C34.9876 22.3271 37.2395 22.5503 39.2861 23.4035C41.3326 24.2567 43.0818 25.7016 44.3125 27.5554C45.5431 29.4092 46.2 31.5886 46.2 33.8182C46.1908 36.805 45.0078 39.6669 42.9094 41.7789C40.811 43.891 37.9676 45.0816 35 45.0909Z" fill="white"/></svg>
		                	<span>Еще 5 фото</span>
		                </div>
		              </a>

					`);
			}

		})
	}


	$('.item__slider .slick-dots li').mousemove(function () {
		$(this).click()
	})
	$('.item__slider').mouseleave(function () {
		$(this).find('.slick-dots li').eq(0).click()
	})

	 // var slider = $(".slider").slick({
  //       infinite: true,
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       dots: true
	 // });

	 // var lis = [document.querySelectorAll(".item__slider .slick-dots li")];
	 // lis.forEach((el,i) => el.addEventListener("mouseenter", () => slider.slick("slickGoTo", i)));

	if( $('.item__slider .item__photo').length < 1 ){
		$('.item__slider .slick-dots').hide()
	}

	$('.page-country__locals .slider__inner').slick({
		swipeToSlide: true,
		slidesToShow: 4,
		responsive:[
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					centerMode: true,
					centerPadding: '148px',
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '40px'
				}
			}
		]
	})

	$('.page-index__reviews .slider__inner').slick({
		slidesToShow: 2,
		swipeToSlide: true,
		infinite: false,
		responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '280px'
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '130px'
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '70px'
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '60px'
				}
			}
		]
	})

	// SLIDERS


















	// SELECTS

    $('.header__regions select').select2();

    $('.select__head').click(function () {


    	if( !$(this).parent().hasClass('select_active') ){

	    	$('.select__body').slideUp(200)
	    	$('.select').removeClass('select_active')

    	}

    	$(this).parent().find('.select__body').slideToggle(200);
    	$(this).parent().toggleClass('select_active')


    })

    $('.option').click(function () {
    	let htmlPush = $(this).html()
    	let textPush = $(this).text()

    	$(this).closest('.select').find('.select__push').html(htmlPush)
    	$(this).closest('.select').find('input').val(textPush)

    	$(this).parent().find('.option').removeClass('option_check')
    	$(this).addClass('option_check')

    	$('.select__body').slideUp(200)
    	$('.select').removeClass('select_active')
    })

    $(document).click(function (e) {
	    var container = $('.select');
	    if (container.has(e.target).length === 0){
	        container.find('.select__body').slideUp(200)
	    	container.removeClass('select_active')
	    }
	});


	$('.header__currency .select__body .option').click(function () {
		let bSpanText = $(this).find('b').text()

		$(this).parent().parent().parent().find('.select__head span').text(bSpanText)
		$('.header__currency .select__body .option').removeClass('option_active')
		$(this).addClass('option_active')
	})

	// SELECTS










	// SWITCH BLOCK

	setTimeout(function () {
		$('.switch').each(function () {
			let indexSwitcher = $(this).find('.switch__item_active').index()

			$(this).parent().parent().find('.switch__block').hide()
			$(this).parent().parent().find('.switch__block').removeClass('switch__block_active')
			$(this).parent().parent().find('.switch__block').eq(indexSwitcher).show()
			$(this).parent().parent().find('.switch__block').eq(indexSwitcher).addClass('switch__block_active')


		})
	}, 500)


	$('.switch__item').click(function () {
		let indexItem = $(this).index()

		$(this).parent().find('.switch__item').removeClass('switch__item_active')
		$(this).toggleClass('switch__item_active')

		$(this).parent().parent().find('.switch__block').hide()
		$(this).parent().parent().find('.switch__block').removeClass('switch__block_active')
		$(this).parent().parent().find('.switch__block').eq(indexItem).show()
		$(this).parent().parent().find('.switch__block').eq(indexItem).addClass('switch__block_active')
		
		// $(this).closest('.wrapper').find('.slider__next').click()
	})

	// SWITCH BLOCK












	// COUNTBLOCK


	$('.countBlock').each(function () {

		let countNum = $(this).find('input').val()
		
		$(this).find('.countBlock__minus').click(function () {
			countNum--;
			if( countNum <= 0 ){
				$(this).addClass('countBlock__minus_disabled')
				countNum = 0
				$(this).closest('.countBlock').find('input').val(countNum)
			}else{
				$(this).removeClass('countBlock__minus_disabled')
				$(this).closest('.countBlock').find('input').val(countNum)
			}

		})
		
		$(this).find('.countBlock__plus').click(function () {
			countNum++;
			$(this).parent().find('.countBlock__minus').removeClass('countBlock__minus_disabled')
			$(this).closest('.countBlock').find('input').val(countNum)

		})

	})

	// COUNTBLOCK















	// LIST BUTTON MORE

	let listMoreCount = 1;

	setTimeout(function () {
		$('.list__content_lots').each(function () {
			listMoreCount = $(this).data('show-items')

			// console.log(listMoreCount)

				
			$(this).find('.item-more-block').each(function () {
				if( $(this).index() < listMoreCount ){
					$(this).show()
				}else
					$(this).hide()
			})


			let countPlus = listMoreCount * 2

			$(this).parent().find('.list__more').click(function () {

				listMoreCount += countPlus;

				$(this).parent().find('.item-more-block').each(function () {
					if( $(this).index() < listMoreCount ){
						$(this).show()
					}else
						$(this).hide()

				})
				if( listMoreCount >= $(this).parent().find('.item-more-block').length ){
					$(this).hide()
					$(this).parent().find('.list__more_end').show()
					$(this).parent().find('.list__content_lots').removeClass('list__content_lots')
				}

			})
		})
	}, 500)


	// LIST BUTTON MORE












	// SCROLLTO SLIDE

	$(".page-texts__tabs").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});

	$('.list__more_end a').click(function (e) {
		event.preventDefault();
		// var id  = $(this).attr('href'),
			// top = $(id).offset().top;
		$('body,html').animate({scrollTop: 0}, 500);
	})

	// SCROLLTO SLIDE




























	// MEDIA

	if( $(window).width() < 992 ){
		$('.users__item').click(function () {
			$('.chat__block').hide()
			$('.chat__block').eq($(this).index()).show()
			$('.page-myMessages__users').hide()

			$('.users__item').removeClass('users__item_active')
			$(this).addClass('users__item_active')
		})
		$('.chat__back').click(function () {
			$('.chat__block').hide()
			$('.page-myMessages__users').show()

			$('.users__item').removeClass('users__item_active')
		})
	}

	if( $(window).width() < 576 ){
		$('.page-country__find .find__rht').slick({
			// centerMode: true,
			slidesToShow: 1
		})
	}

	// MEDIA


})






























