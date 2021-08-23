const { join } = require('path')

module.exports = {
  prompts: require('./prompts'),
  actions: [
    {
      type: 'add',
      files: '**',
      templateDir: join(process.cwd(), 'packages/template')
    }
  ],
  async completed () {
    console.log('aaa', this.answers)
    // this.gitInit()
    // await this.npmInstall()
    // this.showProjectTips()
  }
}
