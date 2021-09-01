let content = await paste()
if (content.startsWith('https://github.com/')) {
  content = content.replace('https://github.com/', '')
  copy(`{ "${content}" },`)
}
