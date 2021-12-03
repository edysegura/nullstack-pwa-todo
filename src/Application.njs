import Nullstack from 'nullstack'
import TodoService from './TodoService'
import Todo from './Todo'

import './Application.scss'

class Application extends Nullstack {
  async hydrate(context) {
    const database = new TodoService()
    context.tasks = await database.getAll()
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
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.min.js"
          async
        ></script>
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
