import Nullstack from 'nullstack'
import Todo from './Todo'

import './Application.scss'

class Application extends Nullstack {
  prepare({ project, page }) {
    page.title = project.name
  }

  renderStyle({ href }) {
    return <link rel="stylesheet" href={href} />
  }

  renderHead() {
    return (
      <head>
        <Style href="https://fonts.googleapis.com/css?family=Roboto:400,700" />
        <Style href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <Style href="https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css" />
      </head>
    )
  }

  render() {
    return (
      <main>
        <Head />
        <Todo route="/" />
      </main>
    )
  }
}

export default Application
