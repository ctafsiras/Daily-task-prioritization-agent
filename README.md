# 🚀 TaskFlow – AI Task Prioritization Agent

TaskFlow is a modern, intelligent task management application with **AI-powered task prioritization**, built using **Next.js (Frontend)** and **FastAPI (Backend)**. This project demonstrates a clean full-stack architecture, modern UI, and scalable backend design — suitable for real-world production use.

---

## ✨ Features

- 🎨 Beautiful modern UI (dark theme, smooth animations)
- ✅ Task management (add, complete, prioritize tasks)
- 🤖 AI-powered task prioritization (logic ready)
- 📱 Fully responsive design
- ⚡ High performance frontend & backend
- 🌐 API-based architecture (frontend ↔ backend)

---

## 🧱 Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide Icons

### Backend
- FastAPI
- Python 3.10+
- Uvicorn
- Pydantic
- CORS Middleware

---

## 📁 Project Structure

```
Daily-task-prioritization-agent/
│
├── frontend/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   ├── header.tsx
│   │   ├── hero-section.tsx
│   │   ├── task-dashboard.tsx
│   │   └── features-section.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── tailwind.config.ts
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── routers/
│
└── README.md
```

---

## ⚙️ Local Development Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/mahiamOmO/Daily-task-prioritization-agent.git
cd Daily-task-prioritization-agent
```

---

## 🔵 Frontend Setup (Next.js)

### 2️⃣ Go to frontend folder

```bash
cd frontend
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Run frontend development server

```bash
npm run dev
```

**Frontend will run at:**
```
http://localhost:3000
```

---

## 🟢 Backend Setup (FastAPI)

### 5️⃣ Go to backend folder

```bash
cd ../backend
```

### 6️⃣ Create virtual environment (recommended)

```bash
python -m venv venv
```

**Activate the environment:**

**Windows:**
```bash
venv\Scripts\activate
```

**macOS / Linux:**
```bash
source venv/bin/activate
```

### 7️⃣ Install backend dependencies

```bash
pip install -r requirements.txt
```

### 8️⃣ Run FastAPI server

```bash
uvicorn main:app --reload
```

**Backend will run at:**
```
http://127.0.0.1:8000
```

**API Documentation:**
- Swagger UI → http://127.0.0.1:8000/docs
- ReDoc → http://127.0.0.1:8000/redoc

---

## 🔗 Frontend ↔ Backend Integration

CORS is enabled in the backend to allow frontend requests:

```python
allow_origins=["*"]
```

**API Base URL (used in frontend):**
```
http://127.0.0.1:8000
```

---

## 🚀 Deployment

### Deploy Frontend (Vercel)
1. Push your code to GitHub
2. Import project in Vercel
3. Set root directory to `frontend/`
4. Deploy

### Deploy Backend (Railway/Render)
1. Connect your GitHub repository
2. Set root directory to `backend/`
3. Add environment variables if needed
4. Deploy

**Deployed by:** Mahia Momo

---

## 📝 License

MIT License

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📧 Contact

**Email:** mahiamomo12@gmail.com  
**LinkedIn:** [linkedin.com/in/mahiamomo12](https://linkedin.com/in/mahiamomo12)

For any questions or suggestions, please open an issue on GitHub or reach out via email.

