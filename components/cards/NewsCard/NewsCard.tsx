import React from "react";
import styles from "./NewsCard.module.scss";
import { Icons } from "@/components/common";
interface NewsCardProps {
  item: any;
  button?: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({ item, button }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.card_img}>
        <img loading="lazy" src="/images/home/News.png" className={styles.image} alt="" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{item.Title}</h3>
        <p className={styles.description}>{item.Text}</p>
        <a 
          href="#" 
          className={styles.readMore} 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className={styles.readMoreText}>{button}</span>
          <Icons.ArrowRight className={styles.readMoreIcon} fill={isHovered ? "Green-rut" : "Emerald-dark"} />
        </a>
      </div>
    </article>
  );
};
