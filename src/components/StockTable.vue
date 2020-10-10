<template>
  <div>
    <p class="title">
      {{ title }}
    </p>
    <table>
      <tr>
        <th
          v-for="(header, index) in headers"
          :key="index">
          {{ header }}
        </th>
      </tr>
      <tr
        v-for="item in items"
        :key="item.id">
        <td
          v-for="key in Object.keys(item)"
          :key="key">
          {{ item[key] }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'StockTable',
  props: {
    title: {
      type: String,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="css" scoped>
  table {
    width: 100%;
    border: 1px solid black;
    padding: 10px;
  }
  .title {
    font-size: 22px;
  }
</style>