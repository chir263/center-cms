var para = new URLSearchParams(window.location.search);
const ORGANISATION_NAME = para.get("ORGANISATION_NAME");
const EXPERIMENT = para.get("EXPERIMENT");
let CMS_CONFIG = {
  backend: {
    name: "github",
    repo: `${ORGANISATION_NAME}/${EXPERIMENT}`,
    branch: "master",
    auth: {
      logout: true,
    },
    commit_messages: {
      create: "Create {{collection}} “{{slug}}” {{author-login}}",
      update: "Update {{collection}} “{{slug}}” {{author-login}}",
      delete: "Delete {{collection}} “{{slug}}” {{author-login}}",
      uploadMedia: "Upload “{{path}}” {{author-login}}",
      deleteMedia: "Delete “{{path}}” {{author-login}}",
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
