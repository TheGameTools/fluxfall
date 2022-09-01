module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './node_modules/@thegametools/utils/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        flux: '#b91d22',
        fluxDark: '#7f1416',
        primary: '#ad0000',
      },
      backgroundImage: {
        propBg: "url('https://cdn.tabletop.media/thegame.tools/fluxfall/propbg.png')",
      },
    },
    fontFamily: {
      body: ['"Open Sans"', 'sans-serif'],
      flux: ["'Orbitron'", 'sans-serif'],
      tgt: ["'Bungee'", 'sans-serif'],
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
