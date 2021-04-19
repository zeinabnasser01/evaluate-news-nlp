function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);
  console.log("::: Form Submitted :::");

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
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById(
        "results"
      ).innerHTML = `confidence: ${data.confidence}, status: ${data.status.msg}`;
    })
    .catch((error) => console.log("error", error));
}

export { handleSubmit };
