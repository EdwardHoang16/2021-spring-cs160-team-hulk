# Organic Farm

This project has three parts, the frontend, the backend and the database. Backend server should be brought up first before running the frontend server. Branching should be done off of the master branch.

This README assumes you are using a Debian-based GNU/Linux operating system.

## 1. Frontend server

To run the frontend server, [Node.js](https://nodejs.org/en/) should be installed.

- If it is not installed, then run this command:

`sudo apt install npm`

- Go to the `frontend` folder.

`cd frontend`

- If it is the first time you run the frontend, or you have missing modules after `git pull`, run:

`npm install`

- To start the server, run:

`npm start`

## 2. Backend with in-memory database

Before running the backend server with a database, the first thing to do is to make sure the backend itself functions correctly.

The backend is written in `Java`, Java virtual machine is required to run it.

- If JRE is not installed, then run this command:

`sudo apt install openjdk-17-jre`

- Go to the `backend` folder.

`cd backend`

- To run the backend server, just use the Gradle wrapper `gradlew`.

`SPRING_PROFILES_ACTIVE=local ./gradlew bootRun`

## 3. Setup `postgresql`

To run the backend server with a real database that stores data on disk, you need to setup postgresql.

- Install `postgresql` first if your computer does not have it.

`sudo apt install postgresql`

- Setup your role and database.

```
sudo -u postgres createuser $USER
sudo -u postgres createdb $USER -O $USER
```

- Then, edit access control config file `/etc/postgresql/*/main/pg_hba.conf`, change `md5` in the following two line into `trust`

```
host    all             all             127.0.0.1/32            md5
host    all             all             ::1/128                 md5
```

- Finally, restart `postgresql` for changes in the config file to take effect.

`sudo systemctl restart postgresql`

## 4. Backend with `postgresql` database

`./gradlew bootRun`
