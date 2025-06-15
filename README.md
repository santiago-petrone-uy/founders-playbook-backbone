# The Founder's Playbook - Backbone Project

> A professional boilerplate for rapidly launching new MVPs, built with Next.js, Tailwind CSS, and `shadcn/ui`.

---

## Overview

This project is a modern, professional starter kit that operationalizes the **Founder's Playbook** methodology. It leverages an automated setup via `shadcn/ui` to ensure a robust, scalable, and maintainable foundation, allowing for rapid feature development.

## Tech Stack

- **Framework:** Next.js (with App Router)
- **Styling:** Tailwind CSS with a pre-configured design system via `shadcn/ui`.
- **UI Architecture:** "Lean UI Foundation" (`cva` for variants, atomic folder structure).
- **Database & Auth:** Supabase (Postgres, Auth via `@supabase/ssr`)
- **Deployment:** Vercel

## Getting Started

Follow these instructions to get a copy of the project running on your local machine for development and testing purposes.

### 1. Prerequisites

- Node.js (v20 or later)
- PNPM package manager (`npm install -g pnpm`)
- A Supabase account and project for database and authentication.

### 2. Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)[YOUR_GITHUB_USERNAME]/playbook-app.git
    ```

2.  **Navigate into the project directory:**
    ```bash
    cd playbook-app
    ```

3.  **Install dependencies:**
    ```bash
    pnpm install
    ```

4.  **Set up environment variables:**
    - Create a local environment file by copying the example:
      ```bash
      cp .env.example .env.local
      ```
    - Open the new `.env.local` file. You will need to populate it with your own secret keys from your Supabase project dashboard (and any other services like Stripe or PostHog). The `.env.example` file lists all required keys.

### 3. Running the Development Server

Once setup is complete, you can run the application:

```bash
pnpm dev