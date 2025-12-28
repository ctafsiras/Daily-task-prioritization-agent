import google.generativeai as genai
import os
import json
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")

# Configure Gemini with the key
genai.configure(api_key=api_key)

# Check if API key exists to avoid crashes
if not api_key:
    print("Error: GEMINI_API_KEY not found in .env file!")

# Configure Gemini AI
genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-1.5-flash')

def run_my_agent(raw_tasks_text: str):
    """
    Parses chaotic user input into structured JSON format using Gemini AI.
    """
    prompt = f"""
    You are a task prioritization agent. Parse the following tasks into a structured JSON list. 
    Format: [{{"title": "task name", "impact": "high/medium/low", "deadline": "YYYY-MM-DD", "effort": "min"}}]
    User Input: "{raw_tasks_text}"
    Return ONLY the raw JSON array. Do not include extra text.
    """
    
    try:
        response = model.generate_content(prompt)
        # Remove Markdown formatting (backticks) from AI response
        clean_json = response.text.replace('```json', '').replace('```', '').strip()
        structured_tasks = json.loads(clean_json)
        return structured_tasks
    except Exception as e:
        print(f"Agent Logic Error: {e}")
        return []