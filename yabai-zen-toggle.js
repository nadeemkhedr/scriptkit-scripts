// Menu: yabai Zen Toggle
// Description: Toggle Zen mode in yabai by increasing the padding left/right
// Author: Nadeem Khedr
// Twitter: @nadeemkhedr

const selectedSpace = exec(
  `yabai -m query --spaces | jq '.[] | select(.visible==1) | .label'`,
  { silent: true }
).trim()
const rightPadding = exec(
  `yabai -m config --space ${selectedSpace} right_padding`,
  { silent: true }
).trim()

if (rightPadding === '15') {
  exec(`yabai -m space --padding abs:15:15:700:700`)
} else {
  exec(`yabai -m space --padding abs:15:15:15:15`)
}
