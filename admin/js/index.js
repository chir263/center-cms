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
