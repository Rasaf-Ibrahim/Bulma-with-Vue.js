module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'

  theme: {

    extend: {



  // Font-Family
  fontFamily: {
    'regular': ['Roboto', 'sans-serif'],
    'regular-space': ['Roboto Mono', 'monospace'],
    'cursive-1': ['Lobster Two', 'cursive'],
    'cursive-2': ['Kaushan Script', 'cursive'],
    'cursive-3': ['Yatra One', 'cursive'],
    'cursive-4': ['Train One', 'cursive'],
    'handwriting': ['Indie Flower', 'cursive'],
    'bangla-cursive': ['Atma', 'cursive'],
    // Use 'Roboto' to write any language's regular writing.
    // 'lobster-two' in italic format looks better.  
    },


    // Max-width
    maxWidth: {
      '25%': '25%',
      '40%': "40%",
      '50%': '50%',
      '60%': '60%',
      '75%': '75%',
      '90%': '90%', 
      '98%': '98%',
     },

    //  Min-Height
     minHeight: {
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',

      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     }


      
    },
  },

  variants: {

    extend: {

      // display(hidden, block, inline, flex, grid etc)

      display: ['hover', 'group-hover', 'focus'],


      // backgroundColor

      backgroundColor: ['active'],

      // maxWidth
      maxWidth: ['hover', 'focus'],

      // outline
      outline: ['hover', 'active'],


      // visited

      textColor: ['active','visited'],


      // transform, translate
      
      transform: ['hover', 'focus'],

      transformOrigin: ['hover', 'focus'],

      translate: ['active', 'group-hover'],

      rotate: ['active', 'group-hover'],

      scale: ['active', 'group-hover'],

      skew: ['active', 'group-hover'],


      // transition
      
      transitionProperty: ['hover', 'focus'],

      transitionDuration: ['hover', 'focus'],

      transitionTimingFunction: ['hover', 'focus'],

      transitionDelay: ['hover', 'focus'],

      animation: ['hover', 'focus', 'motion-safe', 'motion-reduce'],



      // filters

      filter: ['hover', 'focus'],
      blur: ['hover', 'focus'],
      brightness: ['hover', 'focus'],
      contrast: ['hover', 'focus'],
      dropShadow: ['hover', 'focus'],
      grayscale: ['hover', 'focus'],
      hueRotate: ['hover', 'focus'],
      invert: ['hover', 'focus'],
      saturate: ['hover', 'focus'],
      sepia: ['hover', 'focus'],
     

    },

  },

  plugins: [],
}
