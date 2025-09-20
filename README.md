# Charitables.org - Full-Stack Charity Website

🌐 **[Live Demo](https://charitables-org.vercel.app)** | Built with T3 Stack

## Overview
Modern charity website for Indian non-profits with donation management, student applications, and contact system. Features responsive design, type-safe APIs, and database integration.

## Tech Stack
- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Backend**: tRPC, Prisma ORM, SQLite
- **Deployment**: Vercel

## Features
- 📱 5 responsive pages (Home, About, Application, Contact, Donate)
- 💰 Donation system with bank transfer integration
- 📝 Contact form with database storage
- 🎓 Student application system with Google Forms
- 🔒 End-to-end type safety with TypeScript
- 🇮🇳 Localized for Indian context (₹ currency, Indian banking)

## Quick Start
```bash
git clone https://github.com/Harsh-IITMandi/charitables-org.git
cd charitables-org
npm install
npx prisma db push
npm run dev
