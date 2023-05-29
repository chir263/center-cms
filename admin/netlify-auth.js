const anchorTag = document.getElementById("login");
const outputToken = document.getElementById("output-token");
const outputEmail = document.getElementById("output-email");

anchorTag.addEventListener("click", (event) => {
  event.preventDefault();

  const authenticator = new netlify.default({});

  authenticator.authenticate(
    // Set the OAuth provider and token scope
    // Provider can be "github", "gitlab", or "bitbucket"
    // The scopes available depend on your OAuth provider
    { provider: "github", scope: "repo" },
    async function (error, data) {
      if (error) {
        outputToken.innerText = "Error Authenticating with GitHub: " + error;
      } else {
        outputToken.innerText =
          "Authenticated with GitHub. Access Token: " + data.token;
        outputEmail.innerText = await loadGitHubUserEmails(data.token);
      }
    }
  );
});

async function loadGitHubUserEmails(token) {
  return await fetch("https://api.github.com/user/emails", {
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: `token ${token}`,
    },
  })
    .then((response) => response.json())
    .then((response) => JSON.stringify(response));
}
