// Levels objects  Note - E3(0), E4(7), E5(14), C(17), E6(21), F6(22)
// Clefs - 1 for treble, 2 for bass, 3 for both
var level_beggen =  { lowestNote:7, highestNote:15, numFlats:0, numSharps:0, accidentals:false, clef:1 };
var level_intgen =  { lowestNote:3, highestNote:19, numFlats:3, numSharps:3,accidentals:true, clef:1 };
var level_advgen =  { lowestNote:0, highestNote:22, numFlats:6, numSharps:6, accidentals:true,clef:3 };

var level_begflu =  { lowestNote:8, highestNote:18, numFlats:0, numSharps:0, accidentals:false, clef:1 };
var level_intflu =  { lowestNote:7, highestNote:19, numFlats:4, numSharps:1, accidentals:true, clef:1 };
var level_advflu =  { lowestNote:4, highestNote:22, numFlats:6, numSharps:6, accidentals:true, clef:1 };

var level_begcla =  { lowestNote:5, highestNote:11, numFlats:0, numSharps:0, accidentals:false, clef:1 };
var level_intcla =  { lowestNote:2, highestNote:14, numFlats:2, numSharps:2, accidentals:true, clef:1 };
var level_advcla =  { lowestNote:0, highestNote:22, numFlats:6, numSharps:6, accidentals:true, clef:1 };

var level_begsax =  { lowestNote:8, highestNote:15, numFlats:0, numSharps:0, accidentals:false, clef:1 };
var level_intsax =  { lowestNote:5, highestNote:19, numFlats:1, numSharps:3, accidentals:true, clef:1 };
var level_advsax =  { lowestNote:4, highestNote:22, numFlats:6, numSharps:6, accidentals:true, clef:1 };

var level_begtpt =  { lowestNote:5, highestNote:12, numFlats:0, numSharps:0, accidentals:false, clef:1 };
var level_inttpt =  { lowestNote:2, highestNote:14, numFlats:2, numSharps:2, accidentals:true, clef:1 };
var level_advtpt =  { lowestNote:1, highestNote:19, numFlats:6, numSharps:6, accidentals:true, clef:1 };

var level_begtbn =  { lowestNote:7, highestNote:14, numFlats:0, numSharps:0, accidentals:false, clef:2 };
var level_inttbn =  { lowestNote:6, highestNote:16, numFlats:4, numSharps:0, accidentals:true, clef:2 };
var level_advtbn =  { lowestNote:4, highestNote:22, numFlats:6, numSharps:6, accidentals:true, clef:2 };

var level_begtub =  { lowestNote:2, highestNote:9, numFlats:0, numSharps:0, accidentals:false, clef:2 };
var level_inttub =  { lowestNote:0, highestNote:11, numFlats:4, numSharps:0, accidentals:true, clef:2 };
var level_advtub =  { lowestNote:0, highestNote:16, numFlats:6, numSharps:6, accidentals:true, clef:2 };

var level_rec =     { lowestNote:6, highestNote:13, numFlats:0, numSharps:0, accidentals:false, clef:1 };
