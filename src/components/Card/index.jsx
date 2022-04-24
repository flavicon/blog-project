import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./styles.module.scss";

const variants = {
  start: {
    scale: 0.5,
    background: "var(--cyan-300)",
  },
  end: {
    scale: 1,
    background: "var(--cyan-700)",
  },
};

const Card = ({ title, image }) => {
  return (
    <motion.div
      initial="start"
      animate="end"
      variants={variants}
      transition={{ duration: 0.5 }}
      whileTap={{ scale: 0.7 }}
      className={styles.container}
    >
      <div className={styles.card}>
        <p className={styles.title}>{title}</p>
        <div className={styles.content}>
          <Image src={image} alt="post image" width={400} height={400} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            tenetur velit assumenda consequuntur, ratione, tempora nesciunt
            beatae commodi sapiente aspernatur eos quam accusantium! Sint cumque
            nobis ducimus praesentium dolorum illum.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
