<template>
  <li class="numberInput">
    <label :for="numberSystem.name.ENG">{{ numberSystem.name[appLang] }}</label>
    <input
      type="text"
      :id="numberSystem.name.ENG"
      v-model="numberInThisSystem"
    />
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { INumberSystem } from '../typings';

@Component
export default class NumberSystemInput extends Vue {
  @Prop()
  private numberSystem!: INumberSystem;

  get appLang() {
    return this.$store.getters.getLang;
  }

  get numberInThisSystem() {
    return Number(this.$store.getters.getNumber).toString(
      this.numberSystem.radix,
    );
  }

  set numberInThisSystem(value) {
    this.$store.commit('updateNumber', {
      newNumber: value,
      numberSystem: this.numberSystem,
    });
    this.$forceUpdate();
  }
}
</script>

<style scoped>
.numberInput {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.numberInput input {
  min-width: 400px;
}
</style>
