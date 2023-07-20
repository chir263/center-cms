# User Document - Virtual Labs CMS

## Overview

Virtual Labs CMS is a web-based Content Management System (CMS) designed to facilitate the creation of virtual experiments. This user document provides instructions on how to use the Virtual Labs CMS effectively.

## Table of Contents

- [Getting Started](#getting-started)
  - [Creating an Experiment](#creating-an-experiment-repository)
  - [Modifying an Experiment](#modifying-an-experiment-repository)
- [Using the Virtual Labs CMS](#using-the-virtual-labs-cms)
  - [Modifying Experiment Components](#creating-experiment-components)
  - [Uploading Simulation Files](#uploading-simulation-files)
- [Known Limitations](#known-limitations)
- [Troubleshooting](#troubleshooting)

## Getting Started

To begin using [Virtual Labs CMS](<(https://virtual-labs-cms.netlify.app/)>), follow the instructions below.

### Creating an Experiment

1. Visit the Virtual Labs CMS landing page.
2. In the navigation bar, click on the "Create" tab.
3. Read the instructions provided on the [page](https://virtual-labs-cms.netlify.app/).

   - Make sure you have a GitHub. account. If you don't have one, you can sign up for free at GitHub
   - Create experiment:
     - **Creating Experiment in Virtual Labs:**
       Follow the instructions in the [engineers forum](https://github.com/virtual-labs-cms/engineers-forum) repository to create an experiment in Virtual Labs: Engineers forum.
     - **Creating Experiment in your organization:**
       - Create the experiment repository with experiment [template](https://github.com/virtual-labs-cms/exp-template).
       - Name format for repository should follow the given format `exp-<expName>-<devInstituteName>` e.g. exp-geometry-optimization-molecules-iiith
       - Must select `Include all branches` while creating repository from this template.
       - After creating repository setup [Secret Token](https://virtual-labs-cms.netlify.app/#secret)

4. Once you have created the experiment repository, proceed to the next section for modifying the experiment.

### Modifying an Experiment

1. On the Virtual Labs CMS landing page, click on the "Modify" tab in the navigation bar.
2. In the form, enter the organisation name and the experiment repository name.
3. Click the "Modify" button.
4. Authenticate yourself using your GitHub account credentials.
5. After authentication, you will be redirected to content management page.

## Using the Virtual Labs CMS

This section describes the key features and functionalities of the Virtual Labs CMS. For additional guidance, click on the "i" icon located in the bottom right corner of the page to access the help document.

### Modifying Experiment Components

The Virtual Labs CMS provides two editors to create experiment components: Markdown editor and rich text editor. Follow these steps to create experiment components:

1. Navigate to the specific component you want to edit, such as Aim, Theory, etc.
2. Choose the Markdown editor or the rich text editor to write and structure the content.
3. Save your changes to update the experiment component.

### Uploading Simulation Files

To incorporate interactive simulations into your experiments, you can upload simulation files. Please note that only single file uploads are supported. Follow these steps to upload a simulation file:

1. Click on corresponding tab (i.e css, js, images) to upload simulation. Then click on "View/Upload Simulation `CSS/JS/Images`" card
2. Click on the upload button and select the file to be uploaded.
3. Repeat the process for additional simulation files.
4. Click on `Publish` to commit changes.

## Known Limitations

- It is not possible to select and upload multiple simulation files simultaneously. Each file must be added individually.

## Troubleshooting

If you encounter any issues while using Virtual Labs CMS, consider the following troubleshooting steps:

- **Deployment to GitHub Pages:** If an experiment is not getting deployed to GitHub Pages, kindly check that the Secret Token is placed correctly. Refer to the [Secret Token documentation](https://virtual-labs-cms.netlify.app/#secret) for guidance on configuring the Secret Token.

- **Failed to Persist Entry in Netlify CMS:** If a user is able to view files but unable to commit changes through Netlify CMS, and receives an error message stating "Failed to persist entry: API_ERROR: Although you appear to have the correct authorization credentials, the \`ORGANISATION\` organization has enabled OAuth App access restrictions, meaning that data access to third-parties is limited," follow these steps:
  - Go to the organization's GitHub Settings.
  - Navigate to "Third-party Access" or "OAuth Application Policy."
  - Click on "Remove restrictions" to lift the limitations on data access by third-party applications.

Please note that these troubleshooting steps are provided as general guidance.
