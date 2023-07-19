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
		extend: {}
	},

	plugins: [...skeletonPlugins]
}

module.exports = config
