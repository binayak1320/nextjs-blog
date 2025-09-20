# Simple Blog Platform

A small blogging platform built with **Next.js 15**, **TypeScript**, and **Prisma ORM**, allowing users to view, search, and filter posts. The platform demonstrates modern Next.js features, API integration, and component structuring.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Choices & Implementation Details](#choices--implementation-details)
- [Future Improvements](#future-improvements)

---

## Project Overview

This project is a blogging platform where users can:

- View a list of posts on the home page.
- Search posts by title or content using a search bar on the home page.
- Create new posts via an admin interface.
- View post details (including author, comments, and likes).

It showcases Next.js 15 features, TypeScript usage, and modern frontend/backend integration.

---

## Features

- **Home Page (`/`)**

  - List of posts with pagination.
  - Integrated search bar to filter posts by title or content.

- **Post Details Page (`/post/[id]`)**

  - Display full post content, author info, and engagement stats (comments and likes).

- **Admin Page (`/admin`)**

  - Form to create new posts (title, content, publish status).

- **Search Functionality**

  - Filter posts in real-time using title and content.
  - Implemented via Prisma `findMany` query with case-insensitive matching.

- **API Integration**

  - `/api/posts` endpoint for fetching posts with optional search queries.
  - Prisma ORM used to interact with PostgreSQL database.

- **UI & Components**
  - ShadCN UI components used for inputs, buttons, and cards.
  - Component-based structure for reusability and maintainability.

---

## Tech Stack

| Layer    | Technology                                          | Purpose                                    |
| -------- | --------------------------------------------------- | ------------------------------------------ |
| Frontend | Next.js 15 (App Router)                             | Routing, Server/Client Components, SSR/SSG |
| Styling  | Tailwind CSS, ShadCN UI                             | Responsive and reusable UI components      |
| Backend  | Next.js API Routes                                  | Server Actions, data fetching              |
| ORM      | Prisma                                              | Database interaction with PostgreSQL       |
| Database | PostgreSQL (managed via [Neon](https://neon.tech/)) | Persistent storage for posts and authors   |
| Language | TypeScript                                          | Type safety and maintainable code          |

> **Note:** Neon is used for PostgreSQL hosting and provides a web dashboard for database visualization and management.

---

## Project Structure

```text
/app
  /api
    /posts
      route.ts         # API for fetching posts (with search & pagination)
  /post
    [id]/page.tsx       # Post details page
  /admin/page.tsx       # Create post page
  /page.tsx             # Home page with search and post listing
/components
  PostCard.tsx          # Post card component
  PostSearch.tsx        # Search input component
/lib
  prisma.ts             # Prisma client instance
```

---

## Getting Started

### Prerequisites

- Node.js v20+
- PostgreSQL database(Hosted on [Neon](https://neon.tech/))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/binayak1320/nextjs-blog
   cd snextjs-blog
   npm install
   npm run dev
   ```
