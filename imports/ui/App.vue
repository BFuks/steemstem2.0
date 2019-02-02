<template>
<div>
  <h1>{{ greetings }} </h1>

  <button @click='count()'> Click me </button>

  <p>You have clicked {{counter }} times.</p>
</div>
</template>

<script>
  export default {
  data() {
    return {
      greetings: 'Super mouth!',
      counter  : 0
    }
  },
  methods: {
    count() { this.counter++; }
  }
}
</script>
