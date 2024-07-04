// Name: feat-snippet
// Snippet: *:feat
// Exclude: true
import "@johnlindquist/kit";
const val = await arg();
if (val) {
    await setSelectedText(`✨ feat(${val}): `)
} else {
    await setSelectedText(`✨ feat: `)
}
