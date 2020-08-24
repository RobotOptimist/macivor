/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: [
    './**/*.vue'    
  ],
  theme: {
    boxShadow: {//(76, 81, 191)
      default: '0 1px 3px 0 rgba(76, 81, 191, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
      md: ' 0 4px 6px -1px rgba(76, 81, 191, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
      lg: ' 0 10px 15px -3px rgba(76, 81, 191, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
      xl: ' 0 20px 25px -5px rgba(76, 81, 191, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
      '2xl': '0 25px 50px -12px rgba(76, 81, 191, .25)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      focus: '0 0 0 3px rgba(66,153,225,0.5)',
      'none': 'none',
    },
    transitionProperty: {
      'height': 'height',
    }
  },
  variants: {},
  plugins: []
}
