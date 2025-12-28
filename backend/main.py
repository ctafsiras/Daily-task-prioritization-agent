from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

# ✅ CORS (frontend access allow)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class TaskList(BaseModel):
    user_id: str
    raw_tasks: str

# ✅ TEMP SAFE AGENT (no AI hang)
def run_my_agent(raw_tasks: str):
    tasks = raw_tasks.split(",")
    result = []

    for t in tasks:
        result.append({
            "title": t.strip(),
            "effort": "medium",
            "impact": "high",
            "deadline": None
        })

    return result


@app.post("/api/prioritize")
async def prioritize_tasks(data: TaskList):
    print("🔥 REQUEST RECEIVED")
    print("📥 INPUT:", data.raw_tasks)

    try:
        result = run_my_agent(data.raw_tasks)
        print("✅ RESPONSE SENT")

        return {
            "prioritized_tasks": result
        }

    except Exception as e:
        print("❌ ERROR:", e)
        return {
            "prioritized_tasks": []
        }


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)
