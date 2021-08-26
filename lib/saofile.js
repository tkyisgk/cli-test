const { join } = require('path')

module.exports = {
  prompts: require('./prompts'),
  templateData () {
    const title = this.answers.title
    const body = this.answers.body

    return {
      title,
      body
    }
  },
  actions: [
    {
      type: 'add',
      files: '**',
      templateDir: join(process.cwd(), 'template')
    }
  ],
  async completed () {
    // this.gitInit()
    // await this.npmInstall()
    // this.showProjectTips()
  }
}
