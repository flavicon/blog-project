import Head from "next/head";
import Card from "../components/Card";
import Header from "../components/Header";

import style from '../styles/pages/home.module.scss';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Blog | Inicio</title>
			</Head>
			<Header />
			<section className={style.container}>
				<Card
					title="Post nº 1 - Criando blog"
					image="https://api.lorem.space/image/furniture?w=300&h=300"
				/>
				<Card
					title="Post nº 1 - Criando blog"
					image="https://api.lorem.space/image/furniture?w=300&h=300"
				/>
			</section>
		</div>
	);
};
