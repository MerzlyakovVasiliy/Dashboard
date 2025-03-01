import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig(({ mode }) => ({
	plugins: [
		react(),
		svgr({
			svgrOptions: {},
			esbuildOptions: {},
			include: '**/*.svg?react',
			exclude: '',
		}),
	],
	define: {
		__API__: JSON.stringify(
			mode === 'production'
				? 'https://back-posts.vercel.app/'
				: 'http://localhost:3100'
		),
	},
	base: '/',
}))
