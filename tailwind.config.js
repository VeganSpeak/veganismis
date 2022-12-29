const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Space Grotesk", "Rubik", ...defaultTheme.fontFamily.sans],
			},
      typography: ({ theme }) => ({
        neutral: {
          css: {
            '--tw-prose-body': 'black',
          },
        }
      }),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};
