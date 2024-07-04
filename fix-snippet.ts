// Name: fix-snippet
// Snippet: *:fix
// Exclude: true
import "@johnlindquist/kit";
const val = await arg();
if (val) {
    await setSelectedText(`🐛 fix(${val}): `)
} else {
    await setSelectedText(`🐛 fix: `)
}

//await keyboard.type(Key.Left)
//await keyboard.type(Key.Left)