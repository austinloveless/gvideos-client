# Project Proposal

## Team

Team gVideos (unofficially Team Amazeballs)

## Members

- Levi Boenish
- Josh Levy
- Austin Loveless
- Mark Newcomb

## Description

A web app specifically for web dev tutorial videos (YouTube videos already created), that filters the results based on a simple form of filter options (i.e. multi-check for languages, instructor, or select for video duration).

## Problem

Sites like YouTube rely solely on the search field to fetch and display results. But the results often include videos that include a different technology or language, or videos on a very different level (too remedial or too advanced) than what the individual is looking for.

## Solution

Our project - Galvanize Videos - will provide a simple, yet effective solution to this problem. Our project will allow users to narrow down the video results based on selected parameters in a simple Bootstrap form.

## UX

When a user visits the site, programming tutorial videos populate on the home page. But on the left hand side, there will be a simple Bootstrap form, allowing the user to select specific parameters and submit the form, which would reload the list of videos based on updated parameters.

## Technologies/Languages

1.  Vue (incl. Vue-Router and Vuex)
2.  Bootstrap-Vue
3.  Express+CORS+Body+Parser
4.  MongoDB
5.  Mongoose
6.  Shrike Videos API
7.  Heroku (back-end deployment)
8.  Firebase (front-end deployment)
9.  Mlabs (mongodb deployment)

## MVP

Videos and form displays on page load, and user can run a one-time filter of the video results.

## Wireframes

![Login](https://github.com/JoshAaronLevy/gvideos-client/blob/master/Wireframes/Login-Page.png)
![Home/Videos](https://github.com/JoshAaronLevy/gvideos-client/blob/master/Wireframes/User-Page.png)
![Instructor](https://github.com/JoshAaronLevy/gvideos-client/blob/master/Wireframes/Instructor-Page.png)

## ERD

![MongoDB Shizz](/Users/joshlevy/Desktop/gvideos/client/Wireframes/Screen Shot 2018-08-13 at 11.46.01 AM.png)

## Stretch

Basic (or Social Media) Auth with Passport.js, which would allow for user accounts, thus allowing implementation for users to add videos to favorites, rate videos, and save filter settings.
