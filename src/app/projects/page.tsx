import NavBar from "../components/nav-bar";
import BackgroundDecor from "../components/background-decor";
import OnMountFlag from "../components/OnMountFlag";

export default function ProjectsPage() {
  return (
    <main className="p-12">
      <OnMountFlag />
      <BackgroundDecor />
      <NavBar />
      <h1 className="text-3xl md:text-5xl font-semibold">Projects</h1>
    </main>
  );
}
