var para = new URLSearchParams(window.location.search);
const ORGANISATION_NAME = para.get("ORGANISATION_NAME");
const EXPERIMENT = para.get("EXPERIMENT");

// config
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
      create: "Created {{collection}} “{{slug}}” by {{author-login}}",
      update: "Updated {{collection}} “{{slug}}” by {{author-login}}",
      delete: "Deleted {{collection}} “{{slug}}” by {{author-login}}",
      uploadMedia: "Uploaded “{{path}}” by {{author-login}}",
      deleteMedia: "Deleted “{{path}}” by {{author-login}}",
      openAuthoring: "fss {{message}}",
    },
  },
  media_folder: "experiment/images",

  collections: [
    {
      name: "Experiment",
      label: EXPERIMENT,
      create: false,
      slug: "{{slug}}",
      delete: false,
      files: [
        {
          name: "experiment-name",
          label: "Experiment Name",
          file: "experiment/experiment-name.md",
          fields: [{ name: "body", label: "Body", widget: "markdown" }],
        },
        {
          name: "aim",
          label: "Aim",
          file: "experiment/aim.md",
          fields: [{ name: "body", label: "Body", widget: "markdown" }],
        },
        {
          name: "theory",
          label: "Theory",
          file: "experiment/theory.md",
          fields: [{ name: "body", label: "Body", widget: "markdown" }],
        },

        {
          name: "procedure",
          label: "Procedure",
          file: "experiment/procedure.md",
          fields: [{ name: "body", label: "Body", widget: "markdown" }],
        },
        {
          name: "contributors",
          label: "Contributors",
          file: "experiment/contributors.md",
          fields: [{ name: "body", label: "Body", widget: "markdown" }],
        },
        {
          name: "references",
          label: "References",
          file: "experiment/references.md",
          fields: [{ name: "body", label: "Body", widget: "markdown" }],
        },
        {
          name: "readme",
          label: "README",
          file: "experiment/README.md",
          fields: [{ name: "body", label: "Body", widget: "markdown" }],
        },
      ],
    },
    {
      name: "simulation",
      label: "Simulation",
      media_folder: "",
      create: false,
      slug: "simulation-upload",
      files: [
        {
          name: "simulation-upload",
          label: "Upload Simulations",
          file: "experiment/simulation/simulation-upload.md",
          fields: [
            {
              name: "file",
              label: "File",
              widget: "list",
              fields: [
                {
                  name: "file",
                  label: "File",
                  widget: "file",
                  required: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "simulation-css",
      label: "Simulation CSS",
      media_folder: "",
      create: false,
      slug: "simulation-upload-css",
      files: [
        {
          name: "simulation-upload-css",
          label: "Upload Simulations CSS",
          file: "experiment/simulation/css/simulation-upload-css.md",
          fields: [
            {
              name: "file",
              label: "File",
              widget: "list",
              fields: [
                {
                  name: "file",
                  label: "File",
                  widget: "file",
                  required: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "simulation-js",
      label: "Simulation JS",
      media_folder: "",
      create: false,
      slug: "simulation-upload-js",
      files: [
        {
          name: "simulation-upload-js",
          label: "Upload Simulations JS",
          file: "experiment/simulation/js/simulation-upload-js.md",
          fields: [
            {
              name: "file",
              label: "File",
              widget: "list",
              fields: [
                {
                  name: "file",
                  label: "File",
                  widget: "file",
                  required: false,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "simulation-images",
      label: "Simulation Images",
      media_folder: "",
      create: false,
      slug: "simulation-upload-images",
      files: [
        {
          name: "simulation-upload-images",
          label: "Upload Simulations Images",
          file: "experiment/simulation/images/simulation-upload-images.md",
          fields: [
            {
              name: "file",
              label: "File",
              widget: "list",
              fields: [
                {
                  name: "file",
                  label: "File",
                  widget: "file",
                  required: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

function back_to_home() {
  window.location.href = `/`;
}
