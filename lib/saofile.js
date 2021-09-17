module.exports = {
  prompts: require('./prompts'),
  templateData () {
    const title = this.answers.title
    const body = this.answers.body
    const id = this.answers.id

    return {
      title,
      body,
      id
    }
  },
  templateDir: '../template',
  actions () {
    return [
      {
        type: 'add',
        files: '**'
      }
    ]
  },
  async completed () {
    console.log(this.chalk` Goal`)
    // this.gitInit()
    // await this.npmInstall()
    this.showProjectTips()
  }
}
