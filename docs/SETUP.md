# Local Development Setup

This guide explains how to run the Student Accommodation Manager locally on macOS.

## Prerequisites

The following tools are required:

- Git
- Node.js
- npm

PostgreSQL will be added later when database development begins.

## 1. Clone the Repository

```bash
cd ~/Documents
git clone https://github.com/emami11/student-accommodation-manager.git
cd student-accommodation-manager
```

## 2. Switch to the Development Branch

```bash
git fetch origin
git switch develop
```

Check:

```bash
git status
```

The expected branch is `develop`.

## 3. Install Frontend Dependencies

```bash
cd client
npm install
```

## 4. Start the Frontend

From the `client/` directory:

```bash
npm run dev
```

The Vite development server should provide a local URL, normally:

```text
http://localhost:5173
```

## 5. Install Backend Dependencies

Open another terminal:

```bash
cd ~/Documents/student-accommodation-manager/server
npm install
```

## 6. Start the Backend

```bash
npm run dev
```

Nodemon should start `server.js`.

Expected message:

```text
Server running on port 5001
```

## 7. Test the Backend Directly

```bash
curl -i http://localhost:5001
```

Expected JSON:

```json
{
  "message": "Student Accommodation Manager API is running"
}
```

## 8. Test Full-Stack Communication

With both servers running, open:

```text
http://localhost:5173
```

The frontend should display the message returned by the Express backend.

## Why Port 5001?

Port 5000 is commonly used by Apple's AirPlay/AirTunes service on macOS.

During development, a request to port 5000 returned:

```text
HTTP/1.1 403 Forbidden
Server: AirTunes
```

For this reason, the Express backend uses port 5001 locally.

## Useful Commands

Check current Git state:

```bash
git status
```

See local branches:

```bash
git branch -vv
```

Start frontend:

```bash
cd client
npm run dev
```

Start backend:

```bash
cd server
npm run dev
```

Stop either development server:

```text
Control + C
```

## Current Local Services

| Service | URL |
| --- | --- |
| React frontend | http://localhost:5173 |
| Express backend | http://localhost:5001 |

## Planned Future Setup

Additional setup instructions will be added when the following are introduced:

- PostgreSQL
- environment variables
- authentication secrets
- file/image storage
- PDF generation
- deployment
