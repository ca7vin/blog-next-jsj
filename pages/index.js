import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container px-4 pt-5">
      <h1>Bienvenue sur Code.io</h1>
      <span>Le blog communautaire des adeptes de développement Web</span>
      <div className="row mt-5">
        <div className="col-12 col-sm-6" style={{minHeight:"200px"}}>
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title">Lisez les articles</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Maximisez votre culture Web !
              </h6>
              <p className="card-text">
                Chaque auteur tente de vous rapporter le plus de valeurs possible par article.
              </p>
              <Link href="/blog">
                Visitez le blog
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6" style={{minHeight:"200px"}}>
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title">Faites un tour vers la liste des membres</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Rencontrez des devs !
              </h6>
              <p className="card-text">
                Ajoutez, invitez et discutez avec les différents membres
              </p>
              <Link href="/users">
                Découvrez la liste des membres
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
