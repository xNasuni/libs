--[[

  -- XNASUNIS LIBS/LUA --

  -- ANSI COLOR LIB --
  
  -- UNDER GNU 3.0 LICENSE FEEL FREE TO USE --

--]]

local color = {
  -- [VARIABLES] --
  -- [SPECIAL EFFECTS] --
  reset = '\27[0m',
  bold = '\27[1m',
  dim = '\27[2m',
  italic = '\27[3m',
  underScore = '\27[4m',
  blink = '\27[5m',
  inverse = '\27[7m',
  hidden = '\27[8m',
  strikeThrough = '\27[9m',
  -- [TEXT COLOR] --
  foreBlack = '\27[30m',
  foreRed = '\27[31m',
  foreGreen = '\27[32m',
  foreYellow = '\27[33m',
  foreBlue = '\27[34m',
  foreMagenta = '\27[35m',
  foreCyan = '\27[36m',
  foreWhite = '\27[37m',
  -- [BRIGHT COLORS] --
  foreBrightBlack = '\27[90m',
  foreBrightRed = '\27[91m',
  foreBrightGreen = '\27[92m',
  foreBrightYellow = '\27[93m',
  foreBrightBlue = '\27[94m',
  foreBrightMagenta = '\27[95m',
  foreBrightCyan = '\27[96m',
  foreBrightWhite = '\27[97m',
  -- [BG COLOR] --
  bgBlack = '\27[40m',
  bgRed = '\27[41m',
  bgGreen = '\27[42m',
  bgYellow = '\27[43m',
  bgBlue = '\27[44m',
  bgMagenta = '\27[45m',
  bgCyan = '\27[46m',
  bgWhite = '\27[47m',
  -- [BRIGHT BG COLORS] --
  bgBrightBlack = '\27[100m',
  bgBrightRed = '\27[101m',
  bgBrightGreen = '\27[102m',
  bgBrightYellow = '\27[103m',
  bgBrightBlue = '\27[104m',
  bgBrightMagenta = '\27[105m',
  bgBrightCyan = '\27[106m',
  bgBrightWhite = '\27[107m'
  -- [VARIABLES] --
}

function color.test()
  local tab = {}
  local tab2 = {}
  local tab3 = {}
  local tab4 = {}
  for i=40,46 do
    table.insert(tab, string.format('\27[%smCOLORS%s',i,'\27[0m'))
  end
  for i=30,36 do
    table.insert(tab2, string.format('\27[%smCOLORS%s',i,'\27[0m'))
  end
  for i=100,106 do
    table.insert(tab3, string.format('\27[%smCOLORS%s',i,'\27[0m'))
  end
  for i=90,96 do
    table.insert(tab4, string.format('\27[%smCOLORS%s',i,'\27[0m'))
  end
  print(table.concat(tab3))
  print(table.concat(tab))
  print(table.concat(tab2))
  print(table.concat(tab4))
  print(color.bold..'COLORS'..color.reset..color.italic..'COLORS'..color.reset..color.inverse..'COLORS'..color.reset..color.dim..'COLORS'..color.reset..color.blink..'COLORS'..color.reset..color.underScore..'COLORS'..color.reset..color.strikeThrough..'COLORS'..color.reset..color.hidden..'COLORS'..color.reset)
 end

return color
