# Social-Network-API

I have created this Social Network API. I could not push from my terminal so I had to delete it and push it again.


## Table of Contents

* [Intro](#intro)
* [User-Story](user-story)
* [Technologies](#technologies)
* [Acceptance-criteria](#acceptance-criteria)
* [How-to-use](#how-to-use)
* [Video-Wlk-through](#video-walkthrough)

## Intro

I have built an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I used Express.js for routing, a MongoDB database, and the Mongoose ODM.

I created my own data using Insomnia after you’ve created your API.

## User-Story


AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Technologies

*Javascript
*Express
*Mongoose
*MongoDB
*MongoDB Compass


## Acceptance criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## How to use

Navigate to the root folder of the app and run node index.js

Open MongoDB Compass to see the database

I have used Postman to interact with the api

##  Video Walkthrough

Here is a video walkthrough showing create user,get all users, get a single user by id, delete user, update user.
https://watch.screencastify.com/v/iokQskuQ9fcHEUsTLhZu

Here is a video showing how to add a new user friend and delete a user friend.
https://watch.screencastify.com/v/plw8TYjDn5wiKoZLtjac


