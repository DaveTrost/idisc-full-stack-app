# idisc-fullstack-app

**Author**: Dave Trost
**Version**: 1.0.0

## Overview

This app is for displaying disc golf scorecards and the data contained therein.

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
- Required development setup:
  - localhost will be used to proxy a postgres SQL database from <http://localhost:3000/api>
  - all dependencies are included in the package.json file. Use 'npm i' to set up
- The server and app are grouped together in this (single) repository

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Development plan

- edit vs-code settings based on lab notes - DONE - but the settings I added are in a lab-specific file. Is this supposed to be in a global file?
- Setup repo structure based on lab notes - DONE
  - data - done
  - lib - done
  - public/assets - done
  - public/src - done
  - public/test - done
  - public - DONE
- Take care of dependecies - DONE
- FRONT END WORK - to be done in vscode @ /public
- BACK END WORK
  - database stuff
    - test database creation steps and adding information in psql - DONE
    - bootstrap database with create-table and drop-table - DONE
    - implement load-seed-data - DONE
    - view the data using psql console - DONE
  - server stuff
    - build a server with a route and start it
    - connect with the server via postman and watch log values
    - connect the server to the database using postgres
    - query the database using postgres
    - build and format the return array
    - send the result to the client
    - verify response quality using postman
  - front to back communication
    - duplicate the postman query from the front end
