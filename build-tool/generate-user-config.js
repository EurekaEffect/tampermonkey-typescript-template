// noinspection JSUnresolvedVariable

import url from 'node:url'
import fs from 'node:fs'
import path from 'node:path'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

;(async function () {
    const webpack = getFileContent('webpack.config.js')
    const module = {}; eval(webpack.content)

    const user_script = getFileContent('UserScript')
    const packed_script = getFileContent(module.exports.output.filename)

    fs.writeFileSync(
        packed_script.path,
        (user_script.content + '\n\n' + packed_script.content),
        'utf-8'
    )
})()


function getFileContent(file_name) {
    const directory = '../'

    const result = recursiveSearch(directory, file_name)

    if (result) {
        return {
            path: result,
            content: fs.readFileSync(result, 'utf-8')
        }
    } else {
        throw Error('Failed to find \'UserScript\' in the directory.')
    }
}

function recursiveSearch(directory, file_name) {
    const files = fs.readdirSync(directory)

    for (const file of files) {
        const full_Path = path.join(directory, file)
        const stat = fs.statSync(full_Path)

        if (stat.isDirectory()) {
            const found = recursiveSearch(full_Path, file_name)

            if (found) return found
        } else if (file === file_name) {
            return full_Path
        }
    }

    return null
}