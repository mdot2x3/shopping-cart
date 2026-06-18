import { Link } from "react-router";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.sectionOne}>
        <div className={styles.heroText}>
          <p className={styles.heroEyebrow}>New collection — Summer 2026</p>
          <h1 className={styles.heroTitle}>
            Shopping made <em>easy</em>
          </h1>
          <p className={styles.heroSubtitle}>
            A unique shopping experience catered to your distinct style and
            aesthetic.
          </p>
        </div>
        <div className={styles.heroVisual}></div>
      </section>
      <section className={styles.sectionTwo}>
        <div className={styles.aboutText}>
          <p className={styles.aboutEyebrow}>Our Story</p>
          <h2 className={styles.aboutTitle}>
            A new frontier in the shopping experience
          </h2>
          <p className={styles.aboutBody}>
            Proto started with a simple question: Why is there so much friction
            in the shopping experience?
          </p>
          <p className={styles.aboutBody}>
            We were frustrated by how much time it took to search for stores
            that matched our style and interests. Even when we found something
            that sparked our curiosity, we were often met with endless gallery
            pages and product grids, clicking through item after item in the
            hope of finding something that truly resonated with our taste. We
            believed there had to be a better way.
          </p>
          <p className={styles.aboutBody}>
            We believed there had to be a better way.
          </p>
          <p className={styles.aboutBody}>
            We're a team of five consisting of designers, makers, curators and
            technologists who believe that the shopping experience should be
            catered to you. No more scouring the web, Proto brings items you
            want directly to you. Visit our &nbsp;
            <Link to="/shop" className={styles.aboutLink}>
              Shop
            </Link>
            &nbsp; and see for yourself!
          </p>
        </div>
      </section>
      <section className={styles.sectionThree}>
        <h2 className={styles.promoTitle}>Shop now for 20% off your order.</h2>
        <p className={styles.promoBody}>
          Browse the full collection — from clothing, to electronics, jewelry,
          and more — the next must have piece for your collection is waiting.
        </p>
        <Link to="/shop" className={styles.promoLink}>
          Shop Now
        </Link>
      </section>
    </div>
  );
}

export default Home;
