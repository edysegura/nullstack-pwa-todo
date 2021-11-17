import Dexie from 'dexie';

let db;

export default class TodoService {
  constructor() {
    this.initializeDB();
  }

  initializeDB() {
    db = new Dexie('todoDB');

    db.version(1).stores({
      tasks: '++id,description',
    });

    db.on('populate', async () => {
      await db.tasks.bulkPut([
        { description: 'Learn JavaScript', done: true },
        { description: 'Learn TypeScript', done: false },
        { description: 'Learn PWA', done: false },
        { description: 'Learn HTML5 APIs', done: false },
      ]);
    });

    db.open();
  }

  getAll() {
    return db.tasks.toArray();
  }

  get(id) {
    return db.tasks.get(id);
  }

  save(task) {
    return db.tasks.put(task);
  }

  delete(id) {
    return db.tasks.delete(id);
  }
}
