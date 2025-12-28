import google.generativeai as genai
import os
import json
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("GEMINI_API_KEY not found in .env file")

# Configure Gemini
genai.configure(api_key=api_key)
model = genai.GenerativeModel("gemini-1.5-flash")


def run_my_agent(raw_tasks_text: str):
    """
    Converts messy user input into structured tasks
    with proper HIGH / MEDIUM / LOW prioritization.
    """

    prompt = f"""
You are an intelligent task prioritization agent.

STEP 1: Split the user input into clear, individual tasks.

STEP 2: Assign impact STRICTLY using these rules:
- HIGH: urgent, critical, production issues, deadlines today
- MEDIUM: important work, meetings, normal tasks
- LOW: personal, optional, flexible timing

STEP 3: Assign effort:
- min: ≤15 minutes
- medium: normal duration
- high: complex or long tasks

Deadline rules:
- If no clear calendar date is mentioned, set deadline as null
- Do NOT guess dates

Output format (STRICT JSON ONLY):
[
  {{
    "title": "short task title",
    "impact": "HIGH | MEDIUM | LOW",
    "deadline": null,
    "effort": "min | medium | high"
  }}
]

User Input:
"{raw_tasks_text}"

Return ONLY valid JSON. No markdown. No explanation.
"""

    try:
        response = model.generate_content(prompt)

        # Clean response (remove accidental formatting)
        clean_json = response.text.strip().replace("```json", "").replace("```", "")

        tasks = json.loads(clean_json)

        # Backend safety validation
        VALID_IMPACT = ["HIGH", "MEDIUM", "LOW"]
        VALID_EFFORT = ["min", "medium", "high"]

        for task in tasks:
            if task.get("impact") not in VALID_IMPACT:
                task["impact"] = "MEDIUM"

            if task.get("effort") not in VALID_EFFORT:
                task["effort"] = "medium"

            if task.get("deadline") in ["", "None"]:
                task["deadline"] = None

        return tasks

    except Exception as e:
        print("Agent Logic Error:", e)
        return []
