import Link from "next/link";
import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import Form from "./Form";
import Hasil from "./Hasil";

const LayoutCalorieCounter = () => {
	const [hasil, setHasil] = useState(0);

	useEffect(() => {}, [hasil]);

	return (
		<section className="my-40">
			<div className="container mx-auto px-4  max-w-screen-xl">
				<Link href="/consultation">
					<a className="text-sm font-semibold mb-12">
						&#8592;{" "}
						<span className="underline">Kembali ke halaman Konsultasi</span>
					</a>
				</Link>
				<div className="text-center mb-12 pt-16">
					<h1 className="text-4xl lg:text-7xl font-bold mb-6">
						Cari Tau Kebutuhan Kalorimu
					</h1>
					<p>Ukur seberapa banyak kalori yang kamu butuh dalam satu hari</p>
				</div>
				<div className="grid grid-cols-12 mt-20 gap-y-8 lg:gap-x-20">
					<div className="col-span-12 lg:col-span-6">
						<Form setHasil={setHasil} />
					</div>
					<div className="col-span-12 lg:col-span-6">
						{hasil !== 0 && <Hasil hasil={hasil} />}
					</div>
				</div>
				<section className="mt-32">
					<SectionTitle
						imageName="question"
						imageAlt="pertanyaan"
						title="Bagaimana Cara Kami Menghitung"
					/>
					<div className="mt-12 flex flex-col gap-y-4">
						<p>
							Untuk mendapatkan kebutuhan kalori yang dimiliki masing-masing
							orang, kami menggunakan Persamaan Harris-Benedict.
						</p>
						<p>
							Persamaan Harris-Benedict adalah metode yang digunakan untuk
							memperkirakan tingkat metabolisme basal (BMR) individu. Perkiraan
							nilai BMR dapat dikalikan dengan angka yang sesuai dengan tingkat
							aktivitas individu; jumlah yang dihasilkan adalah perkiraan asupan
							kilokalori harian untuk mempertahankan berat badan saat ini.
						</p>
						<p>
							Persamaan Harris-Benedict dapat digunakan untuk membantu penurunan
							berat badan—dengan mengurangi jumlah asupan kilokalori di bawah
							perkiraan asupan pemeliharaan dari persamaan tersebut.
						</p>
						<p>
							Berikut persamaan Harris-Benedict yang telah direvisi oleh Miffin
							pada tahun 1990:
						</p>
						<div className="w-full py-4 px-8 shadow-md font-semibold bg-light">
							<p className="mb-4">
								Laki-Laki: BMR = (10 × berat(kg)) + (6.25 × tinggi(cm)) - (5 ×
								usia(tahun)) + 5
							</p>
							<p>
								Perempuan: BMR = (10 × berat(kg)) + (6.25 × tinggi in cm) - (5 ×
								usia(tahun)) - 161
							</p>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
};

export default LayoutCalorieCounter;
