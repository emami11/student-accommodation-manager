# Student Accommodation Manager

A responsive web application designed to help student tenants manage their accommodation from move-in to move-out.

The system is intended to give students one organised place to record the condition of a property, store evidence, track maintenance issues, manage tenancy information, and eventually generate a structured evidence report that may be useful during accommodation disputes.

## Project Purpose

Student tenants often keep important accommodation information across different places such as photographs, emails, messages, notes, and tenancy documents. This makes it difficult to maintain a clear history of the property and of any issues reported during the tenancy.

The Student Accommodation Manager aims to centralise this information and provide a structured record of the tenancy.

## Intended Users

The primary user is a student tenant living in rented accommodation.

The first version of the project focuses on the student tenant rather than landlords or letting agents. Additional user roles may be considered later if the core system is completed successfully.

## Planned Core Features

- User registration, login, and logout
- Accommodation profile management
- Move-in condition records
- Photo evidence uploads
- Maintenance issue reporting
- Maintenance status tracking
- Important tenancy dates and reminders
- Activity timeline
- PDF evidence report generation
- Responsive desktop and mobile interface

## Technology Stack

### Frontend
- React
- Vite
- JavaScript
- HTML
- CSS

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL (planned)

### Other Technologies
- REST API
- Git and GitHub
- CORS
- dotenv
- Nodemon
- PDF report generation (planned)
- File/image storage (planned)

## Current Architecture

```text
React Frontend
    |
    | HTTP request
    v
Express REST API
    |
    v
PostgreSQL Database (planned)
```

During local development:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5001`

Port 5001 is used for the backend because port 5000 on the development Mac was occupied by Apple's AirTunes/AirPlay service.

## Current Development Status

### Completed
- GitHub repository created
- `main` and `develop` branches established
- React frontend scaffolded with Vite
- Node.js and npm configured on macOS
- Express backend created
- CORS and JSON middleware configured
- Development server configured with Nodemon
- Backend health endpoint created
- React frontend successfully connected to the Express backend
- Frontend/backend connection verified locally

### Next
- Add React routing
- Create Login page
- Create Register page
- Create Dashboard shell
- Design accommodation profile flow
- Design database schema
- Connect PostgreSQL
- Implement authentication

## Repository Structure

```text
student-accommodation-manager/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       └── main.jsx
├── server/                 # Node.js / Express backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
├── database/               # Planned database scripts/schema
├── docs/                   # Project documentation
│   ├── ARCHITECTURE.md
│   ├── DEVELOPMENT_LOG.md
│   ├── SETUP.md
│   ├── diagrams/
│   ├── testing/
│   └── wireframes/
└── README.md
```

## Branch Strategy

- `main` — stable project history
- `develop` — active development branch

Feature branches may be introduced for larger features later, for example:

- `feature/authentication`
- `feature/accommodation-profile`
- `feature/condition-records`
- `feature/maintenance`
- `feature/pdf-report`

## Development Approach

The project is being developed incrementally.

### Phase 1 — Foundation
Project setup, repository structure, frontend/backend communication, architecture and documentation.

### Phase 2 — Authentication
Registration, login, password security and protected routes.

### Phase 3 — Accommodation Management
Create, edit and display a student's accommodation profile.

### Phase 4 — Move-in Evidence
Rooms, condition records, descriptions and image uploads.

### Phase 5 — Maintenance Tracking
Create issues, update status, attach evidence and maintain history.

### Phase 6 — Dashboard and Reminders
Summaries, upcoming dates, unresolved issues and recent activity.

### Phase 7 — Evidence Reporting
Generate an organised PDF report from stored tenancy records.

### Phase 8 — Testing and Evaluation
Functional testing, usability testing and final refinement.

## Documentation

Detailed documentation is maintained in the `docs/` directory.

- [Architecture](docs/ARCHITECTURE.md)
- [Development Log](docs/DEVELOPMENT_LOG.md)
- [Local Setup Guide](docs/SETUP.md)

The documentation is intended to explain not only what was built, but why each technical decision was made and how the major parts of the system work together.

## Project Status

Development started: November 2026

Current stage: Full-stack foundation complete; preparing application routing, interface structure and authentication.
