import Link from "next/link";
import { flagsmith } from "@/libs/flagsmith";

export const revalidate = 0;

export default async function Home() {
  const flags = await flagsmith.getEnvironmentFlags();
  return (
    <main className="main">
      <div>
        <h2>Hello World updated</h2>
      </div>
      <Link href="/about">About</Link>
      {flags.isFeatureEnabled("search") && (
        <div>
          <h3>My Cool Feature</h3>
          <input placeholder="Search" />
        </div>
      )}
    </main>
  );
}
