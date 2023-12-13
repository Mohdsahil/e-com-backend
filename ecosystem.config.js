module.exports = {
    apps: [
      {
        name: 'E-commerce',
        script: 'index.js',
        args: '',
        instances: 1,
        autorestart: true,
        ignore_watch: ['attachment', '.git'],
        watch: true,
        max_memory_restart: '1G',
        env_local: {
          NODE_ENV: 'local',
        },
        env_development: {
          NODE_ENV: 'development',
        },
      },
    ],
  };
  