<template>
  <div id="app">
    <todos-app/>
  </div>
</template>

<script>
import TodosApp from '@/components/TodosApp'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['todos', 'visibility'])
  },
  name: 'app',
  components: {
    TodosApp
  }
}
</script>
