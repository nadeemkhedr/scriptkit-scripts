// Name: Emoji Pane
// shortcut: cmd ctrl space
import "@johnlindquist/kit"

let e = await emoji()
setSelectedText(e.emoji)