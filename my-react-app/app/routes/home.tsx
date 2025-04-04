import SkipSelector from "@/components/SkipSelector";

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Choose Your Skip Size</h1>
      <SkipSelector />
    </main>
  );
}
