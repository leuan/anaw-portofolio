import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				text: {
					50: '#050316',
					100: '#0b062d',
					200: '#160d59',
					300: '#211386',
					400: '#2b19b3',
					500: '#3620df',
					600: '#5e4ce6',
					700: '#8779ec',
					800: '#afa6f2',
					900: '#d7d2f9',
					950: '#ebe9fc'
				},
				background: {
					50: '#050514',
					100: '#0a0a29',
					200: '#141452',
					300: '#1f1f7a',
					400: '#2929a3',
					500: '#3333cc',
					600: '#5c5cd6',
					700: '#8585e0',
					800: '#adadeb',
					900: '#d6d6f5',
					950: '#ebebfa'
				},
				primary: {
					50: '#050118',
					100: '#0a0231',
					200: '#140462',
					300: '#1e0693',
					400: '#2708c4',
					500: '#310af5',
					600: '#5a3bf7',
					700: '#846cf9',
					800: '#ad9dfb',
					900: '#d6cefd',
					950: '#eae7fe'
				},
				secondary: {
					50: '#070614',
					100: '#0f0b28',
					200: '#1d1650',
					300: '#2c2277',
					400: '#3a2d9f',
					500: '#4938c7',
					600: '#6d60d2',
					700: '#9288dd',
					800: '#b6afe9',
					900: '#dbd7f4',
					950: '#edebf9'
				},
				accent: {
					50: '#0d0d0d',
					100: '#1a1a1a',
					200: '#333333',
					300: '#4d4d4d',
					400: '#666666',
					500: '#808080',
					600: '#999999',
					700: '#b3b3b3',
					800: '#cccccc',
					900: '#e6e6e6',
					950: '#f2f2f2'
				}
			},
			fontFamily: {
				inconsolata: ['Inconsolata', 'ui-serif'],
				playfair: ['Playfair Display', 'ui-serif'],
				stix: ['STIX Two Text', 'ui-serif'],
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
