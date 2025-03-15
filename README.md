# Hela Lanka Ads

A modern advertising platform for Sri Lanka, built with Next.js, Firebase, and MongoDB.

## Environment Variables

This project uses environment variables to store sensitive information. Before running the application, you need to set up these variables:

1. Copy the `.env.example` file to a new file named `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in the values in the `.env` file with your actual credentials:
   - MongoDB connection string
   - Firebase configuration

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- User authentication with Firebase
- Data storage with MongoDB
- Modern UI with Tailwind CSS
- Responsive design for all devices

## Project Structure

- `/src/app` - Next.js app directory
  - `/components` - Reusable UI components
  - `/context` - React context providers
  - `/firebase` - Firebase configuration
  - `/lib` - Utility functions and database connections
  - `/models` - MongoDB models
  - `/login` - Login page
  - `/dashboard` - User dashboard

## Security

This project follows security best practices:
- Sensitive information is stored in environment variables
- Authentication is handled by Firebase
- Database credentials are never exposed to the client

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
