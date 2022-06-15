--[[

  -- XNASUNIS LIBS/LUA --

  -- BETTER OUTPUT LIB --
  
  -- UNDER GNU 3.0 LICENSE FEEL FREE TO USE --

--]]

--[[
  DEPENDENCIES: https://github.com/xNasuni/libs/blob/main/lua/ansicolors.lua
--]]

local betteroutput = {}
local color = require("ansicolors")

function betteroutput.warn(str) 
  print(color.reset..color.foreBrightYellow..'⚠ [WARN] - '..str..color.reset)
end
function betteroutput.error(str) 
  print(color.reset..color.foreRed..'✕ [ERROR] - '..str..color.reset)
end
function betteroutput.info(str) 
  print(color.reset..color.foreBrightBlue..'🛈 [INFO] - '..str..color.reset)
end
function betteroutput.success(str) 
  print(color.reset..color.foreBrightGreen..'✓ [SUCCESS] - '..str..color.reset)
end
function betteroutput.comment(str) 
  print(color.reset..color.dim..'✦ [COMMENT] - '..str..color.reset)
end
function betteroutput.system(str) 
  print(color.reset..color.bold..color.foreRed..'✦ [SYSTEM] - '..str..color.reset)
end
function betteroutput.user(str)
  print(color.reset..color.bold..color.foreBrightBlue..'✦ [USER] - '..str..color.reset)
end
function betteroutput.test()
  betteroutput.info('INFORMATION')
  betteroutput.warn('WARNING')
  betteroutput.error('ERROR')
  betteroutput.success('SUCCESS')
  betteroutput.user('USER')
  betteroutput.comment('COMMENT')
  betteroutput.system('SYSTEM')   
end

return betteroutput
