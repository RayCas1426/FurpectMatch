module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",  // Adjusted to avoid redundancy
  ],
  darkMode: "class",
  theme: {
    screens: {
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        black: {
          900: "var(--black_900)",
          "900_01": "var(--black_900_01)",
          "900_02": "var(--black_900_02)",
          "900_07": "var(--black_900_07)",
          "900_3f": "var(--black_900_3f)",
          "900_7a": "var(--black_900_7a)",
          "900_7f": "var(--black_900_7f)",
          "900_cc": "var(--black_900_cc)",
        },
        blue_gray: {
          400: "var(--blue_gray_400)",
        },
        deep_purple: {
          50: "var(--deep_purple_50)",
          100: "var(--deep_purple_100)",
          500: "var(--deep_purple_500)",
          600: "var(--deep_purple_600)",
          "100_01": "var(--deep_purple_100_01)",
        },
        gray: {
          50: "var(--gray_50)",
          100: "var(--gray_100)",
          200: "var(--gray_200)",
          300: "var(--gray_300)",
          400: "var(--gray_400)",
          500: "var(--gray_500)",
          600: "var(--gray_600)",
          700: "var(--gray_700)",
          800: "var(--gray_800)",
          900: "var(--gray_900)",
          "50_01": "var(--gray_50_01)",
          "50_02": "var(--gray_50_02)",
          "50_03": "var(--gray_50_03)",
          "600_01": "var(--gray_600_01)",
          "900_01": "var(--gray_900_01)",
        },
        indigo: {
          200: "var(--indigo_200)",
          400: "var(--indigo_400)",
          900: "var(--indigo_900)",
        },
        red: {
          a700: "var(--red_a700)",
        },
        teal: {
          900: "var(--teal_900)",
        },
        white: {
          a700: "var(--white_a700)",
          a700_f2: "var(--white_a700_f2)",
        },
      },
      boxShadow: {
        xs: "0 16px 12px 0 #00000007",
      },
      fontFamily: {
        inter: "Inter",
        poppins: "Poppins",
        roboto: "Roboto",
        acme: "Acme",
      },
      textShadow: {
        ts: "0px 4px 4px #0000003F",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
