/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')

const skeletonPath = path.join(
	require.resolve('@skeletonlabs/skeleton'),
	'../**/*.{html,js,svelte,ts}'
)

const skeletonPlugins = require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()

/** @type {import('tailwindcss').Config}*/
const config = {
	darkMode: 'class',

	content: ['./src/**/*.{html,js,svelte,ts}', skeletonPath],

	theme: {
		extend: {
			fontFamily: {
				sans: ['IBM Plex Sans Thai Looped', 'Inter', 'sans-serif'],
				serif: ['serif']
			}
		}
	},

	plugins: [...skeletonPlugins, require('@tailwindcss/forms')]
}

module.exports = config
