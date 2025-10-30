module.exports = {
  content: [
    "./layout/**/*.liquid",
    "./templates/**/*.liquid",
    "./templates/**/*.json",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./assets/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0D14",
          secondary: "#111827",
        },
        text: {
          primary: "#E5E7EB",
          secondary: "#9CA3AF",
        },
        accent: "#3B82F6",
        border: "#1F2937",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #6EE7B7 0%, #3B82F6 100%)",
        "gradient-hover": "linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(59, 130, 246, 0.1)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

