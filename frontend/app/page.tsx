import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TaskDashboard } from "@/components/task-dashboard"
import { FeaturesSection } from "@/components/features-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TaskDashboard />
      <FeaturesSection />
    </main>
  )
}
