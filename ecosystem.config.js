module.exports = {
  apps: [
    {
      name: 'Relay_Kolon',
      script: './.output/server/index.mjs',
      args: 'start',
      exec_mode: 'cluster',
      instances: '2',
      env: {
        NUXT_PORT: "8090",
        NODE_ENV: 'production',
      },
      env_production: {
        NUXT_PORT: "8090",
        NODE_ENV: 'production',
      },
    }
  ]
}
  
  