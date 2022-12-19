module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'input',
        name: 'dir',
        message: 'Directory (ex: basics/input)',
      },
      {
        type: 'input',
        name: 'component_name',
        message: 'Component Name (ex: InputText)',
      },
    ]
    return inquirer.prompt(questions).then((answers) => {
      const { dir, component_name } = answers
      const abs_path = `src/components/${dir}/${component_name}`
      const props_name = `${component_name}Props`
      return { abs_path, dir, component_name, props_name }
    })
  },
}
