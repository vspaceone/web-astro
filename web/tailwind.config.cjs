const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Ubuntu", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      screens: { "2xl": "1400px", "3xl": "1850px" },
      borderRadius: {
        card: "0.5rem",
        md: "0.5rem",
      },
      colors: {
        main: "hsl(var(--color-main))",
        primary: "hsl(var(--color-primary))",
        brand: "hsl(var(--color-brand))",
        secondary: "hsl(var(--color-secondary))",
        neutral: "hsl(var(--color-neutral))",
        "neutral-accent": "hsl(var(--color-neutral-accent))",
        success: "hsl(var(--color-success))",
        error: "hsl(var(--color-error))",
      },
      transitionTimingFunction: {
        "in-sine": "cubic-bezier(0.47, 0, 0.745, 0.715)",
        "out-sine": "cubic-bezier(0.39, 0.575, 0.565, 1)",
        "in-out-sine": "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
        "in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
        "out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
        "in-cubic": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
        "out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
        "in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)",
        "in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
        "out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
        "in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
        "in-quint": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
        "out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
        "in-out-quint": "cubic-bezier(0.86, 0, 0.07, 1)",
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-expo": "cubic-bezier(1, 0, 0, 1)",
        "in-circ": "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
        "out-circ": "cubic-bezier(0.075, 0.82, 0.165, 1)",
        "in-out-circ": "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
      },
      gap: {
        main: "var(--spacing-main)",
        card: "var(--gap-card)",
      },
      padding: {
        main: "var(--padding-main)",
        card: "var(--padding-card)",
        header: "var(--height-header)",
      },
      height: {
        header: "var(--height-header)",
      },
      spacing: {
        header: "var(--height-header)",
      },
      maxWidth: {
        section: "var(--max-width-section)",
        form: "var(--max-width-form)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addVariant }) => {
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
};
