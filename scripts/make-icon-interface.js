const fs = require('fs')

const interfaceFilePath = './src/features/ui/Icon/icons.js'
const iconPath = './public/assets/icons'
const iconFiles = fs.readdirSync(iconPath)

const enumHead = `export const IconPack = {\n`
const enumTail = `}\n`
let enumString = ``

iconFiles.forEach(file => {
  const filename = file.split('.')[0]
  const property = filename.toUpperCase().split('-').join('_')
  enumString += `  '${filename}': ${property},\n`
})

let importString = ``

iconFiles.forEach(file => {
  const filename = file.split('.')[0]
  const property = filename.toUpperCase().split('-').join('_')
  importString += `import ${property} from '/public/assets/icons/${file}'\n`
})

fs.writeFileSync(
  interfaceFilePath,
  `${importString}\n${enumHead}${enumString}${enumTail}\n`,
  'utf8',
)
