import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Neue Farbpalette - Natürliche, warme Töne
        sand: {
          50: "#faf8f3",
          100: "#f5f0e6",
          200: "#ece2cd",
          300: "#e2d2b4",
          400: "#d5bd94", // Hauptfarbe: Sand
          500: "#c9a978",
          600: "#b89057",
          700: "#9a7548",
          800: "#7e5f3d",
          900: "#674e35",
        },
        beige: {
          50: "#fbfaf7", // Hauptfarbe: Helles Beige/Elfenbein
          100: "#f7f4ed",
          200: "#efe9db",
          300: "#e5d9c3",
          400: "#d8c5a6",
          500: "#c9b089",
          600: "#b99a6f",
          700: "#a07f57",
          800: "#846749",
          900: "#6c553e",
        },
        ocker: {
          50: "#fcf9eb",
          100: "#f8f2d6",
          200: "#f1e4ae",
          300: "#e9d27d", // Hauptfarbe: Helles Ocker
          400: "#e0bc4e",
          500: "#d4a32f",
          600: "#bc8425",
          700: "#9c6621",
          800: "#7f5222",
          900: "#69441f",
        },
        brown: {
          50: "#f9f6f3",
          100: "#f3ede6",
          200: "#e7d9cc",
          300: "#d7bfaa",
          400: "#c19f82", // Hauptfarbe: Hellbraun
          500: "#b08363",
          600: "#a06c4e",
          700: "#855741",
          800: "#6d4839",
          900: "#5a3c31",
        },
        gray: {
          50: "#f7f7f6",
          100: "#eeeeed",
          200: "#dddcda",
          300: "#c5c3c0",
          400: "#a7a4a0", // Hauptfarbe: Warmes Grau
          500: "#8d8984",
          600: "#736f6a",
          700: "#5f5c58",
          800: "#4f4d4a",
          900: "#434240",
        },
        moss: {
          50: "#f4f7f2",
          100: "#e6ede2",
          200: "#d0dbc8",
          300: "#b1c3a5",
          400: "#8da57c", // Hauptfarbe: Moosgrün
          500: "#6f8a5e",
          600: "#576f49",
          700: "#465a3c",
          800: "#3a4a33",
          900: "#313e2c",
        },
        sage: {
          50: "#f5f7f5",
          100: "#eaefea",
          200: "#d5dfd5",
          300: "#b4c7b5",
          400: "#8da88f", // Hauptfarbe: Salbeigrün
          500: "#6e8c70",
          600: "#567158",
          700: "#465c48",
          800: "#3a4b3c",
          900: "#313f33",
        },
        forest: {
          50: "#f0f5f2",
          100: "#deeae1",
          200: "#c0d5c6",
          300: "#97b8a0",
          400: "#6d9677",
          500: "#4f7a5a",
          600: "#3a6145", // Hauptfarbe: Tannengrün
          700: "#304f39",
          800: "#294030",
          900: "#233529",
        },
        gold: {
          50: "#fbf9ec",
          100: "#f7f2d9",
          200: "#efe3b3",
          300: "#e5cf83",
          400: "#d9b650", // Hauptfarbe: Gold
          500: "#cc9e32",
          600: "#b37e26",
          700: "#946122",
          800: "#794f22",
          900: "#64421f",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "pattern-oriental": "url('/placeholder.svg?height=100&width=100')",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
