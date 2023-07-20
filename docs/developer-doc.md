# Virtual Labs CMS - Developer Document

This document serves as a guide for developers working on the Virtual Labs CMS project. It provides an overview of the project, development guidelines, and deployment instructions.

## Table of Contents

- [Introduction](#introduction)
- [Design Decisions](#design-decisions)
- [Project Setup](#project-setup)
- [Directory Structure](#directory-structure)
- [Code Modules](#code-modules)
  - [Admin Module](#admin-module)
  - [CSS Module](#css-module)
  - [Help Module](#help-module)
  - [Other Modules](#other-modules)
- [Coding Conventions](#coding-conventions)
- [Development Workflows](#development-workflows)
- [Deployment](#deployment)
- [Future Updates and Features](#future-updates-and-features)

## Introduction

Virtual Labs CMS is a content management system designed for managing virtual laboratory experiments and simulations. It utilizes HTML, JavaScript, and CSS, along with the Netlify CMS and Font Awesome library.

## Design Decisions

### Home/Landing Page:

- **Conditional Greeting**: The right side of the navbar will display a personalized greeting based on whether the user is logged in or not. If the user is logged in, it will display "Hi ${user}" with the user's name. Otherwise, it will display "Welcome Guest".
- **Section Division**: The landing page is divided into two sections: "Create Experiment" and "Modify Experiment".
- **Instruction Cards**: Instructions are displayed in the form of cards with appropriate screenshots to provide users with clear guidance and visual references.
- **Modify Experiment**: The "Modify Experiment" tab will have a card divided into two sections, displaying experiments under "Virtual Labs" and experiments under the user's organization.

### Content Management Page:

- **Utility Buttons**: The bottom right of the page contains utility buttons such as "Help," "Deployment Link," and "Home" to provide easy access to essential functionalities.
- **Username Display**: The username is displayed on the right side of the navbar, added dynamically using a MutationObserver to reflect changes in real-time.
- **Experiment Cards**: Each experiment component is displayed in the form of a card, providing an organized and visually appealing layout for better user experience.
- **Simulation Upload**: Each simulation folder type has a different upload section, as Netlify CMS does not support folder upload. Only individual files can be uploaded, and multiple files cannot be uploaded simultaneously.
- **File Upload Process**: Uploading simulation files is made possible by using the file widget. When clicked, it opens the Media Pane, allowing the user to upload files and write the selected file path in a markdown file. To improve UI/UX, the preview pane for the markdown file is removed, and the file widget is automatically clicked using a MutationObserver.
- **Publish Button**: Clicking on the "Publish" button commits the changes and displays a success message. This message is altered using a MutationObserver to provide additional information about the deployment update.

These design decisions were made to enhance user engagement, provide intuitive navigation, and optimize the overall user experience within the Virtual Labs CMS tool.

## Project Setup

- Clone the Virtual Labs CMS repository from the [GitHub repository](https://github.com/virtual-labs/app-exp-create-web) to your local development environment.
- Set up your development environment according to your preferred IDE and tools.

## Directory Structure

The directory structure of the Virtual Labs CMS project is as follows:

```
admin/
    index.html
    js/
        modal.js
        mutation.js
css/
    admin.css
    help.css
    style.css
help/
    index.html
    help-data.js
    markdown/
        (Markdown files)
images/
    (Image files)
js/
    script.js
index.html
```

The directory structure provides a logical organization of the project's files and modules. Each directory contains files specific to its corresponding module or functionality.

## Code Modules

### Admin Module

The admin module handles the interface of Virtual Labs CMS. It includes the following files:

- `/admin/index.html`: This file represents the HTML structure of the admin interface, providing the layout and structure for the CMS administration section.
- `/admin/js/modal.js`: The `modal.js` file contains JavaScript code responsible for managing modal components within the admin module. It handles modal logic.
- `/admin/js/mutation.js`: The `mutation.js` file implements JavaScript code that utilizes the `MutationObserver()` interface. It listens for changes in the DOM (Document Object Model) of Netlify CMS and applies cosmetic changes to enhance the visual appearance and user experience of the CMS interface.

- `/admin/js/config.js`: Contains configuration settings for the Netlify CMS.

### CSS Module

The CSS module includes the CSS styles specific to Virtual Labs CMS. It consists of the following files:

- `/css/admin.css`: The `admin.css` file contains CSS styles specific to the admin interface of Virtual Labs CMS, defining the visual layout, typography, and colors related to the CMS.
- `/css/help.css`: The `help.css` file includes CSS styles for the help and documentation section of Virtual Labs CMS, defining the presentation of user guides, documentation pages, and help resources.
- `/css/style.css`: The `style.css` file holds CSS styles applicable to Home/Landing page.

### Help Module

The help module provides the documentation and [help resources](https://virtual-labs-cms.netlify.app/help/) for Virtual Labs CMS. It includes the following files:

- `/help/index.html`: The `index.html` file serves as the entry point for the help and documentation section of Virtual Labs CMS, providing the structure and layout for accessing user guides, tutorials, and other help resources.
- `/help/help-data.js`: The `help-data.js` file contains JavaScript code that manages the data and functionality related to the help and documentation section, such as loading and rendering help content dynamically.
- `/help/markdown/`: This directory holds the Markdown files representing the user guides, tutorials, and documentation for Virtual Labs CMS. Each Markdown file covers a specific topic or aspect of the CMS, providing detailed instructions and explanations.

### Other Modules

- `/docs/`: This directory contains Markdown files representing the user and developer documentation for Virtual Labs CMS. It provides detailed instructions on deploying, configuring, and using the CMS.

- `/images/`: This directory holds various images used within the Virtual Labs CMS application, such as logos, icons, and visual assets.

- `/js/script.js`: The `script.js` file contains general-purpose JavaScript code used in functionality and interactions for Home/Landing page.

These modules collectively contribute to the functionality, styling, and user experience of Virtual Labs CMS. The organization of code into separate modules promotes modularity, reusability, and maintainability.

## Coding Conventions

- Follow the established coding conventions and best practices to maintain consistency and readability in the codebase.
- Document your code using appropriate comments and inline documentation to enhance code understandability.

## Development Workflows

Any commit to `master` branch of this repository will automatically re-deploy site on Netlify.

## Deployment

Virtual Labs CMS is deployed on Netlify along with GitHub OAuth, following these steps:

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

## Future Updates and Features

- Integration of an IDE for managing and coding simulations in web interface without dependence on local system.

---
