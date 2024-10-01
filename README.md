# Aloware UI Cypress Automation

This project is designed to automate UI testing for the [Aloware](https://aloware.com/) website using Cypress. It uses JavaScript and is configured with Mochawesome for generating test reports.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Generating Reports](#generating-reports)

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v14.7.0 or higher)
- **npm** (v6.14.7 or higher)

You can download Node.js from the [official website](https://nodejs.org/). Installing Node.js will also install npm.

To verify your installation:

```bash
node -v
npm -v
```
## Installation
**Clone the repository:**
```bash
git clone https://github.com/Vickany/aloware-ui-cypress-automation.git
cd aloware-ui-cypress-automation
```
**Install dependencies:**
```bash
npm install
```

## Running Tests

**Run all tests headlessly:**
```bash
npm run test
```
**Open Cypress Test Runner:**
```bash
npm run cy:open
```
## Generating Reports
This project uses cypress-mochawesome-reporter to generate test reports. After running tests, reports will be automatically generated.

Reports are saved in the report folder.
