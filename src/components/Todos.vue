<template>
  <div>
    <div v-for="(todo, index) in todos" :key="todo.title">
      <b-field class="is-pulled-left">
      <b-checkbox size="is-large" @input="test(index, $event)"><strike v-if="todo.completed">{{ todo.title }}</strike>
      <div v-else>
        {{ todo.title }}
      </div>
      </b-checkbox>
      </b-field>
      <a @click="removeTodo(index)" class="delete is-pulled-right"></a>
      <div class="is-clearfix"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['todos', 'visibility'])
  },
  methods: {
    ...mapActions(['removeTodo', 'changeCompleted', 'LocalStorageToShowOnWeb', 'buildLocalStorage']),
    test (index, val) {
      this.changeCompleted({index: index, completed: val})
    },
    onUpdate: function (event) {
      this.sortTo({ newIndex: event.newIndex, oldIndex: event.oldIndex })
    }
  },
  created () {
    if (localStorage.getItem('datasenter') !== null) {
      this.LocalStorageToShowOnWeb()
    } else {
      this.buildLocalStorage()
    }
  }
}
</script>
