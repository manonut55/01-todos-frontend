<template>
  <div id="item">
    <div v-for="(todo, index) in todos" :key="todo.title">
      <b-field class="is-pulled-left handle">
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
import Sortable from 'sortablejs'
export default {
  computed: {
    ...mapGetters(['todos', 'visibility'])
  },
  mounted () {
    let el = document.getElementById('item')
    Sortable.create(el, { handle: '.handle', onUpdate: this.onUpdate, animation: 150 })
  },
  methods: {
    ...mapActions(['removeTodo', 'changeCompleted', 'LocalStorageToShowOnWeb', 'buildLocalStorage', 'sortTo']),
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
