/*
  -- XNASUNIS LIBS/JS --
  
  -- BETTEROUTPUT LIB --
  
  -- UNDER GNU 3.0 LICENSE FEEL FREE TO USE --
  
  -- CONTACT FOR HELP: xNasuni#8498 --
  
*/

var betteroutput = {}
const color = require("./ansicolors.js")

betteroutput['warn'] = function(str) { 
  console.log(color.reset + color.foreBrightYellow + '⚠ [WARN] - ' + str + color.reset)
}
betteroutput['error'] = function(str) { 
  console.log(color.reset + color.foreRed + '✕ [ERROR] - ' + str + color.reset)
}
betteroutput['info'] = function(str) { 
  console.log(color.reset + color.foreBrightBlue + '🛈 [INFO] - ' + str + color.reset)
}
betteroutput['success'] = function(str) { 
  console.log(color.reset + color.foreBrightGreen + '✓ [SUCCESS] - ' + str + color.reset)
}
betteroutput['comment'] = function(str) { 
  console.log(color.reset + color.dim + '✦ [COMMENT] - ' + str + color.reset)
}
  
betteroutput['system'] = function(str) { 
  console.log(color.reset + color.bold + color.foreRed + '✦ [SYSTEM] - ' + str + color.reset)
}
betteroutput['user'] = function(str) {
  console.log(color.reset + color.bold + color.foreBrightBlue + '✦ [USER] - ' + str + color.reset)
}
betteroutput['preview'] = function() {
  betteroutput.info('INFORMATION')
  betteroutput.warn('WARNING')
  betteroutput.error('ERROR')
  betteroutput.success('SUCCESS')
  betteroutput.user('USER')
  betteroutput.comment('COMMENT')
  betteroutput.system('SYSTEM')   
}

module.exports = betteroutput
