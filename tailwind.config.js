module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			transparent: "transparent",
			black: "#000",
			dark: "#333",
			white: "#fff",
			light: "#ececec",
			"light-red": "#f78888",
			"dark-red": "#F94268",
			"black-red": "#700100",
			yellow: "#f3d250",
			"black-yellow": "#5B4900",
			"dark-yellow": "#D2B231",
			blue: "#90ccf4",
			"light-blue": "#E2F3FF",
			"dark-blue": "#5da2d5",
			"darkest-blue": "#2A4A61",
			"black-blue": "#003154",
			purple: "#6755DA",
		},
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
			serif: ["Georgia", "serif"],
			mono: ["Menlo", "Monaco", "Consolas", "monospace"],
		},
		extend: {
			transitionProperty: {
				width: "width",
				"background-image": "background-image",
			},
			borderRadius: {
				card: "1000px 1000px 100px 100px",
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
