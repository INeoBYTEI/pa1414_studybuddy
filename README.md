# Project: Study Buddy
Study Buddy is a web-based application that aims to help its users memorize, study and learn with the help of virtual flashcards. Users will be able to easily and intuitively create their own courses, decks and flashcards on an easy-to-understand website.

# Prerequisites
1. Node.js v18.17.1 or newer
2. Ubuntu or Bash terminal

# Step-by-Step Setup
## Step 1:
Download the project file and place it in a directory that your terminal can access.
Change the 'dot.env' file in the backend folder to just '.env'
> right click 'dot.env'
> select 'rename'
> change the name to '.env'
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
To run each component, two instances of your terminal is required. One will run the frontend and the other will be running the backend. 
### Terminal 1 - Backend
In this terminal, change your directory to the **backend** (if you're not already there).
> **Run:** \
>   cd backend
>
Then start up the **backend** server.
> **Run:** \
>   npm run dev
>

The terminal should show the following message when the server is up: \
![alt text for screen readers](https://cdn.discordapp.com/attachments/1142576555789389934/1170018409619128431/image.png?ex=6557838e&is=65450e8e&hm=9fa292c488dba2fa2b884ab55fcce982c0818cdadbfbd08b6370e804d4a845f2&) \
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

The terminal should show the following message when the server is up: \
![alt text for screen readers](https://cdn.discordapp.com/attachments/1142576555789389934/1170018247052107916/image.png?ex=65578367&is=65450e67&hm=9905d628f7200c4058fd29f203c4808b6a0f3996e99779f0c3c01e11c6f7d8e0&)
