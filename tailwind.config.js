module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray333: "#333",
      },
      height : {
        header_height: "var(--header-height)",
      },
      padding : {
        header_height: "var(--header-height)",
      },
      keyframes: {
        showModal: {
          '0%': { transform: 'scale(1.3)', opacity: '70%' },
          '100%': { transform: 'scale(1)', opacity: '100%' },
        },
        showModalUpload: {
          '0%': { transform: 'scale(1.3)', opacity: '70%' },
          '100%': { transform: 'scale(1)', opacity: '100%' },
        },
        hideDirectModal : {
          '0%': { transform: ' translateX(0px)',},
          '100%': {transform: ' translateX(400px)',},
        },
        showHeartDbClick : {
          '0%': { opacity: '0', fontSize : "1rem"},
          '80%': { opacity: '0.8', fontSize : "10rem"},
          '100%': { opacity: '1', fontSize : "100px"},
        },
        translateX : {
          '0%': { opacity: '0.4', transform : 'translateX(60px)'},
          '8%': { opacity: '0.4', transform : 'translateX(-10px)'},
          '100%': { opacity: '1', transform : 'translateX(0px)'},
        }
       },
       
       animation: {
        showModal: 'showModal ease-in-out .1s',
        hideDirectModal : "hideDirectModal ease-in-out .1s",
        likePostShowHeart : "showHeartDbClick ease-in-out .3s;",
        showModalNotification : 'translateX 400ms ease-in-out forwards',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
   
  ]
}
