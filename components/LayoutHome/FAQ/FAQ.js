import React, { useState } from "react";
import SectionTitle from "../../SectionTitle";
import Accordion from "./Accordion";

const FAQ = () => {
	const data = [
		{
			question: "Tersedia di mana saja layanan Lusty saat ini?",
			answer:
				"Saat ini kami tersedia di beberapa daerah di Indonesia, kami akan menambahkan daerah lainnya dalam waktu dekat.",
		},
		{
			question: "Bagaimana cara memesan layanan Lusty?",
			answer:
				"Untuk memesan layanan, kamu bisa langsung memilih paket atau mengatur menu sendiri melalui halaman menu",
		},
		{
			question: "Bagaimana cara mengetahui kebutuhan kalori saya?",
			answer:
				"Kamu bisa mengetahui kebutuhan kalori harianmu dengan menggunakan layanan Hitung Kalori yang telah kami sediakan.",
		},
		{
			question:
				"Saya memiliki alergi terhadap bahan makanan tertentu, bisakah saya mendapatkan menu khusus selama program?",
			answer:
				"Kamu dapat mendapatkan menu khusus selama program dengan menghubungi kami melalui Kontak yang tersedia",
		},
	];

	return (
		<div className="container mx-auto px-4  max-w-screen-xl my-[160px]">
			<SectionTitle
				title="Pertanyaan yang Sering Diajukan"
				imageName="question"
				imageAlt="pertanyaan"
			/>
			<div className="mt-12">
				{data.map((item, index) => (
					<Accordion key={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default FAQ;
