var myTotal = 0;
var numoCards = 0;
var myCards = [];
var dcard = 0;
var aceC = false;

function reset() {
  $("div.welcome").html("Welcome to Blackjack Javascript by Cody");
  $("img.c1ace").hide();
  $("img.c2ace").hide();
  $("img.c3ace").hide();
  $("img.c4ace").hide();
  $("img.c5ace").hide();
  $("img.c6ace").hide();
  $("img.c1j").hide();
  $("img.c2j").hide();
  $("img.c3j").hide();
  $("img.c4j").hide();
  $("img.c5j").hide();
  $("img.c6j").hide();
  $("img.c1q").hide();
  $("img.c2q").hide();
  $("img.c3q").hide();
  $("img.c4q").hide();
  $("img.c5q").hide();
  $("img.c6q").hide();
  $("img.c1k").hide();
  $("img.c2k").hide();
  $("img.c3k").hide();
  $("img.c4k").hide();
  $("img.c5k").hide();
  $("img.c6k").hide();
  $("img.c12").hide();
  $("img.c22").hide();
  $("img.c32").hide();
  $("img.c42").hide();
  $("img.c52").hide();
  $("img.c62").hide();
  $("img.c13").hide();
  $("img.c23").hide();
  $("img.c33").hide();
  $("img.c43").hide();
  $("img.c53").hide();
  $("img.c63").hide();
  $("img.c14").hide();
  $("img.c24").hide();
  $("img.c34").hide();
  $("img.c44").hide();
  $("img.c54").hide();
  $("img.c64").hide();
  $("img.c15").hide();
  $("img.c25").hide();
  $("img.c35").hide();
  $("img.c45").hide();
  $("img.c55").hide();
  $("img.c65").hide();
  $("img.c16").hide();
  $("img.c26").hide();
  $("img.c36").hide();
  $("img.c46").hide();
  $("img.c56").hide();
  $("img.c66").hide();
  $("img.c17").hide();
  $("img.c27").hide();
  $("img.c37").hide();
  $("img.c47").hide();
  $("img.c57").hide();
  $("img.c67").hide();
  $("img.c18").hide();
  $("img.c28").hide();
  $("img.c38").hide();
  $("img.c48").hide();
  $("img.c58").hide();
  $("img.c68").hide();
  $("img.c19").hide();
  $("img.c29").hide();
  $("img.c39").hide();
  $("img.c49").hide();
  $("img.c59").hide();
  $("img.c69").hide();
  $("img.c110").hide();
  $("img.c210").hide();
  $("img.c310").hide();
  $("img.c410").hide();
  $("img.c510").hide();
  $("img.c610").hide();
  myTotal = 0;
  numoCards = 0;
  myCards = [];
  dcard = 0;
  aceC = false;
}






