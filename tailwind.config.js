/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontSize: {
				heading: [
					"3.5rem",
					{
						fontWeight: "600",
						fontFamily: {
							lexend: ["Lexend"],
						},
					},
				],
			},
			fontFamily: {
				lexend: ["Lexend"],
				athiti: ["Athiti"],
			},
			colors: {
				acm: {
					blue: "#82aaff",
					lightpurple: "#c792ea",
					yellow: "#ffd700",
					green: "#c3e88d",
					red: "#ff5370",
					gray: "#8f93a2",
					pink: "#f07178",
					lightblue: "#89ddff",
					darkgray: "#525975",
					orange: "#f78c6c",
					marine: "#80cbc4",
					purple: "#da70d6",
					white: "#ffffff",
					black: "#000000",
					dark: "#0F121A",
					lightgray: "#D9D9D9",
				},
			},
		},
	},
	plugins: [],
};
