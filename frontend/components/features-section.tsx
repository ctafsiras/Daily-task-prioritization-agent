import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Zap, Target, BarChart3, Bell, Shield } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Smart AI Prioritization",
    description:
      "Machine learning algorithms analyze your tasks and suggest optimal priorities based on deadlines, importance, and your work patterns.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Add, organize, and complete tasks in milliseconds with keyboard shortcuts and intelligent autocomplete.",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description:
      "Set and monitor daily, weekly, and monthly goals with visual progress tracking and achievement insights.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Understand your productivity patterns with detailed analytics and personalized recommendations.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Never miss a deadline with intelligent notifications that learn when you need them most.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your tasks are encrypted and private. We never share your data with third parties.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="container px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Everything you need to stay productive</h2>
          <p className="text-lg text-muted-foreground">Powerful features designed to help you accomplish more</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 bg-card transition-colors hover:border-primary/20">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
