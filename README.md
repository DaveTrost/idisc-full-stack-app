# idisc-fullstack-app

**Author**: Dave Trost
**Version**: 1.0.0

## Overview

This app is for displaying disc golf scorecards and the data contained therein. The target audience is the player who wants to have analytics for their game across time, courses, holes, tournaments, and locations. Graphical plotting of the user's stats wil enable pattern recognition for strenths and weaknesses so the user can target their practice time appropriately.

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
- Required development setup:
  - localhost will be used to proxy a postgres SQL database from <http://localhost:3000/api>
  - all dependencies are included in the package.json file. Use 'npm i' to set up
- The server and app are grouped together in this (single) repository

## Architecture

- This is a full-stack application with all components in one repository.
- Client architecture is in the "public" folder and the client application includes: web front-end, server requests are made using fetch(). Front-end component styles are built on the Materialize CSS/JS framework.
- Server architecture is provided from server.js. The server is built using Express for handling HTTP protocol, CORS for deploying the server alongside the client application, dotenv for handling environemnt settings, and Postgres for database communications.
- The database is an SQL database.

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
    - build a server with a route and start it - DONE
    - connect with the server via postman and watch log values - DONE
    - query the database using postgres - DONE
    - build and format the return array - DONE
    - verify response details using postman - DONE
  - front to back communication
    - verify that all fron-end components are working as expected ...
      - Build out a lot more code to get the appropriate hierarchy for rendering cards from the list of data - DONE
