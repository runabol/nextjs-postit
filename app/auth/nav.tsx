import Link from "next/link";
import Login from "./login";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"}>
        <h1 className="font-bold text-lg">Send it</h1>
      </Link>
      <ul className="flex items-center gap-6">
        {/* @ts-expect-error Server Component */}
        <Login />
      </ul>
    </nav>
  );
}
