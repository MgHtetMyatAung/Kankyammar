import Link from "next/link";
import React from "react";

function NavMenu() {
  return (
    <main>
      <nav className="container mx-auto flex justify-between items-center h-[60px] md:h-[70px]">
        <Link href={"/"}>
          <h1 className=" text-lg font-semibold text-gray-700">DESTINY</h1>
        </Link>
        <ul>
          <li className=" font-medium text-gray-700">
            <Link href={"/docs"}>Docs</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default NavMenu;
