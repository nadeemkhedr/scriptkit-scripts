// Name: Vim/Github

import "@johnlindquist/kit"
let content = await paste()
content = content.trim()
if (content.startsWith('https://github.com/')) {
  content = content.replace('https://github.com/', '')
  copy(`{ "${content}" },`)
} else {
  const processedContent = content.replace(/['";,]+/g, '')
  const url = `http://github.com/${processedContent}`
  copy(url)
  focusTab(url, 'Arc')
}