import {checkInput} from "./checkInput"
async function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
   if(checkInput(formText))
     // JSON data parsed by `data.json()` call
      {postData('https://salty-thicket-43971.herokuapp.com/test', { text: formText }).then(data => {
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
        document.getElementById('results').innerHTML=data.score_tag;
        document.getElementById('agreement').innerHTML=data.agreement;
        document.getElementById('confidence').innerHTML=data.confidence;
        document.getElementById('irony').innerHTML=data.irony;
        document.getElementById('subjectivity').innerHTML=data.subjectivity;
       
    }).catch(err=>console.log(err));}
    else{
        document.getElementById('results').innerHTML="Only is string allowed"; 
    }
}
    async function postData(url = '', data = {}) {
       
        const response = await fetch(url, {
          // source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
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

export { handleSubmit}
