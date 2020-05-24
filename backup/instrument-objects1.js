// Levels objects  lowest note is E3(0), 3rd space C(13), range - number of notes
// Clefs - 1 for treble, 2 for bass, 3 for both
var level_beggen =  { lowestNote:7, range:9, numFlats:0, numSharps:0, accidentals:false, clef:1 };
var level_intgen =  { lowestNote:4, range:15, numFlats:3, numSharps:3,accidentals:true, clef:1 };
var level_advgen =  { lowestNote:0, range:22, numFlats:6, numSharps:6, accidentals:true,clef:3 };
var level_rec =     { lowestNote:6, range:8, numFlats:0, numSharps:0, accidentals:false, clef:2 };
var level_begflu =  { lowestNote:9, range:10, numFlats:0, numSharps:0, accidentals:false, clef:1 };
var level_intflu =  { lowestNote:6, range:16, numFlats:4, numSharps:2, accidentals:true, clef:1 };
var level_advflu =  { lowestNote:4, range:18, numFlats:6, numSharps:6, accidentals:true, clef:1 };
var level_begtub =  { lowestNote:2, range:8, numFlats:0, numSharps:0, accidentals:false, clef:2 };
var level_inttub =  { lowestNote:0, range:11, numFlats:4, numSharps:0, accidentals:true, clef:2 };
var level_advtub =  { lowestNote:0, range:22, numFlats:6, numSharps:6, accidentals:true, clef:2 };
var level_begcla =  { lowestNote:3, range:8, numFlats:0, numSharps:0, accidentals:false, clef:1 };
var level_intcla =  { lowestNote:0, range:13, numFlats:2, numSharps:2, accidentals:true, clef:1 };
var level_advcla =  { lowestNote:0, range:10, numFlats:6, numSharps:6, accidentals:true, clef:1 };
var level_begsax =  { lowestNote:6, range:16, numFlats:0, numSharps:0, accidentals:false, clef:1 };
var level_intsax =  { lowestNote:5, range:2, numFlats:1, numSharps:3, accidentals:true, clef:1 };
var level_advsax =  { lowestNote:4, range:17, numFlats:6, numSharps:6, accidentals:true, clef:1 };
