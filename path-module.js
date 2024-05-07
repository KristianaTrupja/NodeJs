const { log } = require('console')
const os = require('os')
const user = os.userInfo()

console.log(user)
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

const path = require('path')
console.log(path.sep)
const filePath = path.join("/content",'/subfolder','test.txt')
const base = path.basename(filePath)
console.log(base)
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(currentOS)
console.log(absolute)