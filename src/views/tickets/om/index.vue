<template>
  <div class="app">
    <NavbarForm />
    <MainForm />
  </div>
</template>

<script>
import MainForm from '../components/MainForm.vue'
import NavbarForm from '../components/NavbarForm.vue'
import { gettaskdetail } from '@/api/task'
export default {
  data() {
    return {}
  },
  components: {
    MainForm,
    NavbarForm
  },

  created() {
    this.gettaskdetail()
  },

  methods: {
    async gettaskdetail() {
      const res = await gettaskdetail(this.$store.state.user.userInfo.roleId)
      console.log(res)
    }
  }
}
</script>

<style scoped lang="scss">
.app {
  padding: 20px;
}
</style>
