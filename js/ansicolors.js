/*
  -- XNASUNIS LIBS/JS --
  
  -- ANSI COLOR LIB --
  
  -- UNDER GNU 3.0 LICENSE FEEL FREE TO USE --
  
  -- CONTACT FOR HELP: xNasuni#8498 --
  
*/

const color = {
  /* [VARIABLES] */
  /* [SPECIAL EFFECTS] */
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  italic: "\x1b[3m",
  underScore: "\x1b[4m",
  blink: "\x1b[5m",
  inverse: "\x1b[7m",
  hidden: "\x1b[8m",
  strikeThrough: "\x1b[9m",
  /* [TEXT COLOR] */
  foreBlack: "\x1b[30m",
  foreRed: "\x1b[31m",
  foreGreen: "\x1b[32m",
  foreYellow: "\x1b[33m",
  foreBlue: "\x1b[34m",
  foreMagenta: "\x1b[35m",
  foreCyan: "\x1b[36m",
  foreWhite: "\x1b[37m",
  /* [BRIGHT TEXT COLORS] */
  foreBrightBlack: "\x1b[90m",
  foreBrightRed: "\x1b[91m",
  foreBrightGreen: "\x1b[92m",
  foreBrightYellow: "\x1b[93m",
  foreBrightBlue: "\x1b[94m",
  foreBrightMagenta: "\x1b[95m",
  foreBrightCyan: "\x1b[96m",
  foreBrightWhite: "\x1b[97m",
  /* [BG COLOR] */
  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
  /* [BRIGHT BG COLORS] */
  bgBrightBlack: "\x1b[100m",
  bgBrightRed: "\x1b[101m",
  bgBrightGreen: "\x1b[102m",
  bgBrightYellow: "\x1b[103m",
  bgBrightBlue: "\x1b[104m",
  bgBrightMagenta: "\x1b[105m",
  bgBrightCyan: "\x1b[106m",
  bgBrightWhite: "\x1b[107m"
  /* [VARIABLES] */
}

color['preview'] = function() {
  var tab1 = []
  var tab2 = []
  var tab3 = []
  var tab4 = []
  for (let i = 40; i <= 46; i++) {     
    tab1[tab1.length + 1] = `\x1b[${i}mCOLORS\x1b[0m`
  }
  for (let i = 30; i <= 36; i++) {
    tab2[tab2.length + 1] = `\x1b[${i}mCOLORS\x1b[0m`
  }
  for (let i = 100; i <= 106; i++) {
    tab3[tab3.length + 1] = `\x1b[${i}mCOLORS\x1b[0m`
  }
  for (let i = 90; i <= 96; i++) {
    tab4[tab4.length + 1] = `\x1b[${i}mCOLORS\x1b[0m`
  }
  console.log(tab3.join(""))
  console.log(tab1.join(""))
  console.log(tab2.join(""))
  console.log(tab4.join(""))
  console.log(color.bold + "COLORS" + color.reset + color.italic + "COLORS" + color.reset + color.inverse + "COLORS" + color.reset + color.dim + "COLORS" + color.reset + color.blink + "COLORS" + color.reset + color.underScore + "COLORS" + color.reset + color.strikeThrough + "COLORS" + color.reset + color.hidden + "COLORS" + color.reset)
}

module.exports = color
