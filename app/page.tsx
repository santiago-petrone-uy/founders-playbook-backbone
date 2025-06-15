import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-24">
      <h1 className="text-4xl font-bold text-foreground">
        Component Showcase
      </h1>
      <p className="text-muted-foreground">
        Our Backbone Project is working!
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </main>
  );
}