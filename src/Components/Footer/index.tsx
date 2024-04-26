import styles from "./footer.module.scss";

import footer_img_1 from "../../assets/footer_img/image-retro-pcs.jpg";
import footer_img_2 from "../../assets/footer_img/image-top-laptops.jpg";
import footer_img_3 from "../../assets/footer_img/image-gaming-growth.jpg";

export default function Footer() {
  return (
    <>
      <footer className={styles.main_footer}>
        <div className={styles.box_1}>
          <div className={styles.trend_post_img}>
            <img src={footer_img_1} alt="footer img" />
          </div>
          <div className={styles.trend_post_details}>
            <p className={styles.number_post}>01</p>
            <p className={styles.title_post}>Reviving Retro Pcs</p>
            <p className={styles.para_post}>
              What happens when old Pcs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className={styles.box_1}>
          <div className={styles.trend_post_img}>
            <img src={footer_img_2} alt="footer img" />
          </div>
          <div className={styles.trend_post_details}>
            <p className={styles.number_post}>02</p>
            <p className={styles.title_post}>Top 10 Laptops of 2024</p>
            <p className={styles.para_post}>
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className={styles.box_1}>
          <div className={styles.trend_post_img}>
            <img src={footer_img_3} alt="footer img" />
          </div>
          <div className={styles.trend_post_details}>
            <p className={styles.number_post}>03</p>
            <p className={styles.title_post}>The Growth of Gaming</p>
            <p className={styles.para_post}>
              How the pandemic has sparked fresh opportunities
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
