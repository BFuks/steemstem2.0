import steem from 'steem';

// Main function to connect to the Steem API
function APIConnect(API_counter=0)
{
  // Local variables
  let API_list = ['https://api.steemit.com', 'https://api.steem.house', 'https://anyx.io'];
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
    {
      console.log('  --> Cannot connect to the ' + api + ' API:', error);
      if((API_counter+1)<API_list.length) APIConnect(APIcounter+1);
      return;
    }

    // Getting the API answer
    let ReceiveDate = (new Date()).getTime();
    console.log('  --> Global properties loaded from', api, 'in', (ReceiveDate - SendDate), 'ms');

    // Saving global properties
    localStorage.setItem('Steem_properties', JSON.stringify(result));
  });
}

export default APIConnect;