function dealme(cardsToDraw) {
  var numoCardsi = numoCards
  for (i = 0 + numoCardsi; i < cardsToDraw + numoCardsi; i++) {
    function deal(dcard) {
      console.log('Drawing card...');
      dcard = Math.floor(Math.random() * 13) + 1;
      if (dcard === 1) {
        console.log('You have drawn an Ace!');
        dcard = 'ace';
        if (numoCards === 0) {
          $("img.c1ace").show();
        } else if (numoCards === 1) {
          $("img.c2ace").show();
        } else if (numoCards === 2) {
          $("img.c3ace").show();
        } else if (numoCards === 3) {
          $("img.c4ace").show();
        }

        var sumMet = myCards.reduce(add, 0);
        function add(a, b) {
            return a + b;
        }
          if (sumMet > 10) {
            console.log('Ace is soft!');
            dcard = 1;
          } else {
            console.log('Ace is hard');
            dcard = 11;
          }
      } else if(dcard > 1 && dcard < 11) {
        console.log('You have drawn a ' + dcard);
        if (dcard === 2) {
          if (numoCards === 0) {
            $("img.c12").show();
          } else if (numoCards === 1) {
            $("img.c22").show();
          } else if (numoCards === 2) {
            $("img.c32").show();
          } else if (numoCards === 3) {
            $("img.c42").show();
          } else if (numoCards === 4) {
            $("img.c52").show();
          } else if (numoCards === 5) {
            $("img.c62").show();
          }
        } else if (dcard === 3) {
          if (numoCards === 0) {
            $("img.c13").show();
          } else if (numoCards === 1) {
            $("img.c23").show();
          } else if (numoCards === 2) {
            $("img.c33").show();
          } else if (numoCards === 3) {
            $("img.c43").show();
          } else if (numoCards === 4) {
            $("img.c53").show();
          } else if (numoCards === 5) {
            $("img.c63").show();
          }
        } else if (dcard === 4) {
          if (numoCards === 0) {
            $("img.c14").show();
          } else if (numoCards === 1) {
            $("img.c24").show();
          } else if (numoCards === 2) {
            $("img.c34").show();
          } else if (numoCards === 3) {
            $("img.c44").show();
          } else if (numoCards === 4) {
            $("img.c54").show();
          } else if (numoCards === 5) {
            $("img.c64").show();
          }
        } else if (dcard === 5) {
          if (numoCards === 0) {
            $("img.c15").show();
          } else if (numoCards === 1) {
            $("img.c25").show();
          } else if (numoCards === 2) {
            $("img.c35").show();
          } else if (numoCards === 3) {
            $("img.c45").show();
          } else if (numoCards === 4) {
            $("img.c55").show();
          } else if (numoCards === 5) {
            $("img.c65").show();
          }
        } else if (dcard === 6) {
          if (numoCards === 0) {
            $("img.c16").show();
          } else if (numoCards === 1) {
            $("img.c26").show();
          } else if (numoCards === 2) {
            $("img.c36").show();
          } else if (numoCards === 3) {
            $("img.c46").show();
          } else if (numoCards === 4) {
            $("img.c56").show();
          } else if (numoCards === 5) {
            $("img.c66").show();
          }
        } else if (dcard === 7) {
          if (numoCards === 0) {
            $("img.c17").show();
          } else if (numoCards === 1) {
            $("img.c27").show();
          } else if (numoCards === 2) {
            $("img.c37").show();
          } else if (numoCards === 3) {
            $("img.c47").show();
          } else if (numoCards === 4) {
            $("img.c57").show();
          } else if (numoCards === 5) {
            $("img.c67").show();
          }
        } else if (dcard === 8) {
          if (numoCards === 0) {
            $("img.c18").show();
          } else if (numoCards === 1) {
            $("img.c28").show();
          } else if (numoCards === 2) {
            $("img.c38").show();
          } else if (numoCards === 3) {
            $("img.c48").show();
          } else if (numoCards === 4) {
            $("img.c58").show();
          } else if (numoCards === 5) {
            $("img.c68").show();
          }
        } else if (dcard === 9) {
          if (numoCards === 0) {
            $("img.c19").show();
          } else if (numoCards === 1) {
            $("img.c29").show();
          } else if (numoCards === 2) {
            $("img.c39").show();
          } else if (numoCards === 3) {
            $("img.c49").show();
          } else if (numoCards === 4) {
            $("img.c59").show();
          } else if (numoCards === 5) {
            $("img.c69").show();
          }
        } else if (dcard === 10) {
          if (numoCards === 0) {
            $("img.c110").show();
          } else if (numoCards === 1) {
            $("img.c210").show();
          } else if (numoCards === 2) {
            $("img.c310").show();
          } else if (numoCards === 3) {
            $("img.c410").show();
          } else if (numoCards === 4) {
            $("img.c510").show();
          } else if (numoCards === 5) {
            $("img.c610").show();
          }
        }
      } else if(dcard === 11) {
        console.log('You have drawn a Jack')
        if (numoCards === 0) {
          $("img.c1j").show();
        } else if (numoCards === 1) {
          $("img.c2j").show();
        } else if (numoCards === 2) {
          $("img.c3j").show();
        } else if (numoCards === 3) {
          $("img.c4j").show();
        } else if (numoCards === 4) {
          $("img.c5j").show();
        } else if (numoCards === 5) {
          $("img.c6j").show();
        }
        dcard = 10;
      } else if(dcard === 12) {
        console.log('You have drawn a Queen')
        if (numoCards === 0) {
          $("img.c1q").show();
        } else if (numoCards === 1) {
          $("img.c2q").show();
        } else if (numoCards === 2) {
          $("img.c3q").show();
        } else if (numoCards === 3) {
          $("img.c4q").show();
        }
        dcard = 10;
      } else if(dcard === 13) {
        console.log('You have drawn a King')
        if (numoCards === 0) {
          $("img.c1k").show();
        } else if (numoCards === 1) {
          $("img.c2k").show();
        } else if (numoCards === 2) {
          $("img.c3k").show();
        } else if (numoCards === 3) {
          $("img.c4k").show();
        }
        dcard = 10;
      } else {
        console.log('Invalid Integer')
      }
      numoCards = numoCards + 1;
      myCards[i] = dcard
    }
    deal(myCards);
    console.log('Total Cards ' + numoCards);
  }
}

function cardsTotal() {
  var sumMe = myCards.reduce(add, 0);
  function add(a, b) {
      return a + b;
  }
  if (aceC) {
    if (sumMe > 10) {
      console.log('Ace is soft!');
      dcard = 1;
    } else {
      console.log('Ace is hard');
      dcard = 11;
    }
  } else {
    console.log(sumMe);
  }
}



function split() {

}



function display() {
  console.log(myCards);
  cardsTotal();
}

function hit() {
  numoCards = numoCards + 1;
}



$(document).ready(function(){
  reset();
});
