import Nullstack from 'nullstack'

class Home extends Nullstack {
  tasks = ['Task 1', 'Task 2']

  prepare({ project, page }) {
    page.title = `${project.name}`
    page.description = `${project.name} was made with 💖 and Nullstack`
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

  renderDrawer({ project }) {
    return (
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">{project.shortName}</span>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" href="https://nullstack.app/">
            Nullstack documentation
          </a>
        </nav>
      </div>
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
          {this.tasks.map((item) => (
            <li>{item}</li>
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
          <Drawer />
          <Main />
        </div>
      </div>
    )
  }
}

export default Home
