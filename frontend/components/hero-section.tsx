import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="container px-4 py-20 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary">
          <Sparkles className="h-4 w-4" />
          <span className="font-medium">AI-Powered Task Intelligence</span>
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
          Prioritize Your Day with{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            AI Precision
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl">
          Smart task management that learns your workflow, prioritizes what matters, and helps you accomplish more every
          single day.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base">
            Start Prioritizing Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="text-base bg-transparent">
            Watch Demo
          </Button>
        </div>

        <div className="mt-16 grid gap-8 text-center sm:grid-cols-3">
          <div>
            <div className="mb-2 text-3xl font-bold text-primary">10x</div>
            <div className="text-sm text-muted-foreground">More productive</div>
          </div>
          <div>
            <div className="mb-2 text-3xl font-bold text-primary">2hrs</div>
            <div className="text-sm text-muted-foreground">Saved daily</div>
          </div>
          <div>
            <div className="mb-2 text-3xl font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground">Task completion</div>
          </div>
        </div>
      </div>
    </section>
  )
}
