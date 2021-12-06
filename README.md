# Organic Farm

This project has three parts, the frontend, the backend and the database. Backend server should be brought up first before running the frontend server.

This README assumes you are using a Debian-based GNU/Linux operating system.

## 1. Frontend server

To run the frontend server you need [Node.js](https://nodejs.org/en/) installed.

- If it is not installed, then run this command:
 `sudo apt install npm`

- Go to the `frontend` folder.
`cd frontend`

- If it is the first time you run the frontend, or you have missing modules after `git pull`, run:
`npm install`

- To start the server, run:
`npm start`

## 2. Backend with in-memory database

The backend is written in `Java`, you need Java virtual machine to run it.

- Make sure you have JRE installed. If it is not installed, then run this command:
 `sudo apt install openjdk-17-jre`

- Go to the `backend` folder.
`cd backend`

- To run the backend server you can just use the Gradle wrapper `gradlew`.
`SPRING_PROFILES_ACTIVE=local ./gradlew bootRun`

## 3. Backend with postgres database

(TODO)

## 4. Use `Docker` to start the servers

(TODO)
