import Image from "next/image";
import React from "react";

const LayoutContact = () => {
	return (
		<section
			id="konsultasi"
			className="pt-20 mt-[100px] lg:py-32 lg:my-[120px]"
		>
			<div className="container mx-auto xl:px-[120px]">
				<div className="grid grid-cols-12">
					<div className="col-span-12 lg:col-span-6">
						<div className="w-full h-[600px] bg-gradient-to-br from-light-blue to-dark-blue rounded-3xl py-12 px-5">
							<div className="flex flex-col justify-center items-center">
								<h1 className="text-2xl lg:text-5xl font-semibold text-black-blue ">
									Kirim Pesan
								</h1>
								<form className="w-full mt-12">
									<div className="mb-4">
										<label
											className="block text-sm font-semibold mb-2"
											htmlFor="name"
										>
											Nama
										</label>
										<input
											className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
											id="name"
											type="text"
											placeholder="Masukkan nama anda"
										/>
									</div>
									<div className="mb-4">
										<label
											className="block text-sm font-semibold mb-2"
											htmlFor="email"
										>
											Email
										</label>
										<input
											className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
											id="email"
											type="email"
											placeholder="Masukkan email anda"
										/>
									</div>
									<div className="mb-4">
										<label
											className="block text-sm font-semibold mb-2"
											htmlFor="email"
										>
											Keperluan
										</label>
										<input
											className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
											id="email"
											type="email"
											placeholder="Keperluan: konsultasi, pemesanan, atau lainnya"
										/>
									</div>
									<div className="mb-4">
										<label
											className="block text-sm font-semibold mb-2"
											htmlFor="email"
										>
											Pesan
										</label>
										<textarea
											className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline resize-none"
											placeholder="Pesan"
										/>
									</div>
									<div className="flex justify-center">
										<button
											className="px-8 py-2 rounded-xl font-semibold transition-background-image bg-gradient-to-br from-light-red to-dark-red hover:from-dark-blue"
											type="submit"
										>
											Kirim
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-6">
						<div className="w-full h-[600px] bg-gradient-to-tr from-dark-red to-light-red/70 rounded-3xl py-12 px-5">
							<div className="flex flex-col items-center h-full">
								<h1 className="text-2xl lg:text-5xl font-semibold text-black-red ">
									Informasi Kontak
								</h1>
								<div className="flex flex-col justify-between items-center h-full">
									<div className="flex flex-col gap-y-6 justify-center h-full">
										<div className="flex gap-x-4">
											<div>Alamat</div>
											<p>Alamat Lusty</p>
										</div>
										<div className="flex gap-x-4">
											<div>Email</div>
											<p>lustycatering@gmail.com</p>
										</div>
										<div className="flex gap-x-4">
											<div>Telepon</div>
											<p>081234567890</p>
										</div>
									</div>
									<div className="flex gap-x-4">
										<div className="flex gap-14 items-center">
											<Image
												width={24}
												height={24}
												src="/assets/whatsapp.png"
												alt="Whatsapp"
											/>
											<Image
												width={24}
												height={24}
												src="/assets/linkedin.png"
												alt="Linkedin"
											/>
											<Image
												width={24}
												height={24}
												src="/assets/twitter.png"
												alt="Twitter"
											/>
											<Image
												width={24}
												height={24}
												src="/assets/instagram.png"
												alt="Instagram"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LayoutContact;
