var para = new URLSearchParams(window.location.search);
const ORGANISATION_NAME = para.get("ORGANISATION_NAME");
const EXPERIMENT = para.get("EXPERIMENT");
let CMS_CONFIG = {
  backend: {
    name: "github",
    repo: `${ORGANISATION_NAME}/${EXPERIMENT}`,
    branch: "master",
    commit_messages: {
      create: "Create {{collection}} “{{slug}}”",
      update: "Update {{collection}} “{{slug}}”",
      delete: "Delete {{collection}} “{{slug}}”",
      uploadMedia: "Upload “{{path}}”",
      deleteMedia: "Delete “{{path}}”",
      openAuthoring: "fss {{message}}",
    },
  },
  media_folder: "experiment/images",

  collections: [
    {
      name: "Experiment",
      label: EXPERIMENT,
      folder: "/experiment",
      create: false,
      slug: "experiment",
      delete: false,
      fields: [
        { name: "title", label: "Title", widget: "string" },
        { name: "body", label: "Body", widget: "markdown" },
      ],
    },
  ],
};

function back_to_home() {
  window.location.href = `/`;
}

var targetNode = document.body;
var observer = new MutationObserver(function (mutationsList, observer) {
  let user_name = JSON.parse(localStorage.getItem("netlify-cms-user")).login;
  var parentDiv = document.querySelector('[class*="AppHeaderContent"]');
  if (parentDiv) {
    observer.disconnect();
    var newDiv = document.createElement("span");
    newDiv.className = "user_name";
    newDiv.innerHTML = `${user_name}`;
    var navTag = parentDiv.querySelector("img");
    if (navTag) {
      navTag.insertAdjacentElement("beforebegin", newDiv);
    } else {
      parentDiv.appendChild(newDiv);
    }
  }
});
observer.observe(targetNode, { childList: true, subtree: true });
