<template>
  <div>
    <h1>{{ greetings }} </h1>

    <button @click='count()'> Click me </button>

    <p>You have clicked {{counter }} times.</p>

    <p>Steem properties: {{steem_props()}} </p>
  </div>
</template>

<script>
  import steem from 'steem';

  // Main function to connect to the Steem API
  function APIConnect(API_counter=0)
  {
    // Local variables
    let API_list = ['https://api.steemit.com', 'https://api.steem.house', 'https://anyx.io'];

    // Safety
    if(API_counter>=API_list.length) { console.log('  --> cannot find a working node. Exiting...'); return; }
    let api = API_list[API_counter];

    // Preparing the request
    let SendDate = (new Date()).getTime();
    console.log('Trying to connect to the Steem API:', api);
    steem.api.setOptions({url:api});

    // Making the request
    steem.api.getDynamicGlobalProperties(function(error, result)
    {
      // Safety
      if(!result)
        { console.log('  --> Cannot connect to the ' + api + ' API:', error); APIConnect(APIcounter+1); return; }

      // Getting the API answer
      let ReceiveDate = (new Date()).getTime();
      console.log('  --> Global properties loaded from', api, 'in', (ReceiveDate - SendDate), 'ms');

      // Saving global properties
      window.localStorage.setItem('SteemProperties', JSON.stringify(result));
    });
  }

  // Getting Steem global properties
  APIConnect();

  export default
  {
    data()   { return { greetings: 'Super mouth!', counter  : 0 }; },
    methods:
    {
      count()       { this.counter++; },
      steem_props() { return window.localStorage.SteemProperties; }
    }
  };
</script>
