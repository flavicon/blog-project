import Image from "next/image";

import styles from './styles.module.scss';

const Card = ({ title, image }) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <p className={styles.title}>{title}</p>
                <div className={styles.content}>
                    <Image
                        src={image}
                        alt="post image"
                        width={400}
                        height={400}
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nisi, tenetur velit assumenda consequuntur, ratione, 
                        tempora nesciunt beatae commodi sapiente aspernatur 
                        eos quam accusantium! 
                        Sint cumque nobis ducimus praesentium dolorum illum.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
