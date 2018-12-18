const onPulseClick = function () {
    $('#message').text('rollOut.')
    $('#message').css('background-Color', 'blue')
    setTimeout(() => $('#message').text(''), 3000)
    $('.pulseDiv').addClass('animated pulse');
  }