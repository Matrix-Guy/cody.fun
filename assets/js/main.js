function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);

  $('.projects').hide();

  $('.projects-button').on('click', function() {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
	});
}

$(document).ready(main);
