Here’s a detailed and professional documentation for your house rental project:

---

# House Rental Platform Documentation

## Overview

The **House Rental Platform** is a modern, responsive, and user-friendly web application for renting houses. The platform serves two primary user groups: tenants (users looking to rent properties) and property owners (users managing rental listings). The goal is to provide an efficient and enjoyable experience for both groups, using a robust, scalable, and maintainable technology stack.

---

## Technology Stack

- **Frontend:** Next.js  
  - Server-side rendering (SSR) for fast page loads and SEO.  
  - Dynamic routing for scalable and modular page development.  

- **Backend:** Nest.js  
  - Modular architecture with TypeScript for clean and scalable APIs.  
  - RESTful APIs for seamless communication between frontend and database.

- **Styling & UI Frameworks:**  
  - **Tailwind CSS:** Utility-first styling for rapid development and responsive design.  
  - **Flowbite:** Prebuilt UI components to accelerate development.  
  - **TanStack:** Advanced tools like React Query for state and data management.

- **Database:** PostgreSQL  
  - A relational database for reliable and structured data storage.

---

## Project Features

### General Features
1. **Responsive Design:** Fully responsive and mobile-friendly UI.
2. **Authentication:** Secure login and registration system with JWT-based authentication.
3. **Search and Filtering:** Advanced search options with filters for price, location, property type, etc.
4. **Booking System:** End-to-end booking and payment system for tenants.
5. **Dashboard:** Separate dashboards for tenants, property owners, and administrators.

---

## Components and Pages

### 1. **Public Pages**
#### 1.1. Home Page
- **Hero Section:** Prominent search bar with location-based filtering.
- **Featured Properties:** Grid or carousel showcasing popular properties.
- **Testimonials:** Display user reviews or success stories.
- **Footer:** Links to About, Contact, FAQ, Terms, and Privacy Policy.

#### 1.2. Search/Listing Page
- **Search Filters:** Location, price, property type, and availability.
- **Grid/List View:** Display search results with property details (image, price, description).
- **Map Integration:** Optional interactive map for property locations.

#### 1.3. Property Detail Page
- **Image Gallery:** Carousel or grid for property photos.
- **Description:** Comprehensive details about the property.
- **Owner Info:** Contact or messaging option for property inquiries.
- **Booking Section:** Availability calendar and booking form.
- **Reviews & Ratings:** Display user feedback for the property.

#### 1.4. Authentication Pages
- **Login Page:** Email/password login and social media login options.
- **Signup Page:** Form for creating an account with email verification.
- **Password Recovery:** Reset password functionality.

---

### 2. **Tenant Dashboard**
- **My Bookings:** List of current and past bookings with booking details.
- **Saved Properties:** List of bookmarked properties for quick access.
- **Profile Settings:** Manage personal details and preferences.
- **Notifications:** Updates on booking confirmations and property alerts.

---

### 3. **Owner Dashboard**
- **Property Management:**  
  - Create, update, and delete property listings.  
  - Upload property images and set pricing.  
- **Booking Requests:**  
  - View tenant inquiries and respond to booking requests.  
- **Analytics Dashboard:**  
  - Insights into property views, inquiries, and booking trends.

---

### 4. **Admin Panel**
- **User Management:**  
  - View and moderate tenant and owner accounts.  
- **Property Moderation:**  
  - Approve or flag property listings.  
- **Reports and Analytics:**  
  - Site-wide metrics on usage, listings, and bookings.  
- **Content Management:**  
  - Manage static pages (FAQ, Terms & Conditions, etc.).

---

## Project Setup

### Monorepo Structure
The project uses a monorepo to organize shared resources and streamline development:
```
/apps
  /frontend - Next.js project
  /backend - Nest.js project
/libs
  /shared - Shared types, interfaces, and utilities
```

### Installation Steps

#### Prerequisites
1. Node.js (v18 or higher)
2. PostgreSQL installed and running
3. A code editor (e.g., VSCode)

#### Frontend Setup
1. Initialize the Next.js app:
   ```bash
   npx create-next-app@latest frontend --typescript
   ```
2. Install dependencies:
   ```bash
   npm install tailwindcss flowbite tanstack-query
   ```
3. Configure Tailwind CSS:
   - Create `tailwind.config.js` and include Flowbite:
     ```javascript
     module.exports = {
       content: [
         "./node_modules/flowbite/**/*.js",
         "./pages/**/*.tsx",
         "./components/**/*.tsx"
       ],
       theme: {
         extend: {},
       },
       plugins: [require('flowbite/plugin')],
     }
     ```
4. Start the development server:
   ```bash
   npm run dev
   ```

#### Backend Setup
1. Create a new Nest.js project:
   ```bash
   nest new backend
   ```
2. Install dependencies:
   ```bash
   npm install @nestjs/typeorm typeorm pg
   ```
3. Configure database connection in `app.module.ts`:
   ```typescript
   TypeOrmModule.forRoot({
     type: 'postgres',
     host: 'localhost',
     port: 5432,
     username: 'your_username',
     password: 'your_password',
     database: 'house_rental',
     entities: [],
     synchronize: true,
   });
   ```
4. Run the Nest.js server:
   ```bash
   npm run start:dev
   ```

---

## User Stories and Tickets

### Epic 1: User Management
1. **User Registration**
   - As a user, I want to register an account so that I can log in and use the platform.
   - Tickets:
     - Create a registration form (Frontend)
     - Develop registration API (Backend)
     - Write unit tests (Backend)

2. **User Login**
   - As a user, I want to log in securely to manage my bookings and properties.

---

### Epic 2: Property Listings
1. **Browse Properties**
   - As a user, I want to search and filter properties by price and location.
2. **Property Detail View**
   - As a user, I want to see detailed information about a property.

---

### Epic 3: Booking System
1. **Book a Property**
   - As a tenant, I want to book a property and receive a confirmation.

---

### Epic 4: Owner Dashboard
1. **Manage Listings**
   - As a property owner, I want to create and update property listings.
2. **Booking Requests**
   - As an owner, I want to manage booking inquiries.

---

## Labels
- **frontend**
- **backend**
- **documentation**
- **blocker**
- **feature**
- **enhancement**

---

## Development Workflow

1. Use a Git workflow with feature branches and pull requests.
2. Assign labels to tickets for clear tracking.
3. Use tools like Trello or Jira for sprint planning.
