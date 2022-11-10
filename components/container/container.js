import React from "react";
import Link from "next/link";

export default function Container({children}) {
  return (
    <>
      <nav className="navbar navbar-dark navbar-light bg-primary">
        <div className="container-fluid justify-content-center">
          <Link href="/" className="navbar-brand mx-4">
            Accueil
          </Link>
          <Link href="/blog" className="navbar-brand mx-4">
            Blog
          </Link>
          <Link href="/users" className="navbar-brand mx-4">
            Users
          </Link>
        </div>
      </nav>
      {children}
    </>
  );
}
