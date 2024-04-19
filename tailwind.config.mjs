import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
			  './node_modules/flowbite/**/*.js'
			],
	theme: {
		extend: {
			colors: {
				'table-green': '#daf3d3',
				'table-green-cabecera': '#4EA72F',
			  }
		},
	},
	plugins: [animations,require('flowbite/plugin')],
}
