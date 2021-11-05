import Nullstack from 'nullstack'
import './Home.scss'

class Home extends Nullstack {
  prepare({ project, page }) {
    page.title = `${project.name} - Welcome to Nullstack!`
    page.description = `${project.name} was made with Nullstack`
  }

  render({ project }) {
    return (
      <div id="app">
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
              <span class="mdl-layout-title">PWA - Todo List</span>
            </div>
          </header>
          <div class="mdl-layout__drawer">
            <span class="mdl-layout-title">PWA - Todo List</span>
            <nav class="mdl-navigation">
              <a class="mdl-navigation__link" href="/">
                About
              </a>
            </nav>
          </div>
          <main
            class="mdl-layout__content mat-typography"
            style="text-align: center"
          >
            <form>
              <input
                type="text"
                name="item"
                placeholder="Type something"
                autofocus=""
                required=""
                autocomplete="off"
              />
            </form>
            <ul></ul>
          </main>
        </div>
      </div>
    )
  }
}

export default Home
