<template>
  <ul>
    <NumberSystemInput
      v-for="numberSystem in numberSystems"
      :key="numberSystem.numType"
      v-bind:numberSystem="numberSystem"
    />
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { INumberSystem, TLang } from '../typings';
import NumberSystemInput from './NumberSystemInput.vue';

const availableChars = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

@Component({
  components: {
    NumberSystemInput,
  },
})
export default class ListNumberSystem extends Vue {
  private numberSystems: INumberSystem[] = [
    {
      name: { RU: 'Десятичная', ENG: 'Decimal' },
      radix: 10,
      availableChars: availableChars.slice(0, 10),
    },
    {
      name: { RU: 'Двоичная', ENG: 'Binary' },
      radix: 2,
      availableChars: availableChars.slice(0, 2),
    },
    {
      name: { RU: 'Шестнадцатеричная', ENG: 'Hexadecimal' },
      radix: 16,
      availableChars: availableChars.slice(0, 16),
    },
  ];
}
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
ul > li {
  margin-top: 20px;
}
</style>
