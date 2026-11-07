/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "rgb(var(--color-brand) / <alpha-value>)",
          foreground: "rgb(var(--color-brand-foreground) / <alpha-value>)",
          muted: "rgb(var(--color-brand-muted) / <alpha-value>)",
          accent: "rgb(var(--color-accent) / <alpha-value>)",
          border: "rgb(var(--color-brand-border) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          foreground: "rgb(var(--color-accent-foreground) / <alpha-value>)",
        },
        canvas: "rgb(var(--color-canvas) / <alpha-value>)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      typography: {
        brand: {
          css: {
            "--tw-prose-body": "rgb(var(--color-brand-foreground))",
            "--tw-prose-headings": "rgb(var(--color-brand-foreground))",
            "--tw-prose-bold": "rgb(var(--color-brand-foreground))",
            "--tw-prose-links": "rgb(var(--color-accent))",
            "--tw-prose-bullets": "rgb(var(--color-brand-foreground))",
            "--tw-prose-counters": "rgb(var(--color-brand-foreground))",
            img: {
              maxWidth: "200px",
              width: "auto",
              height: "auto",
              marginTop: "0",
              marginBottom: "0",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
