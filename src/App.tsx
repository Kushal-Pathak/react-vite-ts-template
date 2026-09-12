import { env } from '@/lib/env';

function App() {
  return (
    <main className="min-h-screen bg-background p-8 text-foreground">
      <h1 className="text-3xl font-bold">{env.appName}</h1>
      <p className="mt-2 text-muted-foreground">React + Vite + TypeScript template</p>
    </main>
  );
}

export default App;
