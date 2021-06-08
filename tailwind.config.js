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

      display: ['hover', 'group-hover', 'focus', 'active'],


      // backgroundColor

      backgroundColor: ['active'],


      // fontWeight

      fontWeight: ['hover', 'group-hover', 'focus', 'active'],

      // maxWidth
      maxWidth: ['hover', 'group-hover', 'focus', 'active'],

      // outline
      outline: ['hover', 'group-hover', 'focus', 'active'],


      // visited

      textColor: ['active','visited'],


      // transform, translate
      
      transform: ['hover', 'group-hover', 'focus', 'active'],

      transformOrigin: ['hover', 'group-hover', 'focus', 'active'],

      translate: ['active', 'group-hover'],

      rotate: ['active', 'group-hover'],

      scale: ['active', 'group-hover'],

      skew: ['active', 'group-hover'],


      // transition
      
      transitionProperty: ['hover', 'group-hover', 'focus', 'active'],

      transitionDuration: ['hover', 'group-hover', 'focus', 'active'],

      transitionTimingFunction: ['hover', 'group-hover', 'focus', 'active'],

      transitionDelay: ['hover', 'group-hover', 'focus', 'active'],

      animation: ['hover', 'group-hover', 'focus', 'active','motion-safe', 'motion-reduce'],



      // filters

      filter: ['hover', 'group-hover', 'focus', 'active'],
      blur: ['hover', 'group-hover', 'focus', 'active'],
      brightness: ['hover', 'group-hover', 'focus', 'active'],
      contrast: ['hover', 'group-hover', 'focus', 'active'],
      dropShadow: ['hover', 'group-hover', 'focus', 'active'],
      grayscale: ['hover', 'group-hover', 'focus', 'active'],
      hueRotate: ['hover', 'group-hover', 'focus', 'active'],
      invert: ['hover', 'group-hover', 'focus', 'active'],
      saturate: ['hover', 'group-hover', 'focus', 'active'],
      sepia: ['hover', 'group-hover', 'focus', 'active'],
     

    },

  },

  plugins: [],
}

