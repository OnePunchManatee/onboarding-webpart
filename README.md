# Onboarding Webpart - An SPFx TypeScript Project

## Description

Onboarding Webpart is a SharePoint Framework (SPFx) project written in TypeScript, HTML, and CSS. It serves to deploy a custom web part in SharePoint, specifically designed to facilitate the onboarding process for new employees.

## Features

- SharePoint Framework project utilizing TypeScript and modern web technologies.
- Creates and exports a SharePoint Webpart for managing onboarding tasks.

## Getting Started

1. Clone the project repository from GitHub: `git clone https://github.com/onepunchmanatee/onboarding-webpart.git`

2. Navigate to the project folder in Gitbash (or other terminal): `cd onboarding-webpart`

3. Install Node.js version **16.13.0** (other versions are incompatible with Sharepoint): https://nodejs.org/dist/v16.13.0/node-v16.13.0-x64.msi

4. Install project dependencies:

`npm i && npm i gulp --global && gulp trust-dev-cert`

This installs the node modules described in `package-lock.json` and installs `gulp`, which is used to test and export the webpart.
The final command allows for connection to the local testing server.

## Usage

1. Open the project in Visual Studio Code (or other IDE).

2. Make desired changes to the `innerHTML` variable or `.scss` sheet.

3. To test the webpart locally, run `gulp serve` in a terminal.

4. To export the webpart for production, run `gulp bundle --ship --production && gulp package-solution --ship --production`. This generates a `.sppkg` file in `/sharepoint/solution`. With admin access, enter the Sharepoint Admin Center and add the `.sppkg` file as an app under your organization.

## Project Structure

In `/src/webparts/helloWorld`:

- `OnboardingWebPart.ts` contains the typescript and HTML needed to run the webpart. The `innerHTML` object in `render()` contains the HTML, which is dependent on the scss doc for styling.

- `OnboardingWebPart.module.scss` contains the css for the webpart. Any ids or classes created can be referenced in `OnboardingWebPart.ts` using the `styles` variable.

- The `assets` folder contains the images that are referenced to create the circles and background.

- ESLint and Prettier configurations can be found in the `.eslintrc.json` and `.prettierrc` files, respectively.

- SharePoint configuration settings are defined in the `config.json` file.

---
