module.exports = {
  purge: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}'],
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


      '12rem':'12rem',
      '16rem':'16rem',
      '20rem':'20rem',
      '24rem':'24rem',
      '28rem':'28rem',
      '32rem':'32rem',
      '36rem':'36rem',
      '40rem':'40rem',
      '44rem':'44rem',
      '48rem':'48rem',
      '52rem':'52rem',
      '56rem':'56rem',
      '60rem':'60rem',
      '64rem':'64rem',
      '68rem':'68rem',
      '72rem':'72rem',
      '76rem':'76rem',
      '80rem':'80rem'

     },

    //  Min-Height
     minHeight: {
      '1.5rem': '1.5rem',
      '1.75rem': '1.75rem',
      '2rem': '2rem',


      '25%': '25%',
      '50%': '50%',
      '75%': '75%',
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

