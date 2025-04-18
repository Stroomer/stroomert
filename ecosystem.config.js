export default {
  apps: [
    {
      name: 'stroomert',
      script: 'index.mjs', // Replace with your actual entry point if different
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 5500, // Replace with your desired port
      },
    },
  ],
};
