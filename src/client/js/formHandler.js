import { checkForUrl } from "./urlChecker";
const handleRequest = (url, data) => {
  const response = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // .then((response) => response.json())
  // .catch((error) => console.log("error", error));

  return response;
};

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  const formUrl = document.getElementById("url").value;
  Client.checkForUrl(formUrl);
  console.log("::: Form Submitted :::" + formUrl);

  if (checkForUrl(formUrl)) {
    handleRequest("http://localhost:8081/", { url: formUrl }).then((data) => {
      console.log(data);
      document.getElementById(
        "results"
      ).innerHTML = `Confidence: ${data.confidence}, <br> Irony: ${data.irony}, <br> Agreement: ${data.agreement}, <br> Score tag: ${data.score_tag}, <br> Status message: ${data.status.msg}`;
    });
  } else {
    alert("please enter valid url");
  }
}

export { handleSubmit };
