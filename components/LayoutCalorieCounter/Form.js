import { useRef } from "react";

const Form = ({ setHasil }) => {
	const formEl = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(formEl.current);
		const data = {};
		formData.forEach((value, key) => {
			data[key] = value;
		});
		if (data.jeniskelamin === "lakilaki") {
			const kalori =
				parseInt(data.berat) * 10 +
				parseInt(data.tinggi) * 6.25 -
				parseInt(data.usia) * 5 +
				5;
			setHasil(Math.ceil(kalori * parseFloat(data.aktivitas)));
		} else {
			const kalori =
				parseInt(data.berat) * 10 +
				parseInt(data.tinggi) * 6.25 -
				parseInt(data.usia) * 5 -
				161;
			setHasil(Math.ceil(kalori * parseFloat(data.aktivitas)));
		}
	};
	const handleClick = () => {
		setHasil(0);
	};
	return (
		<form
			className="flex flex-col gap-y-8"
			ref={formEl}
			onSubmit={handleSubmit}
		>
			<div className="flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 lg:justify-between lg:items-center">
				<label htmlFor="jeniskelamin" className="font-semibold">
					Jenis Kelamin:
				</label>
				<div className="flex gap-x-8">
					<div className="flex gap-x-2 items-center">
						<input
							required
							type="radio"
							id="lakilaki"
							name="jeniskelamin"
							defaultValue="lakilaki"
						/>
						<label htmlFor="lakilaki">Laki-Laki</label>
					</div>
					<div className="flex gap-x-2 items-center">
						<input
							required
							type="radio"
							id="perempuan"
							name="jeniskelamin"
							defaultValue="perempuan"
						/>
						<label htmlFor="perempuan">Perempuan</label>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 lg:justify-between lg:items-center">
				<label htmlFor="usia" className="font-semibold">
					Usia:
				</label>
				<input
					required
					type="number"
					name="usia"
					id="usia"
					className="px-4 py-2 shadow-md border-2 border-dark rounded-lg"
					min={14}
				/>
			</div>
			<div className="flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 lg:justify-between lg:items-center">
				<label htmlFor="berat" className="font-semibold">
					Berat Badan:
				</label>
				<input
					required
					type="number"
					name="berat"
					id="berat"
					className="px-4 py-2 shadow-md border-2 border-dark rounded-lg"
					placeholder="kg"
					min={30}
				/>
			</div>
			<div className="flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 lg:justify-between lg:items-center">
				<label htmlFor="tinggi" className="font-semibold">
					Tinggi Badan:
				</label>
				<input
					required
					type="number"
					name="tinggi"
					id="tinggi"
					className="px-4 py-2 shadow-md border-2 border-dark rounded-lg"
					placeholder="cm"
					min={140}
				/>
			</div>
			<div className="flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 lg:justify-between lg:items-center">
				<label htmlFor="aktivitas" className="font-semibold">
					Aktivitas Harian:
				</label>
				<select
					className="px-4 py-2 shadow-md border-2 border-dark rounded-lg"
					id="aktivitas"
					name="aktivitas"
				>
					<option value="1.2">Sedentary(Pekerjaan Kantoran)</option>
					<option value="1.4">Olahraga Ringan(1-2hari/minggu)</option>
					<option value="1.55">Olahraga Sedang(3-5hari/minggu)</option>
					<option value="1.7">Latihan Berat(6-7hari/minggu)</option>
					<option value="1.9">Atlet(2kali/hari)</option>
				</select>
			</div>
			<button
				onClick={handleClick}
				className="px-8 py-4 rounded-2xl font-semibold transition-background-image bg-gradient-to-br from-light-red to-dark-red hover:from-dark-blue"
			>
				Hitung
			</button>
		</form>
	);
};

export default Form;
