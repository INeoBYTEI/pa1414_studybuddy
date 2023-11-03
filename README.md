# Project: Study Buddy
Study Buddy is a web-based application that aims to help its users memorize,  study and learn with the help of virtual flashcards. Users will be able to easily and intuitively create their own courses, decks and flashcards on an easy-to-understand website.

# Prerequisites
1. Node.js v18.17.1 or newer
2. Ubuntu terminal

# Step-by-Step Setup
## Step 1:
Download the project file and place it in a directory that your Ubuntu terminal can access.

## Step 2: 
In your terminal, place yourself in the project's file directory.
> **Run:** \
>  cd <file_path>
>

## Step 3:
While in the project directory change your directory to the frontend-folder
> **Run:** \
>  cd frontend 
> 
Then, install all the required node dependencies. These should already be in the 'package.json' file
> **Run:** \
>  npm install
>

<sub>_Steps 3 & 4 can be done in any order you want_</sub>

## Step 4: 
While in the project directory change your directory to the backend-folder
> **Run:** \
>  cd backend 
> 
Then, install all the required node dependencies. These should already be in the 'package.json' file
> **Run:** \
>  npm install
>

<sub>_Steps 3 & 4 can be done in any order you want_</sub>

## Step 5:
Once all the dependencies have been properly downloaded. You should now be able to run the backend and the frontend respectively. \
\
To run each component, two instances of your terminal is required. One will run the frontend and the other will be running the backend. \
### Terminal 1 - Backend
In this terminal, change your directory to the **backend** (if you're not already there).
> **Run:** \
>   cd backend
>
Then start up the **backend** server.
> **Run:** \
>   npm run dev
>
\
Each component should be able to run on their own without crashing. However, it is **recommended** to run the backend prior to running the frontend in order to ensure that each component works as it should.
### Terminal 2 - Frontend
In this terminal, change your directory to the **frontend**.
> **Run: (from the project file directory)** \
>   cd frontend
>
Then start up the **frontend** server.
> **Run:** \
>   npm start
>
