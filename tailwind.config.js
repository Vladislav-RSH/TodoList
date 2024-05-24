/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  
	  // Or if using `src` directory:
	  "./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		boxShadow: {
		  custom: "30px 30px 0px 0px rgba(69, 57, 69, 0.5)",
		},
		height: {
			'custom': '95%',
		  },
	  },
	  fontFamily: {

		'amatic': ['"Amatic SC"', 'cursive'],
  
	  },
	},
	plugins: [],
  };
  