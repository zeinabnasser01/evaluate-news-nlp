function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");
  // fetch("http://localhost:8081/test")
  //   .then((res) => res.json())
  //   .then(function (res) {
  //     document.getElementById("results").innerHTML = res.message;
  //   });

  const formdata = new FormData();
  formdata.append("key", "a8c36ceb7690786e164ea25408bc1beb");
  formdata.append("txt", "front end developerment project");
  formdata.append("lang", "en"); // 2-letter code, like en es fr ...
  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };
  fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    .then((response) => ({
      status: response.status,
      body: response.json(),
    }))
    .then(({ status, body }) => console.log(status, body))
    .catch((error) => console.log("error", error));
}

export { handleSubmit };
