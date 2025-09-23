import NavBar from "../components/nav-bar";
import OnMountFlag from "../components/OnMountFlag";
import BackgroundDecor from "../components/background-decor";

export default function ProjectsPage() {
  return (
    <main className="p-12">
      <OnMountFlag />
      <BackgroundDecor />
      <NavBar />

      <h1 className="text-3xl md:text-5xl font-semibold">About</h1>
      <p className="mt-6 text-lg leading-relaxed">Short bio goes here.</p>
    </main>
  );
}
