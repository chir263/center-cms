var para = new URLSearchParams(window.location.search);
const ORGANISATION_NAME = para.get("ORGANISATION_NAME");
const EXPERIMENT = para.get("EXPERIMENT");
let CMS_CONFIG = {
  backend: {
    name: "github",
    repo: `${ORGANISATION_NAME}/${EXPERIMENT}`,
    branch: "master",
    auth_provider: {
      name: "github",
      config: {
        logout_url:
          "https://decapcms.org/docs/beta-features/#commit-message-templates",
      },
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
      // folder: "/experiment",
      create: false,
      slug: "{{slug}}",
      delete: false,
      files: [
        {
          name: "aim",
          label: "Aim",
          file: "experiment/aim.md",
          fields: [
            {
              name: "title",
              label: "Title",
              widget: "string",
              default: "Aim",
            },
            { name: "body", label: "Body", widget: "markdown" },
          ],
        },
        {
          name: "theory",
          label: "Theory",
          file: "experiment/theory.md",
          fields: [
            {
              name: "title",
              label: "Title",
              widget: "string",
              default: "Theory",
            },
            { name: "body", label: "Body", widget: "markdown" },
          ],
        },
      ],
    },
  ],
};

function back_to_home() {
  window.location.href = `/`;
}
