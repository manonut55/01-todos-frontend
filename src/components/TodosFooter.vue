<template>
  <div>
    <div class="columns">
          <div class="column ">
  <p class="is-pulled-left">{{item}} items left</p>
  </div>
  <div class="columns is-centered">
      <div class="column is-11">
        <button class="button is-pulled-right " @click="clearCompeleted(index)">Clear Completed</button>
      </div>
    </div>
</div>
<visibility-input/>
</div>
</template>

<script>
import VisibilityInput from '@/components/VisibilityInput'
import { mapGetters } from 'vuex'

export default {
  components: {
    VisibilityInput
  },
  computed: {
    ...mapGetters(['visibility', 'todos']),
    item () {
      if (this.visibility === 'all') {
        return this.todos.length
      }
      if (this.visibility === 'active') {
        return this.todos.filter(todo => todo.completed === false).length
      }
      if (this.visibility === 'completed') {
        return this.todos.filter(todo => todo.completed === true).length
      }
    }
  },
  methods: {
    ...mapActions(['clearCompeleted'])
  }
}
</script>
