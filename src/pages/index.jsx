import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { La_Belle_Aurore } from "next/font/google";
import italy from "../../public/italy.jpg";

const belle = La_Belle_Aurore({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Impulse Visits</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <h1
          className={`${belle.className} text-3xl absolute top-10 right-[100px] sm:right-20 sm:text-4xl`}
        >
          Impulse Visits
        </h1>
        <Link href="/home">
          <button className="absolute top-20 right-[150px] btn enter-btn sm:right-[130px] sm:top-24">
            Enter
          </button>
        </Link>
        <Image src={italy} alt="city" className="h-screen object-cover" />
      </div>
    </>
  );
}