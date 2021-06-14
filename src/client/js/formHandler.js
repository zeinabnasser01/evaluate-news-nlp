function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formUrl = document.getElementById('url').value;
  Client.checkForUrl(formUrl);
  console.log('::: Form Submitted :::' + formUrl);

  if (Client.checkForUrl(formUrl)) {
    fetch('http://localhost:8081/api', {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: formUrl,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('response is =' + res);
        console.log(res);
        document.getElementById(
          'results'
        ).innerHTML = `Confidence: ${res.confidence}, <br> Irony: ${res.irony}, <br> Agreement: ${res.agreement}, <br> Score tag: ${res.score_tag}, <br> Status message: ${res.status.msg}`;
      });
  } else {
    alert('please enter valid url');
  }
}

export { handleSubmit };
