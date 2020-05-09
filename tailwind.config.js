module.exports = {
  purge: [
    './layout/*.liquid',
    './templates/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid'
  ],
  theme: {
    fontFamily: {
      'body': ['"Roboto Mono"', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      accent: '#f8d0a9',
      bkgmain: '#fff',
      bkgaccent: '#fdf9ec'
    },
    container: {
      center: true,
      padding: '2rem'
    },
    spacing: {
      0: '0',
      8: '0.5rem',
      12: '0.75rem',
      16: '1rem',
      24: '1.5rem',
      32: '2rem',
      48: '3rem',
      64: '4rem',
      72: '4.5rem',
      80: '5rem',
      88: '5.5rem',
      96: '6rem',
      104: '6.5rem',
      128: '8rem',
      160: '10rem'
    }
  },
  variants: {
    padding: ['responsive', 'first', 'last'],
    margin: ['responsive', 'first', 'last']
  },
  plugins: [],
}
