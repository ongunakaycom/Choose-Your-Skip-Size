import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import SkipSelector from "../components/SkipSelector"; // <- Importing the component
import "../components/SkipSelector.css"; // <- Importing the CSS styles

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Welcome />
      <SkipSelector /> {/* <- Rendering the component */}
    </>
  );
}
