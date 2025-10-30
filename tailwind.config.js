module.exports = {
  content: [
    "./layout/**/*.liquid",
    "./templates/**/*.liquid",
    "./templates/**/*.json",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./assets/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // New Flux Adaptive Design System
        primary: '#0C1021',
        secondary: '#171C2A',
        accent: {
          DEFAULT: '#7F5AF0',
          light: '#9E8CFC',
          dark: '#5E3BC1',
        },
        gradient1: '#1E1F2A',
        gradient2: '#181B33',
        surface: '#FFFFFF',
        muted: '#A1A1AA',
        
        // Legacy support (for backwards compatibility)
        bg: {
          primary: "#0C1021",
          secondary: "#171C2A",
        },
        text: {
          primary: "#E5E7EB",
          secondary: "#A1A1AA",
        },
        border: "#2D3748",
      },
      fontFamily: {
        sans: ['DM Sans', 'Satoshi', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'flux-gradient': 'linear-gradient(135deg, #7F5AF0 0%, #2CB67D 100%)',
        'flux-gradient-alt': 'linear-gradient(135deg, #9E8CFC 0%, #5E3BC1 100%)',
        "gradient-primary": "linear-gradient(135deg, #7F5AF0 0%, #2CB67D 100%)",
        "gradient-hover": "linear-gradient(135deg, #9E8CFC 0%, #A78BFA 100%)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(127, 90, 240, 0.1)",
        glow: '0 0 30px rgba(127, 90, 240, 0.3)',
        'glow-lg': '0 0 60px rgba(127, 90, 240, 0.4)',
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(127, 90, 240, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(127, 90, 240, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};

