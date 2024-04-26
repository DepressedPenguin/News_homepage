import styles from "./home.module.scss";
import img_bg from "../../assets/imgs/image-web-3-desktop.jpg";

export default function Home() {
  return (
    <>
      <div className={styles.main_home}>
        <div className={`${styles.grid_box} ${styles.bg_pic}`}>
          <div className={styles.bg_img_background}>
            <img src={img_bg} alt="background" />
          </div>
          <div className={styles.readmore_parenet}>
            <div className={styles.read_more_boxss}>
              <h1>
                The Bright
                <br />
                Future of
                <br />
                Web 3.0?
              </h1>
            </div>
            <div className={styles.read_more_article}>
              <p>
                We dive into the next evolution of the web that
                <br />
                calims to put the power of the platforms back
                <br />
                into the hands of the people. But is it really fulfilling its
                promise?
              </p>
              <button>READ MORE</button>
            </div>
          </div>
        </div>
        <div className={`${styles.grid_box} ${styles.news_features}`}>
          <div className={styles.box_features}>
            <h1 className={styles.headline_features}>New</h1>
            <p className={styles.sub_headline}>Hydrogen VS Electric Cars</p>
            <p className={styles.para_article}>
              Will hydrogren fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className={styles.box_features}>
            <p className={styles.sub_headline}>The Downsides of AI Artistry</p>
            <p className={styles.para_article}>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className={`${styles.box_features} ${styles.border_remove}`}>
            <p className={styles.sub_headline}>Is VC Funding Drying Up?</p>
            <p className={styles.para_article}>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
