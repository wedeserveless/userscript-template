const fs = require("fs").promises
const path = require("path")

runBuild()

async function runBuild() {
  const { userscriptConfig: config } = await getPackage()

  const userscriptParamsComment = await buildUserscriptParamsComment(
    config.params
  )

  // run esbuild configuration
  require("esbuild")
    .build({
      banner: { js: userscriptParamsComment },
      entryPoints: [config.entry],
      bundle: true,
      outfile: config.outputFile,
      watch: true,
    })
    .catch(() => process.exit(1))
}

async function buildUserscriptParamsComment(paramsAsJSON = {}) {
  // build userscript param comment from json object
  const params = paramsAsJSON
  const commentPieces = ["// ==UserScript=="]
  for (let key in params) {
    commentPieces.push(`// @${key} ${params[key]}`)
  }
  commentPieces.push("// ==/UserScript==\n")
  const paramsComment = commentPieces.join("\n")
  return paramsComment
}

async function getPackage() {
  // return package.json as a json object
  const package = await fs.readFile("./package.json", "utf8")
  const parsedPackage = JSON.parse(package)
  return parsedPackage
}
