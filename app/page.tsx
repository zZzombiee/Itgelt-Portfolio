import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Your
          <span className="text-primary"> Next.js</span> Setup
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A complete Next.js application with TypeScript, Tailwind CSS, and modern development tools ready to go.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8">
            View Documentation
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Code className="h-12 w-12 text-primary mb-4" />
              <CardTitle>TypeScript Ready</CardTitle>
              <CardDescription>
                Full TypeScript support with proper configurations and type safety out of the box.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Palette className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Tailwind CSS</CardTitle>
              <CardDescription>
                Modern utility-first CSS framework with custom design system and dark mode support.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-12 w-12 text-primary mb-4" />
              <CardTitle>App Router</CardTitle>
              <CardDescription>
                Latest Next.js App Router with server components, layouts, and modern routing patterns.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
        <div className="space-y-4">
          <div className="bg-background rounded p-4 font-mono text-sm">
            <p className="text-muted-foreground mb-2"># Install dependencies</p>
            <p>npm install</p>
          </div>
          <div className="bg-background rounded p-4 font-mono text-sm">
            <p className="text-muted-foreground mb-2"># Start development server</p>
            <p>npm run dev</p>
          </div>
          <div className="bg-background rounded p-4 font-mono text-sm">
            <p className="text-muted-foreground mb-2"># Build for production</p>
            <p>npm run build</p>
          </div>
        </div>
      </section>
    </div>
  )
}
