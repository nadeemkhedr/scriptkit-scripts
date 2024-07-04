// Name: Edit in vim

import "@johnlindquist/kit"

const text = await getSelectedText()
const vimTextPath = tmpPath('vim.txt')
await writeFile(vimTextPath, text.trim())

await term(`lvim ${vimTextPath}`)

const contents = await readFile(vimTextPath, 'utf-8')
await setSelectedText(contents.trim())