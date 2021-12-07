import Nullstack from 'nullstack'

class Home extends Nullstack {
  tasks = []

  async prepare({ project, page, _db }) {
    page.title = `${project.name}`
    page.description = `${project.name} was made with 💖 and Nullstack`
  }

  async hydrate({ _db }) {
    this.tasks = await _db.tasks.toArray()
  }

  renderHeader({ page }) {
    return (
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">{page.title}</span>
        </div>
      </header>
    )
  }

  addTask({ event }) {
    const form = event.target
    this.tasks.push(form.item.value)
    form.item.value = ''
  }

  renderMain() {
    return (
      <main
        class="mdl-layout__content mat-typography"
        style="text-align: center"
      >
        <form onsubmit={this.addTask}>
          <input
            type="text"
            name="item"
            placeholder="Type something"
            required
            autocomplete="off"
          />
        </form>
        <ul>
          {this.tasks.map((task) => (
            <li>{task.description}</li>
          ))}
        </ul>
      </main>
    )
  }

  render() {
    return (
      <div id="app">
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header />
          <Main />
        </div>
      </div>
    )
  }
}

export default Home
