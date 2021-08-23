module.exports = [
  {
    name: 'name',
    message: 'What is the name of the new project',
    default: 'default name',
    filter: val => val.toLowerCase()
  }
]
