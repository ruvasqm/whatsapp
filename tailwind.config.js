// const colors = require('tailwindcss/colors')

module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
        colors: {
            ptext: '#111b21',
            offwhite: '#eae6df',
            wgreen: '#25d366',
            dwgreen: '#00a884',
            stext: '#667781',
            wblue: '#53bdeb',
            accent: '#f0f2f5',
            icon: '#54656f',
            dptext: '#e9edef',
            dstext: '#8696a0',
            dicon: '#8696a0',
            daccent: '#202c33',
            offblack: '#111b21',
            dwhite: '#2a3942',
        }
    },
  },
  plugins: [],
}
