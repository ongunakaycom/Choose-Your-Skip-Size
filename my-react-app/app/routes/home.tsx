import type { Route } from "./+types/home";
import SkipSelector from "../components/SkipSelector"; 
import "../components/SkipSelector.css"; 

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <SkipSelector />;
}
