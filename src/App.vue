<template>
  <div id="app">
    <header>
      <img alt="Vue logo" src="./assets/logo.png" />
      <ul>
        <li
          v-for="lang in languages"
          :key="lang"
          :class="{ red: appLang === lang }"
          @click="appLang = lang"
        >
          {{ lang }}
        </li>
      </ul>
    </header>

    <ListNumberSystem test="Test" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ListNumberSystem from './components/ListNumberSystem.vue';
import { TLang } from './typings';

@Component({
  components: {
    ListNumberSystem,
  },
})
export default class App extends Vue {
  private languages: TLang[] = ['RU', 'ENG'];
  get appLang() {
    return this.$store.getters.getLang;
  }

  set appLang(value) {
    this.$store.commit('updateLang', value);
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
}
header ul {
  width: 100px;
  font-size: 16pt;
  font-weight: bold;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
header ul li {
  cursor: pointer;
}
.red {
  color: red;
}
</style>
