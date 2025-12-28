"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Plus, Clock, Zap, CheckCircle2, Circle, Sparkles } from "lucide-react"

interface Task {
  id: number
  title: string
  priority: "high" | "medium" | "low"
  completed: boolean
  estimatedTime: string
  aiScore: number
}

export function TaskDashboard() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Complete project proposal",
      priority: "high",
      completed: false,
      estimatedTime: "2h",
      aiScore: 95,
    },
    {
      id: 2,
      title: "Review team feedback",
      priority: "high",
      completed: false,
      estimatedTime: "45m",
      aiScore: 88,
    },
    {
      id: 3,
      title: "Update documentation",
      priority: "medium",
      completed: false,
      estimatedTime: "1h",
      aiScore: 72,
    },
    {
      id: 4,
      title: "Schedule team meeting",
      priority: "low",
      completed: true,
      estimatedTime: "15m",
      aiScore: 45,
    },
  ])

  const [newTask, setNewTask] = useState("")

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now(),
        title: newTask,
        priority: "medium",
        completed: false,
        estimatedTime: "30m",
        aiScore: Math.floor(Math.random() * 40) + 50,
      }
      setTasks([task, ...tasks])
      setNewTask("")
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive border-destructive/20"
      case "medium":
        return "bg-accent/10 text-accent border-accent/20"
      case "low":
        return "bg-muted text-muted-foreground border-border"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section id="dashboard" className="container px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Your Intelligent Task Dashboard</h2>
          <p className="text-muted-foreground">AI-powered prioritization that adapts to your workflow</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Task List */}
          <Card className="lg:col-span-2 border-border/50 bg-card">
            <CardHeader>
              <CardTitle>Today's Tasks</CardTitle>
              <CardDescription>Sorted by AI priority score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex gap-2">
                <Input
                  placeholder="Add a new task..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addTask()}
                  className="bg-background"
                />
                <Button onClick={addTask} size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="group flex items-start gap-3 rounded-lg border border-border/50 bg-background p-4 transition-colors hover:border-border"
                  >
                    <button
                      onClick={() => toggleTask(task.id)}
                      className="mt-0.5 text-muted-foreground transition-colors hover:text-primary"
                    >
                      {task.completed ? (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      ) : (
                        <Circle className="h-5 w-5" />
                      )}
                    </button>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <span
                          className={`font-medium ${
                            task.completed ? "text-muted-foreground line-through" : "text-foreground"
                          }`}
                        >
                          {task.title}
                        </span>
                        <Badge variant="outline" className={`shrink-0 ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{task.estimatedTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Sparkles className="h-3.5 w-3.5 text-primary" />
                          <span className="font-medium text-primary">{task.aiScore}% priority</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Daily Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Completed</span>
                    <span className="font-semibold">
                      {tasks.filter((t) => t.completed).length}/{tasks.length}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: `${(tasks.filter((t) => t.completed).length / tasks.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 p-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">Productivity</div>
                    <div className="text-xs text-muted-foreground">On track for today</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardHeader>
                <CardTitle className="text-lg">AI Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You're most productive in the morning. Consider scheduling high-priority tasks before noon.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
