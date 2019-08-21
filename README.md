# Fly Tying Companion-Service Layer
## This repository contains all the design documents as well as code files for the back-end of the Fly Tying Companion application.

The Fly Tying Companion is an app that assists fly fisherman/fly-tyers by allowing them to quickly see what flies they can tie based off the materials they've selected in the app. The app will allow a user to input materials they own and then the app will then return the flies they can tie based on the inputs they made. 

Much like a recipe/cooking application helps you find dishes to make with the unused ingredients you have, the Fly Tying Companion will help you find flies and their patterns with some of the unused fly-tying materials you have left over. 

## Repository Contents

The back-end for this application consists of a MongoDB database that I created which is now being hosted on Mongo's database as a service platform, MongoDB Atlas. The document database has one main collection of over 500 different flies and their patterns/materials. 

Along with the database, I created a REST API with Node.js, Express, and Mongoose to serve the data to the front-end of the application which is located here: https://github.com/Strayer77/FlyTyingCompanion_UI

The Documentation folder holds the designs for the database itself, the service layer and it's endpoints, as well as models for the fly documents stored in the database.

