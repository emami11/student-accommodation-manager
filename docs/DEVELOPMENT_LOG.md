# Development Log

This file records the major development decisions, implementation steps, problems encountered and solutions used during the Student Accommodation Manager project.

The purpose of the log is to provide a clear technical history of the project and support later reflection, report writing and assessment discussions.

---

## Stage 1 — Project Direction and Scope

### Decision

The approved project is a **Student Accommodation Manager / Tenant Evidence System**.

### Problem being addressed

Student tenants may keep accommodation information across photographs, emails, messages and documents. This can make it difficult to maintain a structured record of:

- the property's original condition;
- maintenance problems;
- when issues were reported;
- tenancy dates;
- supporting evidence.

### Project objective

Create one responsive application that allows a student tenant to manage accommodation information from move-in to move-out.

### Initial core scope

- authentication;
- accommodation profile;
- move-in condition evidence;
- maintenance tracking;
- tenancy dates/reminders;
- evidence report generation.

### Scope control

The first release focuses on student tenants.

Features such as landlord accounts, bill splitting, AI features and complex multi-property administration are not part of the initial MVP. These may only be considered if the core project is completed successfully.

---

## Stage 2 — Application Type

### Decision

Build a **responsive web application**.

### Reason

The system should be usable from both computers and phones.

A web application allows one codebase to serve both types of device. This is particularly useful because a student may:

- take property photographs from a phone;
- report maintenance from a phone;
- review records or generate reports from a laptop.

A Progressive Web App may be considered later as an extension.

---

## Stage 3 — Technology Selection

### Frontend

React with Vite.

### Backend

Node.js with Express.

### Planned database

PostgreSQL.

### Reasoning

This stack provides a clear separation between user interface, server logic and persistent data. It also supports REST APIs and is suitable for a responsive full-stack application.

---

## Stage 4 — Repository and Version Control

### Repository

`emami11/student-accommodation-manager`

### Branches

- `main` — stable branch.
- `develop` — active development branch.

The Mac development environment was synchronised with the remote `develop` branch before continuing work.

### Important Git issue encountered

A local `develop` branch was created from `main`, but a remote `origin/develop` branch already existed.

The first push was rejected as a non-fast-forward update.

The local branch was corrected using:

```bash
git fetch origin
git reset --hard origin/develop
git branch --set-upstream-to=origin/develop develop
```

This ensured the local branch matched the existing remote development history rather than overwriting it.

---

## Stage 5 — macOS Development Environment

### Git

Git was already available through Apple Git.

### Node.js and npm

Node.js and npm were not initially installed.

Homebrew was already installed, so Node.js was installed using:

```bash
brew install node
```

The environment was then verified using:

```bash
node -v
npm -v
```

This provided the runtime and package manager required by both the React/Vite frontend and Express backend.

---

## Stage 6 — Frontend Setup

The existing `client/` folder contained a React application scaffolded using Vite.

Dependencies were installed using:

```bash
cd client
npm install
```

The development server was started using:

```bash
npm run dev
```

Vite served the frontend locally at:

```text
http://localhost:5173
```

The successful display of the Vite page confirmed that the React development environment worked correctly on the Mac.

---

## Stage 7 — Backend Setup

The following project structure was added:

```text
server/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── package.json
└── server.js
```

The backend package was initialised with npm.

Dependencies installed:

- Express — HTTP server and routing framework.
- CORS — allows browser requests from the frontend development origin.
- dotenv — environment-variable configuration.
- Nodemon — automatically restarts the backend during development.

The backend scripts are:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

## Stage 8 — First Express API

The first Express server was created in `server/server.js`.

It currently:

1. creates an Express application;
2. enables CORS;
3. enables JSON request parsing;
4. defines a GET health-check endpoint;
5. starts the server.

The health endpoint returns:

```json
{
  "message": "Student Accommodation Manager API is running"
}
```

---

## Stage 9 — Port 5000 Conflict

### Problem

The backend initially attempted to run on port 5000.

The browser did not show the expected response.

A direct test was performed:

```bash
curl -i http://localhost:5000
```

The response included:

```text
HTTP/1.1 403 Forbidden
Server: AirTunes
```

### Diagnosis

Port 5000 was already occupied by Apple's AirPlay/AirTunes service.

The request therefore never reached Express.

### Solution

The fallback Express port was changed from 5000 to 5001.

The new endpoint was tested with:

```bash
curl -i http://localhost:5001
```

The response was:

```text
HTTP/1.1 200 OK
X-Powered-By: Express
```

followed by the expected JSON message.

### Lesson

When a server appears to start but HTTP requests behave unexpectedly, verify which process is actually responding on the port rather than assuming the application code is incorrect.

---

## Stage 10 — Frontend/Backend Integration

The React application was changed from the default Vite screen to a simple connectivity test.

`App.jsx` now:

- stores a status message using `useState`;
- sends an HTTP request using `fetch()`;
- runs the request inside `useEffect`;
- reads the JSON response;
- displays the backend's message.

The data flow is:

```text
React App
   |
   | GET http://localhost:5001
   v
Express API
   |
   | JSON
   v
React state update
   |
   v
Updated user interface
```

The browser successfully displayed:

```text
Student Accommodation Manager
Student Accommodation Manager API is running
```

This confirmed that the frontend and backend were communicating successfully.

---

## Stage 11 — Git Milestone

The completed backend setup and frontend/backend integration were committed on the `develop` branch.

Commit message:

```text
Set up Express backend and connect React frontend
```

The working tree was then verified as clean.

---

## Current State

At this point:

- the project is under Git version control;
- the Mac development environment is configured;
- the React frontend runs successfully;
- the Express backend runs successfully;
- frontend and backend communication has been verified;
- the application has a working full-stack foundation.

## Next Development Stage

The next planned stage is the application interface foundation:

1. install React Router;
2. create Login page;
3. create Register page;
4. create Dashboard shell;
5. create responsive navigation;
6. begin accommodation profile design.

Before implementing database-backed authentication, the interface and navigation structure will first be established and documented.
