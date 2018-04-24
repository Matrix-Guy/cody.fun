function counter() {
  let message = $('#message').val();
  let repeats = $('#rep').val();

  for (let i = 0; i < repeats; i++) {
    $('#result').append(`${message} <br />`)
  }
}

function add() {
  let acc = 0;

  for (let i = Number($('#num').val()); i > 0; i--) {
    acc += i;
  }
  $('#result2').append(`${acc} <br />`)
}
