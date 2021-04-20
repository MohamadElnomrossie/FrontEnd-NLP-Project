import {checkForName} from './nameChecker'
async function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
     // JSON data parsed by `data.json()` call
    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }
      postData('http://localhost:8081/test', { text: formText })
  .then(data => {
      console.log(data);
      let result;
      let score_tag=data.score_tag

    if (score_tag==='N'){
        result='Negative'
    }
    else if (score_tag==='P'){
        result='Positive'    }
    else{
        result='Neutral'
    }
        document.getElementById('results').innerHTML=result;
    }).catch(err=>console.log(err));
}
export { handleSubmit }
