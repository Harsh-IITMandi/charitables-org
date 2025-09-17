export const featureConfig = {
    // Payment options
    payments: {
        enableRazorpay: false, // set true when ready to implement
        enableBankTransfer: true,
        enablePayPal: false,
    },

    // Contact features
    contact: {
        enableContactForm: true,
        enableLiveChat: false,
        autoReplyEmail: true,
    },

    // Application Features
    application: {
        useGoogleForms: true,
        enableInternalForm: false,
    },

    // Analytics
    analytics: {
        enableGoogleAnalytics: false,
        googleAnalyticsId: "GA_MEASUREMENT_ID",
    },

    // Production Settings
    production: {
        enableErrorReporting: true,
        enablePerformanceMonitoring: true
    }
}