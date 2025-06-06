import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About This Setup</h1>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Next.js 15</CardTitle>
              <CardDescription>
                The latest version of Next.js with App Router, Server Components, and improved performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This setup uses Next.js 15 with the App Router, which provides better performance, improved developer
                experience, and modern React features like Server Components.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>TypeScript Configuration</CardTitle>
              <CardDescription>
                Strict TypeScript setup with proper path mapping and modern compiler options.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The TypeScript configuration includes strict mode, path aliases (@/* mapping), and all the necessary
                compiler options for a modern Next.js application.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tailwind CSS</CardTitle>
              <CardDescription>Custom design system with CSS variables and dark mode support.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Tailwind is configured with a custom color palette using CSS variables, making it easy to implement
                themes and maintain consistent design across your application.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Development Tools</CardTitle>
              <CardDescription>ESLint, Prettier-ready, and optimized for development workflow.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The setup includes ESLint with Next.js recommended rules, and is ready for Prettier integration. All
                configurations follow Next.js best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
