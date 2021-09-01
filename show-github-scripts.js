import { selectScript } from 'kit/utils.js'

let placeholder = 'Github Workflows'
let fromCache = true //false would re-scan the ~/.kenv/scripts dir in case you manually change something

let scriptsTransform = (scripts) =>
  scripts.filter((script) => script.command.includes('github'))

let script = await selectScript(placeholder, fromCache, scriptsTransform)

inspect(script)
