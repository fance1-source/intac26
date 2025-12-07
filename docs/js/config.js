// INTAC Website Configuration
// This file controls which features are enabled on the website

const APP_CONFIG = {
  // Feature Toggles - Set to true/false to enable/disable features
  features: {
    registration: false, // Set to TRUE to enable registration page
    conference: true, // Conference page
    news: true, // News page
    contact: true, // Contact page
  },

  // Maintenance Messages
  maintenance: {
    registrationMessage: "Registration will open soon. Stay tuned for updates!",
    contactEmail: "info@intac.my",
    contactPhone: "+603 1234 5678",
  },

  // Event Details (can be used across pages)
  event: {
    date: "3rd - 6th October 2026",
    venue: "Kuala Lumpur Convention Centre (KLCC)",
    time: "9:00 AM - 6:00 PM Daily",
  },
};

// How to use this config:
// 1. Set 'registration: true' when you want to enable the registration page
// 2. Set 'registration: false' when you want to disable it
// 3. No other code changes needed - everything updates automatically
