import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <span className="border border-cyan-200 p-1">
          <Link href="/team">Team</Link>
        </span>
        <span className="border border-cyan-200 p-1">
          <Link href="/individual">Individual</Link>
        </span>
      </div>
    </main>
  );
}
