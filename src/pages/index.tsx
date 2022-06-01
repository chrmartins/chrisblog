import Head from "next/head";
import Image from "next/image";


import myAvatar from "../assets/meuavatar.png"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Christian Martins</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="">Christian Martins Teixeira Soares</h1>
        <h2 className="">Desenvolvedor Front-end</h2>
        <div className="">
          <Image
            className="rounded-full"
            src={myAvatar}
            alt="Meu avatar"
            width={150}
            height={150}
          />
        </div>
      </main>
    </div>
  );
}
