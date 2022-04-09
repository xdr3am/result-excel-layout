module.exports = {
  content: [
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        primary1: '#37797b',
        primary2: '#ed7138',
        gray: '#979ea2',
        black: '#0f1214',
        white: '#ffffff'
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          maxWidth: '1460px',
          padding: '0 20px',
          margin: '0 auto',
          boxSizing: 'border-box'
        }
      })
    }
  ],
}
