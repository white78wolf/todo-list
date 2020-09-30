const DB_NAME = 'tododb'
const STORAGE_NAME = 'todos'
const DB_VERSION = 1
let DB

export default {
  async getDb () {
    return new Promise((resolve, reject) => {
      if (DB) {
        return resolve(DB)
      }
      const request = window.indexedDB.open(DB_NAME, DB_VERSION)

      request.onerror = e => {
        console.log('Error opening db', e)
        reject(new Error('Error opening db'))
      }

      request.onsuccess = e => {
        DB = e.target.result
        resolve(DB)
      }

      request.onupgradeneeded = e => {
        const db = e.target.result
        db.createObjectStore(STORAGE_NAME, { keyPath: 'id' })
      }
    })
  },

  async deleteTodo (todo) {
    const db = await this.getDb()

    return new Promise(resolve => {
      const trans = db.transaction([STORAGE_NAME], 'readwrite')
      trans.oncomplete = () => {
        resolve()
      }

      const store = trans.objectStore(STORAGE_NAME)
      store.delete(todo.id)
    })
  },

  async getTodos () {
    const db = await this.getDb()

    return new Promise(resolve => {
      const trans = db.transaction([STORAGE_NAME], 'readonly')
      trans.oncomplete = () => {
        resolve(todos)
      }

      const store = trans.objectStore(STORAGE_NAME)
      const todos = []

      store.openCursor().onsuccess = e => {
        const cursor = e.target.result
        if (cursor) {
          todos.push(cursor.value)
          cursor.continue()
        }
      }
    })
  },

  async saveTodo (todo) {
    const db = await this.getDb()

    return new Promise(resolve => {
      const trans = db.transaction([STORAGE_NAME], 'readwrite')
      trans.oncomplete = () => {
        resolve()
      }

      const store = trans.objectStore(STORAGE_NAME)
      store.put(todo)
    })
  }
}
