<template>
<div>
  <h1>{{ greetings }} </h1>

  <button @click='count()'> Click me </button>

  <p>You have clicked {{counter }} times.</p>

  <p>{{steem_props()}} </p>
</div>
</template>

<script>
  import APIConnect from '/imports/steem/ApiConnect.js';

  // Getting Steem global properties
  localStorage.setItem('Steem_properties', '');

  export default
  {
    data()   { return { greetings: 'Super mouth!', counter  : 0 }; },
    mounted(){ APIConnect() },
    methods:
    {
      count()     { this.counter++; },
      steem_props() { return JSON.stringify(localStorage.getItem('Steem_properties')); }
    }
  };
</script>
