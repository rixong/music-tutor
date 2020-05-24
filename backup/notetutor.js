/// digits represent Letter names: E-0,F-1,G-2,A-3,B-4,C-5,D-6
// lists below store order of accidentals
const SHARP_LIST = [1, 5, 2, 6, 3, 0, 4];
const FLAT_LIST = [4, 0, 3, 6, 2, 5, 1];


/// current status
var curNote;
var curKey;
var curClef;
var numRight = 0;
var numWrong = 0;
var seconds = 0;
var clefChoice;
var taskChoice;

/// Seconds timer
function incrementSeconds() {
  seconds += 1;
  let mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  let secs = (seconds % 60).toString().padStart(2, '0');
  $('#seconds-counter').text(mins + ":" + secs);
}
var x = setInterval(incrementSeconds, 1000);

function setAccidentals(numFlats, numSharps) {
  clearAccidentals();
  let keyFamily = '';
  let rndmNum = Math.floor(Math.random() * (numFlats + numSharps + 1));
  curKey = rndmNum - numFlats;
  if (curKey < 0) {
    keyFamily = "flat";
  } else {
    keyFamily = "sharp";
  }
  for (x = 1; x <= Math.abs(curKey); x++) {
    var accidental = '#' + keyFamily + x;
    $(accidental).show();
  }
}

function clearAccidentals() {
  $('.accidental').css('display', 'none');
  $('#ledgers').css({
    left: 200
  });
}

function setClef() {
  if (clefChoice == 3) {
    curClef = Math.ceil(Math.random() * 2);
  } else {
    curClef = clefChoice
  }
  if (curClef == 1) {
    $('#bass').hide();
    $('#treble').show();
    $('#accidental-box').css({
      top: -55
    });
  } else if (curClef == 2) {
    $('#treble').hide();
    $('#bass').show();
    $('#accidental-box').css({
      top: -31
    });
  }
}

function updateScore() {
  let total = numRight + numWrong;
  $('#correct').text("Correct:" + numRight);
  $('#wrong').text("Missed:" + numWrong);
  $('#total').text("Total:" + total);
}

function reset() {
  numRight = 0;
  numWrong = 0;
  seconds = 0;
  updateScore();
  // selectNote();
}

var difficultyName = '';
var instrumentName = '';
var instrument = '';
var difficulty = '';

$(document).ready(function(){
  $('.task').click(function(){
    if ($(this).attr('id') == 'note-tutor') {
      taskChoice = 'note-tutor';
      showNoteMenu();
    }
    if ($(this).attr('id') == 'key-tutor') {
      taskChoice = 'key-tutor';
      showKeyMenu();
    }
      $('#seconds-counter, #stats-box').show();
  });
});

$('#go').click(function() {
  if(taskChoice == 'note-tutor') {
    if (difficulty != '' && instrument != '') {
      closeMenu();
      $('.keysig-wrapper').hide();
      $('#accidental-tray, .level-info, #note-display, #ledgers, #level-info').show();
      noteTutorLevelChange();
    }
  }
  if(taskChoice == 'key-tutor') {
    console.log(modality, ' ', clefChoice);
    if(clefChoice != '' && modality != ''){
      closeMenu();
      reset();
      if(modality == 'maj') {
        $('#min-wrapper').hide();
      }
      else{
        $('#min-wrapper').show();
      }
      $('.keysig-wrapper').show();
      displayKeySig();
    }
  }
});

function showNoteMenu() {
  openMenu ();
  $('#clef-strip, #mode-strip').hide();
  $('#instr-strip, #level-strip, #go').show();
  $('.keysig-wrapper').hide();
}

$('.lev').click(function() {
  $('.lev').css('backgroundColor','')
  $(this).css('backgroundColor','#6A8A82');
  difficulty = $(this).attr('id');
  difficultyName = $(this).text();
  $('#level-info').text(instrumentName + ' - ' + difficultyName );
  $('#go').text('Go!');
});

$('.instr').click(function() {
  $('.instr').css('backgroundColor','')
  $(this).css('backgroundColor','#6A8A82');
  instrument = $(this).attr('id');
  instrumentName = $(this).text();
  $('#level-info').text(instrumentName + ' - ' + difficultyName );
});


function noteTutorLevelChange() {
  level = 'level_' + difficulty + instrument;
  console.log('level:' + level);
  clefChoice = this[level].clef;
  setClef();
  accidentalTray(this[level].accidentals);
  reset();
  $('#note-display, #ledgers, #natural-buttons').show();
  selectNote();
}

