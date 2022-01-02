# Library Usage
- This will show you on how to use the librarys.

| Library | Type |
| ----------- | ----------- |
| ansicolors.lua | Color |
| betteroutput.lua | Utility |

---
## Ansi Color Usage
```lua
-- Defining the library.
local colors = require('ansicolors') -- Change file name as needed.

-- Let's print a Bright Blue "HELLO WORLD" to the console.
print(
  colors.foreBrightBlue, -- Bright Blue,
  'Hello World', -- The String,
  colors.reset -- Reset the color.
)
```
##
```lua
> "Hello World"
```
## Better Output Usage
```lua
-- Defining the library.
local betteroutput = require('betteroutput'); -- Change file name as needed.

-- Let's make a function that takes input and runs it, but with an error handler.
function Run(Code)
  local success, error = pcall(function()
    loadstring(Code)()
  end)
  if not success then
    betteroutput.error(error)
  end
end
```
##
```lua
Run('print("Hello World")') -- Doesn't error.

> "Hello World"
```
##
```lua
Run([[print('Mismatched Quotes")]]) -- Errors because the quotes arent the same.

> "✕ [ERROR] - [string '<eval>']:7: attempt to call a nil value"
```
---

## Library Checklist

- [x] Ansi Color Library
- [x] Better Output Library
- [ ] Http Requests Library
- [ ] General Utility Library
- [ ] Date & Time Library
