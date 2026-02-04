# AI Fullstack Chat App (Production Template)

A minimal, portfolio-ready AI web app: **React (Vite)** frontend + **FastAPI** backend + **OpenAI**.

## Tech Stack
- Frontend: React + Vite
- Backend: Python + FastAPI
- AI: OpenAI API
- Container: Docker / docker-compose

## Features
- Chat endpoint: `/chat`
- Simple chat UI
- Clean folder structure (easy to extend with auth, DB, RAG)

## Run with Docker (recommended)
1. Copy environment file:
   - `backend/.env.example` -> `backend/.env`
2. Put your OpenAI key in `backend/.env`
3. Run:
   ```bash
   docker-compose up --build
   ```
4. Open:
   - Frontend: http://localhost:5173
   - Backend:  http://localhost:8000/health

## Run without Docker
### Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --port 8000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Next Upgrades (good for interview)
- JWT auth (register/login)
- Store chat history (PostgreSQL)
- RAG: upload docs + Q&A
- Rate limiting + logging
