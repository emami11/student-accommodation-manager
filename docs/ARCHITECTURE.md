# System Architecture

## 1. Overview

The Student Accommodation Manager is being developed as a responsive full-stack web application.

The application is split into two main parts:

1. a React frontend responsible for the user interface;
2. a Node.js/Express backend responsible for API logic and, later, database access.

A PostgreSQL database will be added when persistent application data is introduced.

## 2. Current Architecture

```text
User
 |
 | Browser
 v
React Frontend
http://localhost:5173
 |
 | HTTP / JSON
 v
Express Backend
http://localhost:5001
 |
 v
PostgreSQL Database
(planned)
```

## 3. Frontend

The frontend is stored in the `client/` directory.

Current key files:

- `src/main.jsx` — React entry point.
- `src/App.jsx` — current top-level application component.
- `src/App.css` — styles for the current application view.
- `src/index.css` — global styles.
- `vite.config.js` — Vite configuration.

### Current frontend behaviour

`App.jsx` uses React's `useState` and `useEffect` hooks.

- `useState` stores the message shown to the user.
- `useEffect` runs once when the component first loads.
- Inside the effect, the browser sends a `fetch()` request to the backend at `http://localhost:5001`.
- The backend returns JSON.
- The frontend reads `data.message` and updates the state.
- React automatically re-renders the component with the returned message.

This simple health check proves that the frontend and backend can communicate before more complex features are introduced.

## 4. Backend

The backend is stored in the `server/` directory.

Current key file:

- `server.js` — creates and starts the Express application.

Supporting directories have been created for future separation of concerns:

- `routes/` — API endpoint definitions.
- `controllers/` — request-handling/business logic.
- `models/` — data access and database models.
- `middleware/` — reusable request-processing logic such as authentication.
- `config/` — configuration such as database connections.

### Current middleware

```js
app.use(cors());
app.use(express.json());
```

`cors()` allows the React frontend running on a different local port to make requests to the Express backend.

`express.json()` allows the backend to read JSON request bodies. This will be needed later for forms such as registration, login, accommodation details and maintenance reports.

## 5. Health Endpoint

The current backend contains:

```js
app.get("/", (req, res) => {
  res.json({
    message: "Student Accommodation Manager API is running",
  });
});
```

This is a basic GET endpoint.

Its purpose at this stage is not to provide application functionality. It is used to confirm that:

- Express starts correctly;
- the browser can reach the backend;
- CORS is working;
- the frontend can parse the backend JSON response.

## 6. Development Ports

The Vite development server runs on:

```text
http://localhost:5173
```

The Express API runs on:

```text
http://localhost:5001
```

The backend originally used port 5000. Testing with `curl` returned:

```text
HTTP/1.1 403 Forbidden
Server: AirTunes
```

This showed that macOS AirPlay/AirTunes was already occupying port 5000. The backend was therefore moved to port 5001.

This is an example of environment-level debugging: the Express code was not the problem; the local operating system was already using the requested network port.

## 7. Planned Database Layer

PostgreSQL is planned for persistent data.

Initial entities are expected to include:

- User
- Accommodation
- Room
- Condition Record
- Condition Image
- Maintenance Issue
- Maintenance Image

The database will be designed before implementation using an Entity Relationship Diagram (ERD).

## 8. Planned Request Flow

A future maintenance-report request may work as follows:

```text
Student completes form
        |
        v
React component
        |
POST /api/maintenance
        |
        v
Express route
        |
        v
Controller validates data
        |
        v
Database model stores record
        |
        v
JSON response
        |
        v
React updates the interface
```

## 9. Why a Responsive Web Application?

A responsive web application was selected instead of separate desktop and mobile applications because:

- the same codebase can support desktop, tablet and phone users;
- students can upload evidence from a phone while still reviewing reports on a laptop;
- the scope remains realistic for an individual final-year project;
- a Progressive Web App can be explored later if time permits.

## 10. Architectural Principle

The project will avoid placing all logic in one file.

As features grow, code will be separated into reusable components, routes, controllers, models and middleware. This improves maintainability and makes the system easier to explain, test and extend.
