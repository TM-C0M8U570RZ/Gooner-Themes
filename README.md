# DO NOT USE THIS YET!  I HAVE NOT YET FINISHED THE INITIAL VERSION OF GOONER THEMES!  


# 🎮 Gooner Themes

**A platform for uploading, sharing, and downloading custom themes for Nintendo 3DS, 2DS, N3DS, and N2DS systems with CFW or Homebrew access.**  

---

## 🌟 Features

- **Upload & Share**: Users can upload custom themes for Nintendo devices.  
- **Download with QR Codes** *(Coming Soon)*: Users can scan QR codes for direct theme downloads.  
- **Tag & Search System**: Find themes easily with custom user-generated tags.  
- **User Profiles**: View user-uploaded themes, categorized by custom sections.  
- **Thumbs Up/Down Ratings**: No like button—only upvotes, downvotes, and download stats.  
- **Moderation & Approvals**: Admins manually approve theme uploads for quality control.  
- **Authentication**: Secure login with email/password and social logins.  

---

## 🚀 Tech Stack

- **Frontend**: [Next.js 15](https://nextjs.org/) (App Router, TypeScript)  
- **Backend**: [FastAPI (Python)](https://fastapi.tiangolo.com/) with MongoDB (see below)  
- **Styling**: TailwindCSS  
- **Hosting**: Vercel  
- **QR Code Generation**: *(To be implemented with a built-in solution.)*  

---

## 🖥️ Project Structure

- `src/` — Frontend (Next.js)  
- `backend/` — Backend API (FastAPI, Python, MongoDB)  

---

## 📦 Backend API (FastAPI)

The backend is a FastAPI application (Python 3.13+) with MongoDB integration. It provides all authentication, user, and theme management endpoints.

- **How to run the backend locally:**
  1. `cd backend`
  2. Install dependencies: `uv sync` or `pip install -r requirements.txt`
  3. Copy and edit environment variables: `cp env.example .env`
  4. Run: `python index.py`
  5. API docs: [http://localhost:8000/docs](http://localhost:8000/docs)

- **API details and endpoints:** See [`backend/README.md`](backend/README.md)

---

## 📸 Screenshots

![Switch Themes Banner](https://github.com/anasahmed07/Switch-Theme/blob/main/public/banner.png)

---

## 📦 Installation & Setup

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/yourusername/switch-theme.git
   cd switch-themes
   ```
2. **Install Dependencies**  
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**  
   Create a `.env.local` file and add:  
   ```plaintext
   NEXTAUTH_URL=http://localhost:3000
   DATABASE_URL=mongodb+srv://your-db-uri
   ```
4. **Run the Development Server**  
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Contribution Guidelines

1. **Fork the repo** and create a new branch.  
2. **Make changes**, ensuring your code follows the project's style.  
3. **Submit a pull request** with a clear description.  

---

## 🔒 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 📢 Contact & Community

