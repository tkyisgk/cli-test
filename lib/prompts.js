module.exports = [
  {
    name: 'title',
    message: 'What is the title of the new project',
    default: 'title',
    filter: val => val.toLowerCase()
  },
  {
    name: 'body',
    message: 'What is the body of the new project',
    default: 'default body'
  },
  {
    name: 'id',
    message: 'What is the preview ID',
    default: ''
  }
  // {
  //   name: 'pm',
  //   message: 'Package manager:',
  //   choices: [
  //     { name: 'Yarn', value: 'yarn' },
  //     { name: 'Npm', value: 'npm' }
  //   ],
  //   type: 'list',
  //   default: 'yarn'
  // }
]
