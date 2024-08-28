# [Flashcard AI SaaS](https://flashcard-ai-saas.vercel.app/)
[Demo Video](https://www.youtube.com/watch?v=h3deLl9D_Ik)

![1](assets/1.png)

## Overview

Flashcard AI SaaS is a cutting-edge web application designed to enhance the learning experience by allowing users to create, manage, and review flashcards using advanced AI features. The platform leverages AI, specifically the Gemini LLM, to generate, customize, and analyze flashcards, making the study process more efficient and tailored to individual needs. Users can save their collections of flashcards securely with their registered accounts.

## Features

- **AI-Powered Flashcards**: Automatically generate flashcards based on user input and suggestions from the Gemini LLM, ensuring comprehensive coverage of study materials.
- **User Authentication**: Secure login and user management using Clerk, allowing users to save and access their flashcard collections.
- **Data Storage**: Flashcard collections are stored securely in Firebase Database with registered user account.
- **Payment Integration**: A payment system is planned with Stripe, though it is not yet implemented.

## Technologies

- **Frontend**: React, Next.js
- **Backend**: Node.js
- **AI Integration**: Gemini LLM 
- **Database**: Firebase Datastore
- **Deployment**: Netlify
- **CI/CD**: Netlify
- **Authentication**: Clerk
- **Payment**: Stripe (Planned)

## Installation

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/techbire/flashcard-saas.git
   cd flashcard-saas
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory and add the following environment variables:

   ```bash
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_public_key
   OPENAI_API_KEY=your_openai_api_key
   STRIPE_SECRET_KEY=your_secret
   ```

4. **Run the Application**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

   The application will be accessible at `http://localhost:3000`.

## Deployment

To deploy the application, follow these steps:

1. **Build the Application**

   ```bash
   npm run build
   ```

   or

   ```bash
   yarn build
   ```

2. **Deploy to Netlify**

   You can directly connect your GitHub repository and configure deployment settings in the Netlify dashboard.

