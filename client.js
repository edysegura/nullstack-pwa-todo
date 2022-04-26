import Nullstack from 'nullstack'
import Application from './src/Application'
import LocalDatabase from './src/LocalDatabase'

const context = Nullstack.start(Application)

context.start = async function start() {
  await LocalDatabase.start(context)
}

export default context
