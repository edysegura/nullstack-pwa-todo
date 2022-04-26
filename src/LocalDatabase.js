import Nullstack from 'nullstack'
import Dexie from 'dexie'

class LocalDatabase extends Nullstack {
  static async start(context) {
    const db = (context._db = new Dexie('todoDB'))

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
  }
}

export default LocalDatabase
