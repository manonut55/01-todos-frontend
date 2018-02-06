import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: [],
    visibility: 'all'
  },
  mutations: {
    ADD_TODO (state, title) {
      state.todos.push({
        title,
        completed: false
      })
      localStorage.setItem('datasenter', JSON.stringify(state.todos))
    },
    CHANGE_VISIBILITY (state, newVisibilityValue) {
      state.visibility = newVisibilityValue
      localStorage.setItem('datasenter', JSON.stringify(state.todos))
    },
    REMOVE_TODO (state, index) {
      state.todos.splice(index, 1)
      localStorage.setItem('datasenter', JSON.stringify(state.todos))
    },
    COMPLETED_TODO (state, {index, completed}) {
      state.todos[index].completed = completed
      localStorage.setItem('datasenter', JSON.stringify(state.todos))
    },
    CLEARCOMPLETED_TODO (state) {
      for (let i = state.todos.length - 1; i >= 0; i--) {
        if (state.todos[i].completed === true) {
          state.todos.splice(i, 1)
        }
      }
      localStorage.setItem('datasenter', JSON.stringify(state.todos))
    },
    LOCALSTORAGE_TO_SHOW_ON_WEB (state, storagetodata) {
      state.todos = storagetodata
      localStorage.setItem('datasenter', JSON.stringify(state.todos))
    },
    SORT_TO (state, payload) {
      state.todos.splice(payload.newIndex, 0, state.todos.splice(payload.oldIndex, 1)[0])
      localStorage.setItem('datasenter', JSON.stringify(state.todos))
    }
  },
  actions: {
    addTodo ({commit}, title) {
      commit('ADD_TODO', title)
    },
    removeTodo ({commit}, index) {
      commit('REMOVE_TODO', index)
    },
    changeVisibility ({commit}, newVisibilityValue) {
      commit('CHANGE_VISIBILITY', newVisibilityValue)
    },
    changeCompleted ({commit}, val) {
      commit('COMPLETED_TODO', val)
    },
    clearCompleted ({commit}) {
      commit('CLEARCOMPLETED_TODO')
    },
    LocalStorageToShowOnWeb ({commit}) {
      var storagetodata = localStorage.getItem('datasenter')
      if (storagetodata != null) {
        commit('LOCALSTORAGE_TO_SHOW_ON_WEB', JSON.parse(storagetodata))
      }
    },
    sortTo ({commit}, payload) {
      commit('SORT_TO', payload)
    },
    buildLocalStorage ({state}) {
      localStorage.setItem('datasenter', JSON.stringify(state.todos))
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})
