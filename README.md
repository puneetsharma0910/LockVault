# 🔐 LockVault - Your Secure Password Manager  

LockVault is a **modern and secure password manager** built using **React, Node.js, Express, and MongoDB**. It allows users to **store, view, edit, and delete passwords securely**, ensuring your credentials are safe and easily accessible.  

---

## 🚀 Features  
✔️ **Add Passwords** – Securely store website credentials.  
✔️ **View Passwords** – Toggle password visibility with an eye icon.  
✔️ **Edit Passwords** – Modify saved credentials easily.  
✔️ **Delete Passwords** – Remove unwanted credentials.  
✔️ **Copy to Clipboard** – Click the copy icon to copy usernames and passwords.  
✔️ **Persistent Storage** – Uses MongoDB for secure data storage.  

---

## 🛠️ Tech Stack  
**Frontend:** React, Tailwind CSS 🌿  
**Backend:** Node.js, Express.js, MongoDB 🚀  

---

## 📥 Installation & Setup  
```bash
# 1️⃣ Clone the repository
git clone https://github.com/puneetsharma0910/lockvault.git
cd lockvault

# 2️⃣ Install dependencies for both frontend & backend
cd client && npm install
cd ../server && npm install

# 3️⃣ Set up environment variables
# Create a .env file in the server directory and add:
MONGO_URI=your_mongodb_connection_string
PORT=5000

# 4️⃣ Start the backend
cd server
npm start

# 5️⃣ Start the frontend
cd ../client
npm start

# 🎉 The app will be live at: http://localhost:3000/
