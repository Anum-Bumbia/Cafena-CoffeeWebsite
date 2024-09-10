$(document).ready(function () {
  $('#slider-box').slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    fade: true,
    fadeSpeed: 2000,
    pauseOnHover: true

  })
  $('#review-content').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000

  })
  $('#menubtn').click(function(){
    window.location.href=('menu.html')
  })
  
  $('#subscriptionForm').submit(function (event) {
    var subscribe = $('#email-input').val()
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if (subscribe == "") {
      
      $('#subscribeError').text("* Email Required")
        event.preventDefault()
    }
    else if (!emailPattern.test(subscribe)) {

        $('#subscribeError').text("* Wrong Email")
        event.preventDefault()

    }
    
})
  // Contact Page

  $('#table-book-form').submit(function (event) {

    
    var username = $('#username').val()
    var email = $('#email').val()
    var phone = $('#phone').val()
    var namePattern = /^[A-Za-z]+$/
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    var phonePattern = /^\d{10}$/
    var paragraph = $('#message')

    console.log(username)
    if (username == "") {

      $('#usernameError').text(" *Username Required")
      event.preventDefault()
    }
    else if (!namePattern.test(username)) {

      $('#usernameError').text("* Only Alphabet")
      event.preventDefault()

    }

    if (email == "") {

      $('#emailError').text("* Email Required")
      event.preventDefault()
    }
    else if (!emailPattern.test(email)) {

      $('#emailError').text("* Wrong Email")
      event.preventDefault()
    }

    if (phone == "") {

      $('#phoneError').text("* phone Required")
      event.preventDefault()
    }
    else if (!phonePattern.test(phone)) {

      $('#phoneError').text("* 10 digits")
      event.preventDefault()
    }
    paragraph.first().text("Thank you customer!")


  })

  $(".question").click(function () {
    $(".accordion-item").removeClass("active")
    $(this).parent().addClass("active")
    $(".icon").text("+")
    $(this).children(".icon").text("-")
  })

  $('.buttons').click(function () {

    $(this).addClass('active').siblings().removeClass('active');

    var filter = $(this).attr('data-filter')

    if (filter == 'all') {
      $('.image').show(400);
    } else {
      $('.image').not('.' + filter).hide(200);
      $('.image').filter('.' + filter).show(400);
    }

  })

  $('.gallery').magnificPopup({

    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }

  })

})