function accidentalTray(viewAccidentals) {
  let pos;
  if (viewAccidentals == false) {
    pos = 230;
    $('#sharp-buttons, #flat-buttons').slideUp('fast');
  } else {
    pos = 270;
    $('#sharp-buttons, #flat-buttons').slideDown('fast');
    $('#level-info').css({top:'140px'});
  }
  if (this[level].lowestNote < 5) {
    pos = eval((5 - this[level].lowestNote) * 12 + pos) + 'px';
  }
  $('#accidental-tray').css({
    top: pos
  })
}

///Display note
function selectNote() {
  const baseVerticalPos = 170;
  const stepMoveConstant = 12; /// vert distance to move note semi tone
  let rndmNotePick = Math.floor(Math.random() * (this[level].highestNote - this[level].lowestNote)) + this[level].lowestNote;  //
  if (rndmNotePick != curNote) {
    clearLedgers();
    if (clefChoice == 3) { /// set clef
      setClef();
    }
    let verNoteMove = (baseVerticalPos - (rndmNotePick * stepMoveConstant)).toString() + "px";
    setAccidentals(this[level].numFlats, this[level].numSharps);

    /// draw note and ledger lines (if needed)
    var horLedgMove = 110 + Math.abs(curKey) * 20;
    $('#ledgers').css({
      left: horLedgMove
    });
    var horNoteMove = 114 + Math.abs(curKey) * 20;

    if (rndmNotePick < 11) {
      if (rndmNotePick < 6) {
        let ledgShow = 3 - (Math.floor(rndmNotePick / 2));
        for (x = 1; x <= ledgShow; x++) {
          let ledgerNum = "#ledgLower" + x;
          $(ledgerNum).fadeIn();
        }
      }
      $("#note-display").animate({
        top: verNoteMove,
        left: horNoteMove
      }, 150);
      $("#note-display").css({
        "transform": "rotate(0deg)"
      })
    } else {
      if (rndmNotePick > 16) {
        let ledgShow = Math.floor((rndmNotePick - 15) / 2);
        for (x = 1; x <= ledgShow; x++) {
          let ledgerNum = "#ledgUpper" + x;
          $(ledgerNum).fadeIn();
        }
      }
      $("#note-display").animate({
        top: verNoteMove,
        left: horNoteMove
      }, 150);
      $("#note-display").css({
        "transform": "rotate(180deg)"
      })
    }
    curNote = rndmNotePick;
  } else {
    selectNote();
  }
  // console.log('Current note:' + curNote + ' Current key:' + curKey);
}

function clearLedgers() {
  $(".ledger").hide();
}

///select answer
$('#accidental-tray').find('button').click(function() {
  checkNote($(this).attr('value'));
});

/// Check and update answer
function checkNote(e) {
  let answeredNote = e;
  let askedNote = curNote % 7;
  if (curClef == 2) {
    askedNote = (curNote + 2) % 7;
  }

  /// if sharp key sig checking if askedNote is in signature
  if (curKey > 0) {
    for (x = 0; x < curKey; x++) {
      if (SHARP_LIST[x] == askedNote) {
        askedNote = askedNote + 20
      }
    }
  }
  /// if flat keysig askedNote:
  if (curKey < 0) {
    for (x = 0; x < Math.abs(curKey); x++) {
      if (FLAT_LIST[x] == askedNote) {
        askedNote = askedNote + 10
      }
    }
  }
  console.log("Asked note: " + askedNote + " Answered note:" + answeredNote + " Key:" + curKey);
  ///color note
  if (askedNote == answeredNote) {
    numRight += 1;
    noteColor = "#11e028"; //green notehead
  } else {
    numWrong += 1;
    noteColor = "#db0c0c"; //red notehead
  }
  $(document).ready(function() {
    $('#head,#stem').animate({
      backgroundColor: noteColor
    }, 50)
    $('#head,#stem').animate({
      backgroundColor: 'black'
    }, 500)
    setTimeout(function() {
      updateScore();
      selectNote();
    }, 600);
  });
}

// }


$('#open-menu-icon').click(function() {
  openMenu();
});

$('#close-menu-icon').click(function() {
  closeMenu();
});


function openMenu() {
  // $(document).ready(function() {
  $('#menu-container').animate({
    'left': '0px'
  });
  $('#main-window').animate({
    'left': '150px'
  });
  $('#main-window').css('filter', 'brightness(25%)');
}

function closeMenu() {
  $(document).ready(function() {
    $('#menu-container').animate({
      'left': '-260px'
    });
    $('#main-window').animate({
      'left': '0px',
    });
    $('#main-window').css('filter', 'brightness(100%)');
  });
}
