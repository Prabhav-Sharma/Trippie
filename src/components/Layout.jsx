import React from "react";
import { SideNav, SearchUsers } from ".";

function Layout({ children, showSearch = true }) {
  return (
    <main className="flex flex-col-reverse gap-2 bg-gray-800 sm:flex-row max-w-full h-full p-1">
      <SideNav />
      <section className="lg:mt-2 w-full px-1">{children}</section>
      {showSearch ? <SearchUsers /> : ""}
    </main>
  );
}

export default Layout;
