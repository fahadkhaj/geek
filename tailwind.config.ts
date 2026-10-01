import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        ink: {
          DEFAULT: 'var(--ink)',
          60: 'var(--ink-60)',
          30: 'var(--ink-30)',
          12: 'var(--ink-12)',
        },
        void: 'var(--void)',
        signal: {
          DEFAULT: 'var(--signal)',
          dim: 'var(--signal-dim)',
        },
        lab: 'var(--lab)',
        danger: 'var(--danger)',
      },
      fontFamily: {
        display: ['var(--f-display)'],
        body: ['var(--f-body)'],
        mono: ['var(--f-mono)'],
      },
    },
  },
  plugins: [],
}

export default config