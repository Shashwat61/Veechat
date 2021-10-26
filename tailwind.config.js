module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'graydark':'#181a1c',
        'graylight':'#27292d',
        'bgchat':'#161819',

      },
      screens:{
        'xs':'545px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
