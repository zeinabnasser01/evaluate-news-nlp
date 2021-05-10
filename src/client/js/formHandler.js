import { checkForUrl } from "./urlChecker";
const handleRequest = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: data,
    }),
  });

  console.log(url);
  console.log(response.json());

  try {
    const res = await response.json();
    console.log("res form handle request" + res);
    return res;
  } catch (error) {
    console.log("error" + error);
  }
};

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formUrl = document.getElementById("url").value;
  Client.checkForUrl(formUrl);
  console.log("::: Form Submitted :::" + formUrl);

  if (checkForUrl(formUrl)) {
    handleRequest("http://localhost:8081/", formUrl).then((data) => {
      console.log("response is =" + data);
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
