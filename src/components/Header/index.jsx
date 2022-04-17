import styles from './styles.module.scss';

const Header = () => {
    return (
        <header className={styles.container}>
            <p className={styles.title}>Seja-bem vindo</p>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Posts</li>
                    <li>About</li>
                </ul>
                <button>Log in</button>
            </nav>
        </header>
    );
};

export default Header;
