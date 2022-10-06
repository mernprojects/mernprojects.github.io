import Head from "next/head";
import Link from "next/link";

export default function Collections({ posts }) {
  return (
    <div>
      <Head>
        <title>Fang Zhang</title>
      </Head>
      <div style={{ textAlign: "start", margin: "2rem", fontSize: "1.5rem" }}>
        I worked in IoT system development and project management in China for
        10 years.
        <br />
        When I came to New Zealand since 2019, I started to understand and
        involve MERN(MongoDB, ExpressJS, ReactJS and NodeJS) Full-Stack
        development.
      </div>
      <br />
      <div style={{ textAlign: "start", margin: "2rem", fontSize: "1.5rem" }}>
        <h3>Mobile Dev: (React Native)</h3>
        <Link href="https://apps.apple.com/nz/app/ship2u/id1582385021">
          <a target="_blank" style={{ color: "blue" }}>
            Ship2U
          </a>
        </Link>
        : Corporation with the Ship2U platform, it provides information about
        customers.
      </div>
      <br />
      <div style={{ textAlign: "start", margin: "2rem", fontSize: "1.5rem" }}>
        <h3> MERN Full-Stack Dev: </h3>
        <Link href="rainbow-profiterole-c64be5.netlify.app">
          <a target="_blank" style={{ color: "blue" }}>
            Memories
          </a>
        </Link>
        : Showing some memories through the couple of lovely pictures.
        <br />
        <Link href="https://aionlogistech.com/">
          <a target="_blank" style={{ color: "blue" }}>
            AionTech
          </a>
        </Link>
        : Landing page of the AionTech which provides logistics SaaS services.
        <br />
        <Link href="https://sllivings.co.nz/">
          <a target="_blank" style={{ color: "blue" }}>
            SL Living
          </a>
        </Link>
        : Landing page of the Sllivings.
      </div>
      <br />
      <div style={{ textAlign: "start", margin: "2rem", fontSize: "1.5rem" }}>
        <h3>IoT Dev: </h3>
        <Link href="https://www.qivicon.com/en/">
          <a target="_blank" style={{ color: "blue" }}>
            Smart Home ecosystem
          </a>
        </Link>
        : Ecosystem for the IoT in Germany.
      </div>
    </div>
  );
}