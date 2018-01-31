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
    },
    CHANGE_VISIBILITY (state, newVisibilityValue) {
      state.visibility = newVisibilityValue
    },
    REMOVE_TODO (state, index) {
      state.todos.splice(index, 1)
    },
    COMPLETED_TODO (state, {index, completed}) {
      state.todos[index].completed = completed
    },
    CLEAR_COMPELETED_TODO (state, {index, completed}) {
      state.todos = state.todos.filter(todo => todo.completed === false)
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
    clearCompeleted ({commit}, index) {
      commit('CLEAR_COMPELETED_TODO')
      dispatch('save')
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})
