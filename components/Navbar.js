"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <strong className="navbar__brand">Assignment 1</strong>
      <Link href="/" className={pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link href="/tasks" className={pathname === "/tasks" ? "active" : ""}>
        Tasks
      </Link>
      <Link
        href="/practice"
        className={pathname === "/practice" ? "active" : ""}
      >
        Practice
      </Link>
    </nav>
  );
}
