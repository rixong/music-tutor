
var majChoice = '';
var minChoice = '';
var modality = '';

function showKeyMenu() {
  // openMenu ();
  $('#instr-strip, #level-strip').hide();
  $('.accidental-tray, .level-info, #note-display, #ledgers, #level-info').hide();
  $('#clef-strip, #mode-strip, #go').show();
  clefChoice = '';
}

// function keyTutor() {
  $(document).ready(function() {
    $('.clef').click(function() {
      clefChoice = $(this).attr('value');
      // console.log(clefChoice);
    });
    $('.mode').click(function() {
      modality = $(this).attr('value');
      // console.log(modality);
      $('#go').text('Go!');
    });
  });


  function displayKeySig() {
    console.log('Start');
    setAccidentals(6, 6);
    setClef();
    $('#maj-wrapper .dropbtn').css({
      color: 'white',
    })
    $('#maj-wrapper .dropbtn').text('Major Key');
    $('#min-wrapper .dropbtn').css({
      color: 'white',
    });
    $('#min-wrapper .dropbtn').text('Minor Key');

    /// Major Key selection
    $('#maj-wrapper .dropbtn').mouseenter(function() {
      $('#maj-list').show();
    });
    $('#maj-list').mouseleave(function() {
      $('#maj-list').hide();
    });
    $('.but-maj').click(function() {
      $('#maj-wrapper .dropbtn').text($(this).text());
      majChoice = $(this).attr('id');
      $('#maj-list').hide();
    });

    /// Minor Key selection
    $('#min-wrapper .dropbtn').mouseenter(function() {
      $('#min-list').show();
    });
    $('#min-list').mouseleave(function() {
      $('#min-list').hide();
    });
    $('.but-min').click(function() {
      $('#min-wrapper .dropbtn').text($(this).text());
      minChoice = $(this).attr('id');
      $('#min-list').hide();
    });

  }

  function checkKeySig() {
    $('.dropbtn').off();
    console.log('Major:', majChoice, " Minor:", minChoice, ' Clef:', clefChoice);
    if (majChoice == curKey) {
      $('#maj-wrapper .dropbtn').css({
        color: 'forestgreen'
      });
      numRight += 1;
    } else {
      $('#maj-wrapper .dropbtn').css({
        color: 'firebrick'
      });
      numWrong += 1;
    }
    if(modality != 'maj') {
      if (minChoice == curKey) {
        $('#min-wrapper .dropbtn').css({
          color: 'forestgreen'
        });
        numRight += 1;
      } else {
        $('#min-wrapper .dropbtn').css({
          color: 'firebrick'
        });
        numWrong += 1;
      }
    }
    updateScore();
  }

  /// Submit answer
  $(document).ready(function() {
    $('.submit').click(function() {
      if ($(this).hasClass('go-again')) {
        $(this).removeClass('go-again');
        $(this).text('Submit');
        displayKeySig();
      } else {
        $(this).addClass('go-again');
        $(this).text('Go again?');
        checkKeySig();
      };
    });
  });
