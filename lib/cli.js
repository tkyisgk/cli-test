#!/usr/bin/env node

const path = require('path')
const cac = require('cac')
const sao = require('sao')
const chalk = require('chalk')
const envinfo = require('envinfo')
const { version } = require('../package.json')

const generator = path.resolve(__dirname, './')

const cli = cac('create-test-app')

const showEnvInfo = async () => {
  console.log(chalk.bold('\nEnvironment Info:'))
  const result = await envinfo
    .run({
      System: ['OS', 'CPU'],
      Binaries: ['Node', 'Yarn', 'npm'],
      Browsers: ['Chrome', 'Edge', 'Firefox', 'Safari'],
      npmGlobalPackages: ['nuxt', 'create-nuxt-app']
    })
  console.log(result)
  process.exit(1)
}

cli
  .command('[out-dir]', 'Generate in a custom directory or current directory')
  .option('-i, --info', 'Print out debugging information relating to the local environment')
  .action((outDir = '.', cliOptions) => {
    if (cliOptions.info) {
      return showEnvInfo()
    }
    console.log()
    console.log(chalk`{cyan create-test-app v${version}}`)
    console.log(chalk`✨  Generating Nuxt.js project in {cyan ${outDir}}`)

    // defaultでこのプロジェクトと同じものがジェネレートされる
    // sao({ generator, outDir, logLevel, answers, cliOptions })
    sao({ generator, outDir, cliOptions })
      .run()
      .catch((err) => {
        console.trace(err)
        process.exit(1)
      })
  })

cli.help()

cli.version(version)

cli.parse()
