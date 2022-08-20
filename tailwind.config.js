const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    screens:{
      
      'tablet': {'min': '905px', },
      'mobil' : {'max':'600px'},
    },

    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ['"Open Sans"'],
      },
      colors: {
        xgray: {
          dark: " RGBA(0, 0, 0, 0.93)",
          medium : "#c7c7c7",
          light: "#e5e5e5",
          extralight: "#efefef",
        },
      },
     
    },
    
    
    plugins: [],
  },
});
