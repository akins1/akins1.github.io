import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/vsts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/daw-core/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '128': '32rem',
        '192': '48rem',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '51': 'repeat(51, minmax(0, 1fr))',
        '52': 'repeat(52, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
export default config
