module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'primary-light': 'var(--color-primary-light)',
        'secondary-light': 'var(--color-secondary-light)',
        'background': 'var(--color-background)',
        'text': 'var(--color-text)',
        'text-light': 'var(--color-text-light)',
      },
    },
  },
  plugins: [],
}