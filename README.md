# Virtual Labs CMS

## Table of Contents

- [Overview](#overview)
- [Target Audience](#target-audience)
- [Technology Used](#technology-used)
- [Design Decisions](#design-decisions)
- [Feature List](#feature-list)
- [Directory Structure](#directory-structure)
- [Configuration Files](#configuration-files)
- [Code Explanation](#code-explanation)
  - [Admin Module](#admin-module)
  - [CSS Module](#css-module)
  - [Help Module](#help-module)
  - [Other Modules](#other-modules)
- [Future Scope](#future-scope)
- [Deployment / Usage](#deployment--usage)
- [Troubleshooting](#troubleshooting)

## Overview

The Virtual Labs CMS is a web-based Content Management System (CMS) designed to facilitate the creation of virtual experiments. It offers a user-friendly interface that eliminates the need for users to have prior knowledge of Git and Markdown. With this CMS, experiment creators can easily build and manage virtual experiments while having the convenience of seamless deployment as it gives an online option to develop experiments which does not require any downloads or local setup.

## Target Audience

The Virtual Labs CMS primarily targets Virtual Labs content creators with less software development knowledge. These creators can be Virtual Labs Consortium members or even independent experiment creators. The CMS gives them an online platform for experiment development and frees them from the compulsion of setting up a local development environment before they can start building their content.

## Technology Used

The Virtual Labs CMS tool utilizes the following technologies:

- HTML5 and CSS3 for front-end user interface design.
- JavaScript for client-side interactivity and functionality.
- Netlify CMS as third-party CMS tool used for content management and Git integration.
- Markdown for creating and formatting documentation.
- Various JavaScript libraries for enhanced user experience.

## Design Decisions

The design of Virtual Labs CMS is based on the following principles:

- User-friendly interface: The CMS prioritizes ease of use to allow administrators to efficiently manage experiments and simulations.
- Modular architecture: The codebase is organized into separate directories for different functional areas, promoting code reusability and maintainability.
- Extensibility: The system is designed to be easily extendable to accommodate future enhancements and customizations.

## Feature List

The key features of Virtual Labs CMS include:

- Documentation and help resources: Provide user documentation and help files to guide users through the experiments.
- User-Friendly Interface: The CMS offers an intuitive and user-friendly interface that simplifies the experiment creation and management process. Users can navigate through the CMS effortlessly and access all the necessary tools and features.
- Experiment Component Creation: Experiment creators can choose between the Markdown editor and the rich text editor to create various experiment components such as Aim, Theory, and more. The editor provides a familiar and straightforward environment for writing and structuring experiment content.
- Simulation File Upload: The CMS allows users to upload simulation files from their local systems directly to the experiment's Git repository. This feature enables experiment creators to incorporate interactive simulations seamlessly into their experiments.
- Real-Time Deployment: The Virtual Labs CMS ensures that any changes made to experiments are deployed in real-time to GitHub Pages. Experiment creators can instantly see the updated version of their experiments and observe how the changes impact the overall experience.

## Directory Structure

The directory structure of the code files for Virtual Labs CMS is as follows:

```
├── index.html
├── admin
│     ├── index.html
│     └── js
│         ├── config.js
│         ├── modal.js
│         └── mutation.js
├── css
│    ├── admin.css
│    ├── help.css
│    └── style.css
├── docs
│    └── user-doc.md
├── help
│     ├── help-data.js
│     ├── img
│     ├── index.html
│     └── markdown
│            ├── editing-exp.md
│            ├── getting-started.md
│            ├── introduction.md
│            ├── simulation.md
│            └── upload-media.md
├── images
└── js
    └── script.js

```

## Configuration Files

The Virtual Labs CMS tool includes the following configuration files:

- `/admin/js/config.js`: Contains configuration settings for the Netlify CMS.

## Code Explanation

The codebase of Virtual Labs CMS is organized into different modules, each serving a specific purpose. Here's an overview of the main modules and their functionalities:

### Admin Module

- `/admin/index.html`: It defines the structure and layout of the CMS page which includes Netlify CMS and Utility buttons present at bottom-right of the page . It loads the necessary Content Delivery Network (CDN) scripts for Netlify CMS.

- `/admin/js/modal.js`: The `modal.js` file contains JavaScript code responsible for managing Help modal pane within the admin module. It handles modal logic.

- `/admin/js/mutation.js`: The `mutation.js` file implements JavaScript code that utilizes the `MutationObserver()` interface. It listens for changes in the DOM (Document Object Model) of Netlify CMS and applies cosmetic changes to enhance the visual appearance and user experience of the CMS interface.

### CSS Module

- `/css/admin.css`: The `admin.css` file contains CSS styles specific to the admin interface of Virtual Labs CMS. It defines the visual layout, typography, colors, and other styling aspects related to the CMS administration section.

- `/css/help.css`: The `help.css` file includes CSS styles for the help and documentation section of Virtual Labs CMS.

- `/css/style.css`: The `style.css` file holds general CSS styles applicable to the home/landing page of Virtual Labs CMS application.

### Help Module

- `/help/index.html`: The `index.html` file serves as the entry point for the help and documentation section of Virtual Labs CMS. It provides the structure and layout for accessing user guides, tutorials, and other help resources.

- `/help/help-data.js`: The `help-data.js` file contains JSON object which holds file and caption information for help module.

- `/help/markdown/`: This directory holds Markdown files that represent the user guides, tutorials, and documentation for Virtual Labs CMS. Each Markdown file covers a specific topic or aspect of the CMS and provides detailed instructions and explanations.

### Other Modules

- `/docs/`: This directory contains Markdown files representing the user and developer documentation for Virtual Labs CMS. It provides detailed instructions on deploying, configuring, and using the CMS.

- `/images/`: This directory holds various images used within the Virtual Labs CMS application, such as logos, icons, and visual assets.

- `/js/script.js`: The `script.js` file contains general-purpose JavaScript code used in functionality and interactions for Home/Landing page.

These modules collectively contribute to the functionality, styling, and user experience of Virtual Labs CMS. The organization of code into separate modules promotes modularity, reusability, and maintainability.

## Future Scope

In the future, Virtual Labs CMS plans to integrate an IDE (Integrated Development Environment) with a preview feature for creating static sites. This integration aims to eliminate the need for uploading simulations and provide users with a seamless experience within the CMS.

Key areas of focus for future development include:

- **Integrated IDE:** Introduce an integrated IDE within Virtual Labs CMS that allows users to author and preview experiment simulation in real time. This IDE will provide a streamlined workflow, enabling users to create and modify experiment simulations directly within the CMS interface.

## Deployment / Usage

To deploy and use Virtual Labs CMS, follow these steps:

1. Deploy on Netlify:

   - Virtual Labs CMS is deployed on Netlify, a popular hosting platform for static websites.
   - The deployed site is accessible at the following domain: [https://virtual-labs-cms.netlify.app/](https://virtual-labs-cms.netlify.app/).

2. Set up OAuth with GitHub:

   - Register a new OAuth application within your GitHub account by navigating to GitHub Settings > Developer Settings > OAuth Apps > New OAuth App.
   - Set the Homepage URL to your Netlify deployment domain (e.g., `https://virtual-labs-cms.netlify.app/`).
   - Set the Authorization callback URL to `https://api.netlify.com/auth/done`.
   - This will generate a Client ID and Client Secret.

3. Configure OAuth in Netlify:

   - Go to the Netlify dashboard for your deployed site.
   - Navigate to Site Configuration > Access control > OAuth.
   - Click on "Install Provider" and select "GitHub".
   - Paste the Client ID and Client Secret generated from the GitHub OAuth application registration into the respective fields.
   - Click on "Install" to enable the GitHub OAuth provider.

4. Access Virtual Labs CMS:
   - After completing the deployment and OAuth setup, you can access the Virtual Labs CMS by visiting your Netlify deployment URL (e.g., `https://virtual-labs-cms.netlify.app/`).
   - Follow the provided login instructions using the GitHub OAuth provider to access the CMS interface.

## Usage

Once you have deployed and configured Virtual Labs CMS, you can start using it to manage your virtual laboratory experiments and simulations:

1. Access the Virtual Labs CMS interface by visiting your Netlify deployment URL (e.g., `https://virtual-labs-cms.netlify.app/`).

Refer to the user documentation provided in the `docs` directory for detailed instructions on using Virtual Labs CMS and making the most of its features.

## Troubleshooting

If you encounter any issues while using Virtual Labs CMS, consider the following troubleshooting steps:

- **Deployment to GitHub Pages:** If an experiment is not getting deployed to GitHub Pages, kindly check that the Secret Token is placed correctly. Refer to the [Secret Token documentation](https://virtual-labs-cms.netlify.app/#secret) for guidance on configuring the Secret Token.

- **Failed to Persist Entry in Netlify CMS:** If a user is able to view files but unable to commit changes through Netlify CMS, and receives an error message stating "Failed to persist entry: API_ERROR: Although you appear to have the correct authorization credentials, the \`ORGANISATION\` organization has enabled OAuth App access restrictions, meaning that data access to third-parties is limited," follow these steps:
  - Go to the organization's GitHub Settings.
  - Navigate to "Third-party Access" or "OAuth Application Policy."
  - Click on "Remove restrictions" to lift the limitations on data access by third-party applications.

Please note that these troubleshooting steps are provided as general guidance.

---
