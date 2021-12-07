import Nullstack from 'nullstack'
import Dexie from 'dexie'
import Todo from './Todo'

import './Application.scss'

class Application extends Nullstack {
  renderStyle({ href }) {
    return <link rel="stylesheet" href={href} />
  }

  hydrate(context) {
    const db = new Dexie('todoDB')

    db.version(1).stores({
      tasks: '++id,description',
    })

    db.on('populate', async () => {
      await db.tasks.bulkPut([
        { description: 'Learn HTML', done: true },
        { description: 'Learn CSS', done: true },
        { description: 'Learn JavaScript', done: true },
        { description: '💙 Learn Nullstack', done: false },
        { description: 'Learn PWA', done: false },
        { description: 'Learn HTML5 APIs', done: false },
      ])
    })

    db.open()
    context._db = db
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
