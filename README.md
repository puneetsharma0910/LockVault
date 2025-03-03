# LockVault - A Secure Password Manager

LockVault is a full-stack password manager built using **React, Node.js, Express, and MongoDB**. It allows users to **store, view, edit, and delete passwords securely** while persisting data in a MongoDB database.

## Features
- ✅ Add Passwords – Securely store website credentials.
- ✅ View Passwords – Toggle password visibility with an eye icon.
- ✅ Edit Passwords – Update saved credentials easily.
- ✅ Delete Passwords – Remove unwanted credentials.
- ✅ Copy to Clipboard – Click the copy icon to copy usernames and passwords.
- ✅ Persistent Storage – Uses MongoDB for storing credentials securely.

## Tech Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB

## Installation & Usage
```bash
# Clone the repository
git clone https://github.com/puneetsharma0910/lockvault.git
cd lockvault

# Install dependencies
cd client && npm install
cd ../server && npm install

# Set up environment variables
# Create a .env file in the server directory and add:
# MONGO_URI=your_mongodb_connection_string
# PORT=5000

# Run the backend
cd server
npm start

# Run the frontend
cd ../client
npm start

# The app will run on http://localhost:3000/
