# Shopping Cart Application

## Tech Stack
- Backend: Node.js, Express, MongoDB, Mongoose
- Auth: JWT (Single-device login enforced)
- Frontend: React (Vite), Tailwind CSS

## Features
- User Signup & Login
- Single active session per user
- Item listing
- Add items to cart
- Checkout cart to order
- View cart and order history

## Single Device Login
- JWT token is stored in the user record
- Login blocked if a token already exists
- Token cleared on logout

## How to Run

### Backend
cd backend  
npm install  
npm run dev  

### Frontend
cd frontend  
npm install  
npm run dev  

## Notes
- Inventory management intentionally skipped as per assignment
- UI kept minimal and functional
