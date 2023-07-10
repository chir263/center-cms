# Virtual Labs CMS - Developer Document

This document serves as a guide for developers working on the Virtual Labs CMS project. It provides an overview of the project, development guidelines, and deployment instructions.

## Table of Contents

- [Introduction](#introduction)
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

## Introduction

Virtual Labs CMS is a content management system designed for managing virtual laboratory experiments and simulations. It utilizes HTML, JavaScript, and CSS, along with the Netlify CMS and Font Awesome library.

## Project Setup

- Clone the Virtual Labs CMS repository from the [GitHub repository](https://github.com/example-repo) to your local development environment.
- Ensure that you have the required programming languages and libraries installed (HTML, JavaScript, CSS, Netlify CMS, and Font Awesome).
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

## Modules

### Admin Module

The admin module handles the administration interface of Virtual Labs CMS. It includes the following files:

- `/admin/index.html`: This file represents the HTML structure of the admin interface, providing the layout and structure for the CMS administration section.
- `/admin/js/modal.js`: The `modal.js` file contains JavaScript code responsible for managing modal components within the admin module. It handles modal logic.
- `/admin/js/mutation.js`: The `mutation.js` file implements JavaScript code that utilizes the `MutationObserver()` interface. It listens for changes in the DOM (Document Object Model) of Netlify CMS and applies cosmetic changes to enhance the visual appearance and user experience of the CMS interface.

### CSS Module

The CSS module includes the CSS styles specific to Virtual Labs CMS. It consists of the following files:

- `/css/admin.css`: The `admin.css` file contains CSS styles specific to the admin interface of Virtual Labs CMS, defining the visual layout, typography, and colors related to the CMS administration section.
- `/css/help.css`: The `help.css` file includes CSS styles for the help and documentation section of Virtual Labs CMS, defining the presentation of user guides, documentation pages, and help resources.
- `/css/style.css`: The `style.css` file holds general CSS styles applicable across the entire Virtual Labs CMS application, setting the overall visual theme and styles that are not specific to any particular module.

### Help Module

The help module provides the documentation and help resources for Virtual Labs CMS. It includes the following files:

- `/help/index.html`: The `index.html` file serves as the entry point for the help and documentation section of Virtual Labs CMS, providing the structure and layout for accessing user guides, tutorials, and other help resources.
- `/help/help-data.js`: The `help-data.js` file contains JavaScript code that manages the data and functionality related to the help and documentation section, such as loading and rendering help content dynamically.
- `/help/markdown/`: This directory holds the Markdown files representing the user guides, tutorials, and documentation for Virtual Labs CMS. Each Markdown file covers a specific topic or aspect of the CMS, providing detailed instructions and explanations.

### Other Modules

The Virtual Labs CMS project also includes additional modules such as `/js/script.js` for general-purpose JavaScript code used throughout the application, and `/images/` for various image files used within the CMS.

## Coding Conventions

- Follow the established coding conventions and best practices to maintain consistency and readability in the codebase.
- Document your code using appropriate comments and inline documentation to enhance code understandability.

## Development Workflows

- Familiarize yourself with the project structure, code modules, and their functionalities.
- Collaborate with the team using version control. Follow the Git workflow and commit guidelines to ensure smooth collaboration and code integrity.
- Utilize the provided JavaScript libraries and frameworks effectively to enhance development efficiency and maintain code modularity.

## Deployment

To deploy and use Virtual Labs CMS, follow the instructions provided in the [Deployment](../README.md#deployment--usage) section of the main README.

---
