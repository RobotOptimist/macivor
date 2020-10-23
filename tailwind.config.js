/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    options: {
      whitelist: ['line-numbers', 'language-javascript', 'token', 'operator', 'string', 'punctuation', 'my-8', 'w-1/2', 'max-w-sm', 'giphy-container', 'dialogue-container']
    }
  },
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
    maxHeight: {
      '0':'0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      '128': '32rem',
    },
    transitionProperty: {
      'height': 'height',
    }
  },
  variants: {},
  plugins: []
}
