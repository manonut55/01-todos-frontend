<template>
  <div>
    <b-field class="is-pulled-right">
      <b-radio-button v-model="visibility"
        native-value="all">
        <span>All {{showAll}}</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="active">
        <span>Active {{showActive}}</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="completed">
        <span>Completed {{showCompleted}}</span>
      </b-radio-button>
    </b-field>
  </div>
</template>

<script>
import { store } from '@/store'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['todos']),
    visibility: {
      get: function () {
        return store.state.visibility
      },
      set: function (newValue) {
        store.dispatch('changeVisibility', newValue)
      }
    },
    showAll () {
      return this.todos.length
    },
    showActive () {
      return this.todos.filter((todo) => todo.completed === false).length
    },
    showCompleted () {
      return this.todos.filter((todo) => todo.completed === true).length
    }
  }
}
</script>
