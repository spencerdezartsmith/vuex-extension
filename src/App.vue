<template>
  <div id="app">
    <h1>mapNestedState Example</h1>
    <p>Farmer: {{ farmer }}</p>
    <p>Address: {{ address }}</p>
    <stock-table
      title="Pigs"
      :items="pigs"
      :headers="[ 'Name', 'Color', 'Weight', 'Sex' ]"/>
    <stock-table
      title="Cows"
      :items="cows"
      :headers="[ 'Name', 'Color', 'Breed', 'Sex' ]"/>
    <stock-table
      title="Calves"
      :items="calves"
      :headers="[ 'Name', 'DOB', 'Color', 'Sex' ]"/>
  </div>
</template>

<script>
import { mapState, mapNestedState } from './vuex-extended';
import StockTable from './components/StockTable';

export default {
  name: 'App',
  components: {
    StockTable,
  },
  computed: {
    ...mapState('farm', [ 'farmer', 'address' ]),
    ...mapNestedState({
      farm: {
        // pigs
        albert: 'animals.pigs.albert',
        sarah: 'animals.pigs.sarah',
        // cows
        ruby: 'animals.cows.ruby',
      },
    }),
    pigs() {
      return [ this.albert, this.sarah ];
    },
    cows() {
      const { calves, ...ruby } = this.ruby;
      return [ ruby ];
    },
    calves() {
      return Object.keys(this.ruby.calves).map(calf => this.ruby.calves[calf]);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style: none;
}
.row {
  display: flex;
}
</style>
