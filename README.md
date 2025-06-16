# The Founder's Playbook - Backbone Project

> A professional boilerplate for rapidly launching new MVPs, built with Next.js, Tailwind CSS, and `shadcn/ui`.

---

## Overview

This project is a modern, professional starter kit for rapidly launching new Minimum Viable Products (MVPs). It was built using the **Founder's Playbook** methodology, leveraging an automated setup via `shadcn/ui` to ensure a robust, scalable, and maintainable foundation.

## Tech Stack

- **Framework:** Next.js (with App Router)
- **Styling:** Tailwind CSS with a pre-configured design system via `shadcn/ui`.
- **UI Architecture:** "Lean UI Foundation" (`cva` for variants, atomic folder structure).
- **Database & Auth:** Supabase (Postgres, Auth via `@supabase/ssr`)
- **Deployment:** Vercel

## Getting Started

Follow these instructions to get a copy of the project running on your local machine.

### 1. Prerequisites

- **Node.js:** Ensure you have Node.js (v20 or later) installed on your system.
- **PNPM:** This project uses PNPM as its package manager. If you don't have it, install it globally by running: `npm install -g pnpm`
- **Supabase Account:** You will need a free Supabase account and a new project to handle the database and authentication.

### 2. Installation & Setup

1.  **Clone the Repository**
    *This command copies the project files from GitHub to your local machine.*
    ```bash
    git clone [https://github.com/](https://github.com/)[YOUR_GITHUB_USERNAME]/[YOUR_REPO_NAME].git
    ```

2.  **Navigate into the Project Directory**
    *This command moves your terminal's focus into the project folder.*
    ```bash
    cd [YOUR_REPO_NAME]
    ```

3.  **Install Dependencies**
    *This command downloads all the necessary code libraries the project depends on.*
    ```bash
    pnpm install
    ```

4.  **Set Up Environment Variables**
    *This is the most critical setup step. These variables are your project's secret keys.*
    - First, create your local environment file by copying the example file:
      ```bash
      cp .env.example .env.local
      ```
    - Next, open the new `.env.local` file in your code editor. You must populate it with your own secret keys from your Supabase project dashboard and any other services. The `.env.example` file lists all the keys you need to provide.

### 3. Running the Development Server

*This command starts the local web server so you can see your application in a browser.*
```bash
pnpm dev
```

Open http://localhost:3000/ with your browser to see the result.