module.exports = {
  // pm2 start process.config.js
  apps: [
    {
      name: "api_server",
      script: "./server/bin/www",
      watch: false,
      env: {
        MOVIE_API_KEY: "d944a078a4b20b9d682dbafd21f11ace",
        REDIS_HOST: "100.26.92.104",
        REDIS_PORT: "6379",
        REDIS_PASSWORD: "z%?d-36#kp8Aa7+VBuhT",
        REDIS_MOVIE_CALL_BASE: "MOVIE_",
      },
    },
  ],
};
