module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Small mobile screens
      },

      colors: {
        active: "#22c55e", // Green for active users
        inactive: "#ef4444", // Red for inactive users
        onHold: "#fbbf24", // Yellow for on-hold users
      },
    },
  },
  plugins: [],
};
